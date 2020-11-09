from django.db import models


class Experience(models.Model):
    designation = models.CharField(
        verbose_name="Designation Name", max_length=500)
    company = models.CharField(verbose_name="Company Name", max_length=500)
    work = models.TextField(
        verbose_name="Describe Work You Did", max_length=500)
    from_date = models.DateField(verbose_name="From Date")
    to_date = models.DateField(verbose_name="To Date")
    location = models.CharField(
        verbose_name="Loacation", max_length=500)
    certificate = models.FileField(
        verbose_name="Certificate", upload_to='experiences/')

    def __str__(self):
        return self.designation + ' @ ' + self.company

    class Meta:
        verbose_name_plural = 'Work Experience'
