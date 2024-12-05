from django.contrib import admin
from users.models import RentSpace, Application


@admin.register(RentSpace)
class RentSpaceAdmin(admin.ModelAdmin):
    list_display = [
        "image",
        "address",
        "room_type",
        "room_vacancy",
        "price_per_day",
        "description",
        "latitude",
        "longitude",
        "verified",
        "created_at",
    ]


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ["total_days", "total_price", "created_at"]
