from django.conf import settings
from django.db import models
class FoodConsumption(models.Model):
    'Generated Model'
    datetime = models.DateTimeField(auto_now_add=True,)
    food = models.ForeignKey("home.Food",null=True,blank=True,on_delete=models.CASCADE,related_name="foodconsumption_food",)
    servings = models.PositiveSmallIntegerField(null=True,blank=True,)
class Food(models.Model):
    'Generated Model'
    name = models.TextField()
    category = models.ForeignKey("home.FoodCategory",null=True,blank=True,on_delete=models.CASCADE,related_name="food_category",)
    image = models.BinaryField(null=True,blank=True,)
class User(models.Model):
    'Generated Model'
    eatingStartTime = models.SmallIntegerField(null=True,blank=True,)
class FoodCategory(models.Model):
    'Generated Model'
    name = models.TextField()
class AppUser(models.Model):
    'Generated Model'
    username = models.TextField()
    email = models.EmailField(max_length=254,null=True,blank=True,)
    password = models.TextField(null=True,blank=True,)
    consumption = models.ManyToManyField("home.FoodConsumption",blank=True,related_name="appuser_consumption",)
    cheatDays = models.SmallIntegerField(null=True,blank=True,)
