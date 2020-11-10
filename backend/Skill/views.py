from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Skills
from .serializer import SkillsSerializer
# Create your views here.


class SkillsView(APIView):
    def get(self, request, *args, **kwargs):
        skillsList = Skills.objects.all()
        serializer = SkillsSerializer(skillsList, many=True)
        return Response(serializer.data)
