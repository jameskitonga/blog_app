# Generated by Django 4.0 on 2022-11-03 08:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='blogtext',
            new_name='blogdescription',
        ),
        migrations.RenameField(
            model_name='blog',
            old_name='comments',
            new_name='blogtitle',
        ),
    ]
