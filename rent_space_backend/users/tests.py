import pytest
from users.models import User
from users.serializers import UserSerializer


@pytest.mark.django_db
class TestSerializers:
    def test_user_serializer(self, django_user_model):
        user = {
            "id": 1,
            "name": "John Doe",
            "contact": 123456789,
            "address": "123 Test Street",
        }
        serializer = UserSerializer(data=user)
        if serializer.is_valid():            
            assert serializer.data["name"] == user["name"]
            assert serializer.data["contact"] != user["contact"]
            assert serializer.data["contact"] == str(user["contact"])
            assert serializer.data["address"] == user["address"]
