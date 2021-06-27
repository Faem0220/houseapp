from django.db import models
from django.contrib import admin

# Create your models here.
class Casa(models.Model):
    nombre = models.CharField(max_length=20,default='')
    ubicacion = models.CharField(max_length=200,default='')
    area_lote = models.CharField(max_length=20,default='')
    area_construida = models.CharField(max_length=20,default='')
    habitaciones = models.IntegerField(default=0)
    baños = models.IntegerField(default=0)
    descripcion = models.CharField(max_length=500,default='')
    valor = models.IntegerField(default=0)
    def __str__(self):
        return (self.nombre)

admin.site.register(Casa)

