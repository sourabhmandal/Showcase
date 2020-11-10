from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Hobbies
from .serializer import HobbiesSerializer
# Create your views here.


class HobbiesView(APIView):
    def get(self, request, *args, **kwargs):
        hobbiesList = Hobbies.objects.all()
        serializer = HobbiesSerializer(hobbiesList, many=True)
        return Response(serializer.data)
