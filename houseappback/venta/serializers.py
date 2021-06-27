from rest_framework import serializers
from venta.models import Casa

class CasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casa
        fields = ('nombre','ubicacion','area_lote','area_construida',
        'habitaciones','baños','descripcion','valor')