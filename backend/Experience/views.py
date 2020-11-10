from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Experience
from .serializer import ExperienceSerializer
# Create your views here.


class ExperienceView(APIView):
    def get(self, request, *args, **kwargs):
        experienceList = Experience.objects.all()
        serializer = ExperienceSerializer(experienceList, many=True)
        return Response(serializer.data)
