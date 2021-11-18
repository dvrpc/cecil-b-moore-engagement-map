from rest_framework import viewsets, permissions, status, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from ipware import get_client_ip
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import (
    CommentSerializer,
    MapUserSerializer,
    PinSerializer,
    PinGeoSerializer,
    LongformSurveySerializer,
)
from pins.models import Pin, MapUser

from .configuration import TAGS


class PinGeoViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to see all pins as geojson
    """

    queryset = Pin.objects.all()
    serializer_class = PinGeoSerializer
    permission_classes = [permissions.AllowAny]


class PinFilterList(generics.ListAPIView):
    """
    API endpoint to see all pins that meet a specific tag column filter
    """

    queryset = Pin.objects.all()
    serializer_class = PinGeoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [f"tag_{x}" for x in range(1, len(TAGS) + 1)]


@api_view(["GET"])
def all_tags(request):
    """
    API endpoint to see all TAG_X environment variables
    """
    return Response(TAGS, status=status.HTTP_200_OK)


def ensure_user_is_in_db(client_ip) -> bool:
    """
    For a given IP address, see if it's in our table.
    If so, do nothing and return False.

    If it's not in our table, add the record and return True.
    """

    try:
        user = MapUser.objects.get(ip_address=client_ip)

        return False

    except:
        user_serializer = MapUserSerializer(data={"ip_address": client_ip})

        if user_serializer.is_valid():
            user_serializer.save()

        return True


@api_view(["POST"])
@authentication_classes([TokenAuthentication])
def add_pin(request):
    """
    Add a pin to the map.
    """
    if request.method == "POST":

        # Get the user's IP address
        client_ip, is_routable = get_client_ip(request)

        if not client_ip:
            client_ip = "999.8.7.6"

        # Insert the IP address into the user's data dict
        data = request.data.copy()
        data["ip_address"] = client_ip

        # Insert the record into the database
        serializer = PinSerializer(data=data)

        if serializer.is_valid():
            serializer.save()

            # send true/false in response if user was added
            user_was_added = ensure_user_is_in_db(client_ip)
            response_data = serializer.data.copy()
            response_data["user_was_added"] = user_was_added

            return Response(response_data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@authentication_classes([TokenAuthentication])
def add_comment(request):
    """
    Add a comment record tied to an existing pin
    """
    if request.method == "POST":

        # Get the user's IP address
        client_ip, is_routable = get_client_ip(request)

        if not client_ip:
            client_ip = "999.8.7.6"

        # Insert the IP address into the user's data dict
        data = request.data.copy()
        data["ip_address"] = client_ip

        # Insert the record into the database
        comment_serializer = CommentSerializer(data=data)

        if comment_serializer.is_valid():
            comment_serializer.save()

            # send true/false in response if user was added
            user_was_added = ensure_user_is_in_db(client_ip)
            response_data = comment_serializer.data.copy()
            response_data["user_was_added"] = user_was_added

            return Response(response_data, status=status.HTTP_201_CREATED)

        return Response(comment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@authentication_classes([TokenAuthentication])
def add_user_info(request):
    """
    Add user info to the database
    """
    if request.method == "POST":

        client_ip, is_routable = get_client_ip(request)
        data = request.data.copy()
        data["responded_to_survey_question"] = True

        # force list-based responses into a
        # semi-colon-delimited string
        for key, value in data.items():
            if type(value) == list:
                data[key] = ";".join(value)

        # Assuming the user already exists, update their record
        try:

            # Assign whichever attributes are provided
            # (can include q1 through q6)
            obj = MapUser.objects.get(ip_address=client_ip)
            for key, value in data.items():
                setattr(obj, key, str(value))

            obj.save()

            status_code = status.HTTP_200_OK

        # If the user record does not exist, create it
        except MapUser.DoesNotExist:
            data["ip_address"] = client_ip

            obj = MapUser(**data)
            obj.save()

            status_code = status.HTTP_201_CREATED

        finally:
            return Response(request.data, status=status_code)


@api_view(["POST"])
@authentication_classes([TokenAuthentication])
def add_longform_survey(request):
    """
    Add longform survey to the database
    """
    if request.method == "POST":

        client_ip, is_routable = get_client_ip(request)
        data = request.data.copy()
        data["ip_address"] = client_ip

        user_was_added = ensure_user_is_in_db(client_ip)

        data["user_was_added"] = user_was_added

        # force list-based responses into a
        # semi-colon-delimited string
        for key, value in data.items():
            if type(value) == list:
                data[key] = ";".join(value)

        survey_serializer = LongformSurveySerializer(data=data)

        if survey_serializer.is_valid():
            survey_serializer.save()

            status_code = status.HTTP_201_CREATED

        else:
            status_code = status.HTTP_400_BAD_REQUEST

        return Response(data, status=status_code)
