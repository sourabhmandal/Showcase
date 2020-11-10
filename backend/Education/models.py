from django.db import models


class Education(models.Model):
    degree = models.CharField(verbose_name="Degree Name", max_length=500)
    college = models.CharField(verbose_name="College Name", max_length=500)
    sgpa = models.CharField(verbose_name="SGPA / Percentage", max_length=500)
    from_date = models.DateField(verbose_name="From Date")
    to_date = models.DateField(verbose_name="To Date")
    location = models.CharField(
        verbose_name="Location", max_length=500)

    def __str__(self):
        return self.degree + ' @ ' + self.college

    class Meta:
        verbose_name_plural = 'Education'
