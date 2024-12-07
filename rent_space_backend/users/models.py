from django.db import models
from django.conf import settings


class User(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user"
    )

    # Boolean fields to select the type of account.
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class RentSpace(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="rent_space"
    )

    # Boolean fields to select the type of account.
    image = models.URLField()
    address = models.CharField(max_length=100)
    room_type = models.CharField(max_length=100)
    room_vacancy = models.IntegerField()
    price_per_day = models.IntegerField()
    description = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)



class Application(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="application"
    )
    rent_space = models.ForeignKey(
        RentSpace, on_delete=models.CASCADE, related_name="application"
    )
    total_days = models.IntegerField()
    total_price = models.IntegerField()
    booking_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
