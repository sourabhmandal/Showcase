from rest_framework import serializers
from .models import Achivements


class AchivementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achivements
        fields = '__all__'
