# Generated by Django 4.0 on 2022-11-21 11:16

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_blog_image_blog_slug_alter_blog_bloger'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.ImageField(default='blogs/img.jpg', upload_to=blog.models.upload_to, verbose_name='Image'),
        ),
    ]
