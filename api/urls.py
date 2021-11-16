from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"get-pins", views.PinGeoViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("add-pin/", views.add_pin, name="index"),
    path("add-comment/", views.add_comment, name="index"),
    path("add-user-info/", views.add_user_info, name="index"),
    path("add-longform-survey/", views.add_longform_survey, name="index"),
    path("tags/", views.all_tags, name="index"),
    path("filter-pins/", views.PinFilterList.as_view(), name="index"),
]
