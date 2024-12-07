import pytest
from users.models import User, Application, RentSpace
from users.serializers import (
    UserSerializer,
    UserRegistrationSerializer,
    RentSpaceSerializer,
    ViewApplicationSerializer,
    ApplicationSerializer,
)
from rest_framework.exceptions import ValidationError
from rest_framework.test import APIRequestFactory


@pytest.mark.django_db
class TestSerializers:
    def test_user_serializer(self, django_user_model):
        user = django_user_model.objects.create_user(
            username="testuser",
            password="password",
            name="John Doe",
            contact=123456789,
            address="123 Test Street",
        )
        serializer = UserSerializer(user)
        assert serializer.data["id"] == user.id
        assert serializer.data["name"] == user.name
        assert serializer.data["contact"] == user.contact
        assert serializer.data["address"] == user.address

    def test_user_registration_serializer(self, django_user_model):
        data = {
            "email": "test@example.com",
            "password1": "securepassword123",
            "password2": "securepassword123",
            "name": "Jane Doe",
            "contact": 987654321,
            "address": "456 Test Lane",
        }
        request = APIRequestFactory().post("/register/", data)
        serializer = UserRegistrationSerializer(data=data, context={"request": request})
        assert serializer.is_valid(), serializer.errors
        user = serializer.save(request)
        assert user.is_normal_user
        assert user.email == data["email"]
        assert user.userprofile.name == data["name"]
        assert user.userprofile.contact == data["contact"]
        assert user.userprofile.address == data["address"]

    def test_rent_space_serializer(self, django_user_model):
        user = django_user_model.objects.create_user(
            username="spaceuser", password="password"
        )
        rent_space = RentSpace.objects.create(user=user, verified=False)
        serializer = RentSpaceSerializer(rent_space)
        assert serializer.data["user"] == user.id
        assert serializer.data["verified"] is False

    def test_view_application_serializer(self, django_user_model):
        user = django_user_model.objects.create_user(
            username="appuser", password="password"
        )
        application = Application.objects.create(user=user, total_price=500)
        serializer = ViewApplicationSerializer(application)
        assert serializer.data["total_price"] == 500
        assert "user" in serializer.data
        assert serializer.data["user"]["id"] == user.id  # depth=1

    def test_application_serializer(self, django_user_model):
        user = django_user_model.objects.create_user(
            username="appuser", password="password"
        )
        application = Application.objects.create(user=user, total_price=500)
        serializer = ApplicationSerializer(application)
        assert serializer.data["total_price"] == 500
        assert serializer.data["user"] == user.id  # no depth
