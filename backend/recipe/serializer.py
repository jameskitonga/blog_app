from rest_framework import serializers
from .models import Recipe
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

#creating serilazier

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Recipe
        fields=("name","cooktime","serving","instruction","ingredient")


## ANOTHER  VIEW

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data=super(CustomTokenObtainPairSerializer,self).validate(attrs)
        data.update({
            'username':self.user.username

          })
        data.update({
            'email':self.user.email
        })
        return data


## ANOTHER  VIEW

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(
        min_length=8, write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

