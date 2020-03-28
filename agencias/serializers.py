from rest_framework import serializers
from .models import Agencia, Cobrador, Tarifa, Zona
from accounts.models import Profile


class AgenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agencia
        fields = ['id', 'nombre']


class Agencias_UserSerializer(serializers.ModelSerializer):
    #agencias_list = AgenciaSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['agencias']
        depth = 1


class CobradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cobrador
        fields = ['id', 'nombre']


class TarifaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarifa
        fields = ['id', 'nombre']


class ZonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zona
        fields = ['id', 'nombre']