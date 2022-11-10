from django.db import models

# Create your models here.
class Blog(models.Model):
    blogtitle=models.TextField()
    blogdescription=models.TextField()
    bloger=models.CharField(max_length=8)
    
    def __str__(self):
        return self.blogtitle

        
class Comment(models.Model):
    blog=models.ForeignKey(Blog, on_delete=models.CASCADE)
    comment=models.TextField()
    
    def __str__(self):
        return self.comment
