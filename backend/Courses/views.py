from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Courses
from .serializer import CoursesSerializer
# Create your views here.


class CoursesView(APIView):
    def get(self, request, *args, **kwargs):
        coursesList = Courses.objects.all()
        serializer = CoursesSerializer(coursesList, many=True)
        return Response(serializer.data)
