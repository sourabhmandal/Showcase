from django.db import models

# Create your models here.


class Dsa(models.Model):
    platform = models.CharField(verbose_name="Platform Name", max_length=500)
    username = models.CharField(verbose_name="Username", max_length=500)
    link = models.CharField(verbose_name="Website", max_length=500)
    rating = models.CharField(verbose_name="Rating", max_length=500, null=True)
    ranking = models.CharField(
        verbose_name="Ranking", max_length=500, null=True)
    remark = models.TextField(verbose_name="Remark", max_length=500)

    def __str__(self):
        return self.username + " @ " + self.platform

    class Meta:
        verbose_name_plural = 'DSA and CP Skills'
