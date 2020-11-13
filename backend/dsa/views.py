from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Dsa
from .serializer import DsaSerializer
# Create your views here.


class DsaView(APIView):
    def get(self, request, *args, **kwargs):
        dsaList = Dsa.objects.all()
        serializer = DsaSerializer(dsaList, many=True)
        return Response(serializer.data)
