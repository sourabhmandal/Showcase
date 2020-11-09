from django.contrib import admin
from .models import Introduction, Links, NavTabs, ResumePDF
# Register your models here.
admin.site.register(Introduction)
admin.site.register(Links)
admin.site.register(NavTabs)
admin.site.register(ResumePDF)
