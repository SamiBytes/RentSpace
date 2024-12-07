import pytest
from rest_framework import status
from django.urls import reverse
from rest_framework.test import APIClient


@pytest.mark.django_db  # This allows database access for this test
def test_private_route():
    # Get the URL for the public-pet view
    url = reverse("rent_space_approve")

    # Use API client to make a GET request
    client = APIClient()
    response = client.get(url, format="json")

    # Assert that the response status code is 200 (OK)
    assert (
        response.status_code != status.HTTP_200_OK
    ), f"Expected 200 OK, but got {response.status_code}"
