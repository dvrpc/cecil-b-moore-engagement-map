from django.shortcuts import render


# English routes
# --------------


def index(request):
    """
    This is the main landing page, at the root '/' path.
    """

    return render(request, "landing-page.html")


def longform_survey(request):
    """
    This is the full survey form
    """

    return render(request, "survey.html")


def demographic_survey(request):
    """
    This is the demographic survey
    """

    return render(request, "survey-demographics.html")


def survey_thanks(request):
    """
    This is the thank-you page for the survey
    """

    return render(request, "survey-thanks.html")


# Spanish routes
# --------------


def spanish_index(request):
    """
    This is the main landing page, at the root '/' path.
    """

    return render(request, "es-landing-page.html")


def spanish_longform_survey(request):
    """
    This is the full survey form
    """

    return render(request, "es-survey.html")


def spanish_demographic_survey(request):
    """
    This is the demographic survey
    """

    return render(request, "es-survey-demographics.html")


def spanish_survey_thanks(request):
    """
    This is the thank-you page for the survey
    """

    return render(request, "es-survey-thanks.html")
