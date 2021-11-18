from django.urls import include, path

from . import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # English app
    path("", views.index, name="index"),
    path("survey", views.longform_survey, name="survey"),
    path("thanks", views.survey_thanks, name="survey"),
    path("demographics", views.demographic_survey, name="survey"),
    # Spanish app
    path("es/", views.spanish_index, name="index"),
    path("es/survey", views.spanish_longform_survey, name="survey"),
    path("es/thanks", views.spanish_survey_thanks, name="survey"),
    path("es/demographics", views.spanish_demographic_survey, name="survey"),
]
