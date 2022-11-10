from django.shortcuts import render
from rest_framework import viewsets
from .serializer import BlogSerializer,UserSerializer
from .models import Blog
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.

class BlogView(viewsets.ModelViewSet):
    serializer_class=BlogSerializer
    # how we want our data to be displayed
    #you have to sppecify the queryset
    queryset=Blog.objects.all()

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








