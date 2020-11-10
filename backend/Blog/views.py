from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Blog
from .serializer import BlogSerializer
# Create your views here.


class BlogView(APIView):
    def get(self, request, *args, **kwargs):
        blogList = Blog.objects.all()
        serializer = BlogSerializer(blogList, many=True)
        return Response(serializer.data)
