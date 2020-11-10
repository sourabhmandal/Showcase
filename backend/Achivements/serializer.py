from rest_framework import serializers
from .models import Achivements
from django import forms


class AchivementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achivements
        fields = '__all__'
