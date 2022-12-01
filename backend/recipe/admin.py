from django.contrib import admin
from .models import Blog
from .models import Comment
from .  import models


# Register your models here.
# admin.site.register(Blog)
@admin.register(models.Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display=("blogtitle","blogdescription","blogpost","bloger","slug",'image')
    prepopulated_fields={'slug':('blogtitle',),}




admin.site.register(Comment)