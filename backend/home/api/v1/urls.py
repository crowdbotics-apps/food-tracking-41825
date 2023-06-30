from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import FoodViewSet,FoodCategoryViewSet,FoodConsumptionViewSet,UserViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('foodconsumption', FoodConsumptionViewSet )
router.register('food', FoodViewSet )
router.register('user', UserViewSet )
router.register('foodcategory', FoodCategoryViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
