from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import UserView,CustomTokenObtainPairView

urlpatterns = [
    
    path('token/obtain', CustomTokenObtainPairView.as_view(), name='token_obtain_pair_views'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh_views'),
    path('user/create/', UserView.as_view(), name='create_user')
    


]