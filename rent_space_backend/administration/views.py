# Create your views here.
from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import BasePermission
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserRegistrationSerializer, RentSpaceSerializer
from users.models import RentSpace, Application


class AuthenticateOnlyAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            if request.user.is_admin:
                return True
            else:
                return False

        return False


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
