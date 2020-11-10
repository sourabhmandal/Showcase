from django.db import models


class Achivements(models.Model):
    name = models.CharField(verbose_name="Achivement Name", max_length=500)
    position = models.IntegerField(verbose_name="Position Aquired")
    discription = models.TextField(verbose_name="Description")
    from_date = models.DateField(verbose_name="From Date")
    to_date = models.DateField(verbose_name="To Date")

    def __str__(self):
        return str(self.position) + ' in ' + self.name

    class Meta:
        verbose_name_plural = 'Achivements'
