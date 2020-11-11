"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from Achivements.views import AchiveView
from Blog.views import BlogView
from Courses.views import CoursesView
from Education.views import EducationView
from Experience.views import ExperienceView
from Hobbies.views import HobbiesView
from intro.views import IntroductionView, LinksView, NavTabsView, ResumePDFView
from Project.views import ProjectsView
from Skill.views import SkillsView


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('achivement/', AchiveView.as_view(), name='achivement'),
    path('blog/', BlogView.as_view(), name='blog'),
    path('courses/', CoursesView.as_view(), name='courses'),
    path('education/', EducationView.as_view(), name='education'),
    path('experience/', ExperienceView.as_view(), name='experience'),
    path('hobbies/', HobbiesView.as_view(), name='hobbies'),
    path('intro/', IntroductionView.as_view(), name='intro'),
    path('links/', LinksView.as_view(), name='links'),
    path('navtabs/', NavTabsView.as_view(), name='navtabs'),
    path('resume/', ResumePDFView.as_view(), name='resume'),
    path('projects/', ProjectsView.as_view(), name='projects'),
    path('skills/', SkillsView.as_view(), name='skills'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
