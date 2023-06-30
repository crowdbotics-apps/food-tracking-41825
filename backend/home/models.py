from django.conf import settings
from django.db import models
class FoodConsumption(models.Model):
    'Generated Model'
    datetime = models.DateTimeField(auto_now_add=True,)
    food = models.ForeignKey("home.Food",on_delete=models.CASCADE,null=True,blank=True,related_name="foodconsumption_food",)
    servings = models.PositiveSmallIntegerField(null=True,blank=True,)
class Food(models.Model):
    'Generated Model'
    name = models.TextField()
    category = models.ForeignKey("home.FoodCategory",on_delete=models.CASCADE,null=True,blank=True,related_name="food_category",)
    image = models.BinaryField(null=True,blank=True,)
class User(models.Model):
    'Generated Model'
    email = models.EmailField(max_length=254,)
    password = models.TextField()
    username = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True,)
    consumption = models.ManyToManyField("home.FoodConsumption",blank=True,related_name="user_consumption",)
    cheatDays = models.SmallIntegerField(null=True,blank=True,)
    eatingStartTime = models.SmallIntegerField(null=True,blank=True,)
class FoodCategory(models.Model):
    'Generated Model'
    name = models.TextField()
