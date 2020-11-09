from django.db import models


class Hobbies(models.Model):
    hobbie = models.CharField(verbose_name="Hobbie Name", max_length=100)

    def __str__(self):
        return self.hobbie

    class Meta:
        verbose_name_plural = 'Hobbies'
