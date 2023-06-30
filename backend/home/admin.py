from django.contrib import admin
from .models import Food,FoodCategory,FoodConsumption,User
admin.site.register(FoodConsumption)
admin.site.register(Food)
admin.site.register(User)
admin.site.register(FoodCategory)

# Register your models here.
