from django.db import models
import datetime


class Blog(models.Model):
    name = models.CharField(verbose_name="Blog Post Name", max_length=500)
    discription = models.TextField(verbose_name="Description")
    post_link = models.CharField(verbose_name="Blog Post Link", max_length=500)
    from_date = models.DateField(
        verbose_name="Post Date", default=datetime.date.today)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Blogs'
