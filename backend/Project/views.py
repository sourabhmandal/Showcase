from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Project
from .serializer import ProjectSerializer
# Create your views here.


class ProjectsView(APIView):
    def get(self, request, *args, **kwargs):
        projectsList = Project.objects.all()
        serializer = ProjectSerializer(projectsList, many=True)
        return Response(serializer.data)
