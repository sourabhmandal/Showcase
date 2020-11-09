from django.db import models


class Skills(models.Model):
    skill = models.CharField(verbose_name="Skill Name", max_length=100)
    percent = models.IntegerField(verbose_name="Percent")

    def __str__(self):
        return self.skill

    class Meta:
        verbose_name_plural = 'Skills'
