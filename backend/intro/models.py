from django.db import models
from django.core.exceptions import ValidationError


class Introduction(models.Model):
    name = models.CharField(verbose_name="My Name", max_length=40)
    designation = models.CharField(
        verbose_name="My Designation", max_length=20)
    description = models.TextField(
        verbose_name="Short Note About Me", max_length=500)
    hero_pic = models.ImageField(verbose_name="My Picture")

    def clean(self):
        return validate_only_one_instance(self)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Introduction (only one feild allowed)'


class Links(models.Model):
    link_name = models.CharField(
        verbose_name="Link Display Name", max_length=500)
    link_url = models.CharField(verbose_name="Link", max_length=500)

    def __str__(self):
        return self.link_name

    class Meta:
        verbose_name_plural = 'Social Media Links'


class NavTabs(models.Model):
    nav_name = models.CharField(
        verbose_name="Nav Display Name", max_length=500)
    nav_link = models.CharField(verbose_name="Nav Link", max_length=500)
    nav_pos = models.IntegerField(unique=True, null=True)

    def __str__(self):
        return self.nav_name

    class Meta:
        verbose_name_plural = 'Navigation Links'


class ResumePDF(models.Model):
    file_pdf = models.FileField(verbose_name="PDF FILE", upload_to='files/')

    def __str__(self):
        return self.file_pdf.name[6:]

    def clean(self):
        return validate_only_one_instance(self)

    class Meta:
        verbose_name_plural = 'PDF Resume (only one instance allowed)'


def validate_only_one_instance(obj):
    model = obj.__class__
    if (model.objects.count() > 0 and obj.id != model.objects.get().id):
        raise ValidationError("Can only create 1 %s instance" % model.__name__)
