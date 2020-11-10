from rest_framework import serializers
from .models import Introduction, Links, NavTabs, ResumePDF


class IntroductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Introduction
        fields = '__all__'


class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = '__all__'


class NavTabsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavTabs
        fields = '__all__'


class ResumePDFSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumePDF
        fields = '__all__'
