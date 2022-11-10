from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    
path('token/obtain', TokenObtainPairView.as_view(), name='token_obtain_pair_views'),
path('token/refresh', TokenRefreshView.as_view(), name='token_refresh_views'),

]