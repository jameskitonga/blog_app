from django.shortcuts import render
from rest_framework import viewsets
from .serializer import RecipeSerializer,UserSerializer,CustomTokenObtainPairSerializer
from .models import Recipe
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import get_object_or_404
# Create your views here.

class RecipeView(viewsets.ModelViewSet):
    serializer_class=RecipeSerializer
    # how we want our data to be displayed
    #you have to sppecify the queryset
    def  get_queryset(self):    
        return Recipe.objects.all()


    def get_object(self,queryset=None,**kwargs):
        item=self.kwargs.get('pk')
        return get_object_or_404(Blog,slug=item)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class=CustomTokenObtainPairSerializer



class UserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class UserView(APIView):
#     permission_classes=(permissions.AllowAny,)
#     authentication_classes=()           

#     def post(self,request,format='json'):
#         serializer=UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    








