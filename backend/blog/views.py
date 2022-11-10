from django.shortcuts import render
from rest_framework import viewsets
from .serializer import BlogSerializer
from .models import Blog

# Create your views here.

class BlogView(viewsets.ModelViewSet):
    serializer_class=BlogSerializer
    # how we want our data to be displayed
    #you have to sppecify the queryset
    queryset=Blog.objects.all()










