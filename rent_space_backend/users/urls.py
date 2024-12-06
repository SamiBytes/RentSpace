from django.urls import path
from users.views import (
    RentSpaceView,
    PublicRentSpaceView,
    ApplicationView,
    UserRegistrationView,
)

urlpatterns = [
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("rent-space/", RentSpaceView.as_view(), name="rent_space"),
    path("rent-space/<int:pk>", RentSpaceView.as_view(), name="rent_space"),
    path("public-rent-space/", PublicRentSpaceView.as_view(), name="public_rent_space"),
    path("application/", ApplicationView.as_view(), name="application"),
]
