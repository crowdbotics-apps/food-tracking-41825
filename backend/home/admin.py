from django.contrib import admin
from .models import AppUser,Food,FoodCategory,FoodConsumption,User
admin.site.register(FoodConsumption)
admin.site.register(Food)
admin.site.register(User)
admin.site.register(FoodCategory)
admin.site.register(AppUser)

# Register your models here.
