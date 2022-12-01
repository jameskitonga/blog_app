from django.db import models
from django.utils.translation import gettext_lazy as _







# Create your models here.
class Recipe(models.Model):
    name=models.CharField(max_length=100)
    cooktime=models.TextField()
    serving=models.TextField(null=True)
    instruction=models.TextField()
 
    def __str__(self):
        return self.name

        
class Comment(models.Model):
    recipe=models.ForeignKey(Recipe, on_delete=models.CASCADE)
    comment=models.TextField()
    
    def __str__(self):
        return self.comment
