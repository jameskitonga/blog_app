from rest_framework import serializers
from .models import Blog

#creating serilazier

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=("blogtitle","blogdescription","bloger")