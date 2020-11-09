from django.db import models


class Courses(models.Model):
    name = models.CharField(verbose_name="Course Name", max_length=500)
    discription = models.TextField(verbose_name="Description")
    from_date = models.DateField(verbose_name="Start Date")
    to_date = models.DateField(verbose_name="End Date")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Courses'
