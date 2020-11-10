from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Introduction, Links, NavTabs, ResumePDF
from .serializer import IntroductionSerializer, LinksSerializer, NavTabsSerializer, ResumePDFSerializer
# Create your views here.


class IntroductionView(APIView):
    def get(self, request, *args, **kwargs):
        introductionList = Introduction.objects.all()
        serializer = IntroductionSerializer(introductionList, many=True)
        return Response(serializer.data)


class LinksView(APIView):
    def get(self, request, *args, **kwargs):
        linksList = Links.objects.all()
        serializer = LinksSerializer(linksList, many=True)
        return Response(serializer.data)


class NavTabsView(APIView):
    def get(self, request, *args, **kwargs):
        navtabList = NavTabs.objects.all()
        serializer = NavTabsSerializer(navtabList, many=True)
        return Response(serializer.data)


class ResumePDFView(APIView):
    def get(self, request, *args, **kwargs):
        resumepdfList = ResumePDF.objects.all()
        serializer = ResumePDFSerializer(resumepdfList, many=True)
        return Response(serializer.data)
