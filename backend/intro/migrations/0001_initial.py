# Generated by Django 3.1.3 on 2020-11-09 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Intro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, verbose_name='My Name')),
                ('designation', models.CharField(max_length=20, verbose_name='My Designation')),
                ('description', models.TextField(max_length=500, verbose_name='Short Note About Me')),
                ('hero_pic', models.ImageField(upload_to='', verbose_name='My Picture')),
            ],
        ),
    ]
