from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import BasePermission
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import (
    UserRegistrationSerializer,
    RentSpaceSerializer,
    UserSerializer,
    ApplicationSerializer,
)
from users.models import RentSpace, Application, User


class AuthenticateOnlyUser(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_normal_user:
                return True
            else:
                return False

        return False


class UserRegistrationView(RegisterView):
    serializer_class = UserRegistrationSerializer


class RentSpaceView(APIView):
    permission_classes = [AuthenticateOnlyUser]

    def get(self, request):
        if "id" in request.query_params:
            instance = RentSpace.objects.get(id=request.query_params["id"])
            serializer = RentSpaceSerializer(instance)
            return Response(serializer.data)

        instances = RentSpace.objects.filter(user=request.user)
        serializer = RentSpaceSerializer(instances, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RentSpaceSerializer(data=request.data)
        if serializer.is_valid():
            RentSpace.objects.create(**serializer.validated_data, user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        instance = RentSpace.objects.get(id=pk)
        serializer = RentSpaceSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        instance = RentSpace.objects.get(id=pk)
        instance.delete()
        return Response({"text": "Rent space deleted successfully."})


class PublicRentSpaceView(APIView):
    def get(self, request):
        if "id" in request.query_params:
            instance = RentSpace.objects.get(id=request.query_params["id"])
            serializer = RentSpaceSerializer(instance)
            return Response(serializer.data)

        instances = RentSpace.objects.filter(verified=True)
        serializer = RentSpaceSerializer(instances, many=True)
        return Response(serializer.data)


class ApplicationView(APIView):
    permission_classes = [AuthenticateOnlyUser]

    def get(self, request):
        instances = Application.objects.filter(user=request.user)
        serializer = RentSpaceSerializer(instances, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RentSpaceSerializer(data=request.data)
        if serializer.is_valid():
            Application.objects.create(**serializer.validated_data, user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileView(APIView):
    permission_classes = [AuthenticateOnlyUser]

    def get(self, request):
        user = User.objects.get(user_id=request.user.id)
        return Response(UserSerializer(user).data)

    def put(self, request):
        user = User.objects.get(user_id=request.user.id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationView(APIView):
    permission_classes = [AuthenticateOnlyUser]

    def get(self, request):
        instances = Application.objects.filter(user=request.user)
        serializer = ApplicationSerializer(instances, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            instance = RentSpace.objects.get(id=serializer.validated_data["rent_space"].id)
            
            price = instance.price_per_day * serializer.validated_data["total_days"]
            Application.objects.create(
                **serializer.validated_data, user=request.user, total_price=price
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
