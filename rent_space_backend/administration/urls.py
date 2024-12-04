from django.urls import path
from administration.views import RentSpaceApproveView

urlpatterns = [
    path(
        "rent-space-approve/", RentSpaceApproveView.as_view(), name="rent_space_approve"
    ),
    path(
        "rent-space-approve/<int:pk>/",
        RentSpaceApproveView.as_view(),
        name="rent_space_approve",
    ),
]
