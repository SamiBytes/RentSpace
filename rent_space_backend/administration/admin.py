from django.contrib import admin
from administration.models import RoleUserModel


@admin.register(RoleUserModel)
class RoleUserAdmin(admin.ModelAdmin):
    list_display = [
        "username",
        "is_normal_user",
        "is_admin",
    ]
