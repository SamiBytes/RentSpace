from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from users.models import User, Application, RentSpace


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "contact", "address"]


# Custom Registration
class UserRegistrationSerializer(RegisterSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )  # by default allow_null = False

    name = serializers.CharField(required=True)
    contact = serializers.IntegerField(required=True)
    address = serializers.CharField(required=True)

    def get_cleaned_data(self):
        data = super(UserRegistrationSerializer, self).get_cleaned_data()
        extra_data = {
            "name": self.validated_data.get("name", ""),
            "address": self.validated_data.get("address", ""),
            "contact": self.validated_data.get("contact", ""),
        }
        data.update(extra_data)
        return data

    def save(self, request):
        user = super(UserRegistrationSerializer, self).save(request)
        user.is_normal_user = True
        user.save()
        User(
            user=user,
            name=self.validated_data.get("name"),
            address=self.validated_data.get("address"),
            contact=self.validated_data.get("contact"),
        ).save()
        return user


class RentSpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentSpace
        fields = "__all__"
        read_only_fields = (
            "user",
            "verified",
            "created_at",
        )


class ViewApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = "__all__"
        read_only_fields = (
            "user",
            "created_at",
            "total_price",
        )
        depth = 1

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = "__all__"
        read_only_fields = (
            "user",
            "created_at",
            "total_price",
        )
