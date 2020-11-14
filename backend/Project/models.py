from django.db import models


class Project(models.Model):
    title = models.CharField(verbose_name="Project Name", max_length=100)
    description = models.TextField(verbose_name="Desciption")
    project_demo = models.CharField(
        verbose_name="Project Link", max_length=500, null=True)
    project_link = models.CharField(
        verbose_name="Project Link", max_length=500)
    project_blog = models.CharField(
        verbose_name="Project Blog", max_length=500)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Project'
