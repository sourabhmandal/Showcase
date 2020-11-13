from rest_framework import serializers
from .models import Dsa


class DsaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dsa
        fields = '__all__'
