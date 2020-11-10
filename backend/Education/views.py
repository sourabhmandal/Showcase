from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Education
from .serializer import EducationSerializer
# Create your views here.


class EducationView(APIView):
    def get(self, request, *args, **kwargs):
        educationList = Education.objects.all()
        serializer = EducationSerializer(educationList, many=True)
        return Response(serializer.data)
