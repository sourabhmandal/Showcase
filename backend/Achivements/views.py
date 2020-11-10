from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Achivements
from .serializer import AchivementSerializer
# Create your views here.


class AchiveView(APIView):
    def get(self, request, *args, **kwargs):
        achivement_list = Achivements.objects.all()
        serializer = AchivementSerializer(achivement_list, many=True)
        return Response(serializer.data)

    # IMPROVEMENT FEATURE = FOR LATER DEVELOPMENT
    # def post(self, request, *args, **kwargs):
    #     serializer = AchivementSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
