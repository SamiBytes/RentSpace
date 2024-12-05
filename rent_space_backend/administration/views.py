# Create your views here.
from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import BasePermission
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserRegistrationSerializer, RentSpaceSerializer
from users.models import RentSpace, Application
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


class AuthenticateOnlyAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_admin:
                return True
            else:
                return False

        return False


class CustomLoginView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract email and password from the request data
        email = request.data.get("email")
        password = request.data.get("password")

        # Attempt to authenticate the user
        user = authenticate(request, email=email, password=password)
        if not user:
            return Response(
                {"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        # Generate JWT tokens
        refresh_token = RefreshToken.for_user(user)

        # Prepare the response data
        response_data = {
            "access": str(refresh_token.access_token),
            "refresh": str(refresh_token),
            "user": {
                "pk": user.pk,
                "username": user.username,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
            },
            "normal_user": user.is_user,
            "admin": user.is_admin,
        }

        return Response(response_data, status=status.HTTP_200_OK)


class RentSpaceApproveView(APIView):
    permission_classes = [AuthenticateOnlyAdmin]

    def get(self, request):
        instances = RentSpace.objects.filter(verified=False)
        serializer = RentSpaceSerializer(instances, many=True)
        return Response(serializer.data)

    def delete(self, request, pk):
        instance = RentSpace.objects.get(id=pk)
        instance.delete()
        return Response({"text": "Rent space deleted successfully."})

    def put(self, request, pk):
        instance = RentSpace.objects.get(id=pk)
        instance.verified = True
        instance.save()
        return Response({"text": "Rent space approved successfully."})
