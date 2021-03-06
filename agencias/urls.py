from django.urls import path, include
from rest_framework import routers
from .api import Agencias_User, Cobrador_Agencia, Tarifa_Agencia, Zona_Agencia, CobradorViewSet, ZonaViewSet, TarifaViewSet, AgenciaViewSet, ImgAgenciaUpdateViewSet, ConceptoComprobanteAPIView, PuntoVentaViewSet, PuntoVenta_Agencia, Comprobante_PtoVentaViewSet, Comprobante_PtoVenta_Agencia

router = routers.DefaultRouter()
router.register('api/agencias', AgenciaViewSet, 'agencias')
router.register('api/cobradores', CobradorViewSet, 'cobradores')
router.register('api/zonas', ZonaViewSet, 'zonas')
router.register('api/tarifas', TarifaViewSet, 'tarifas')
router.register('api/puntosventa', PuntoVentaViewSet, 'puntosventa')
router.register('api/comprobante-ptoventa',
                Comprobante_PtoVentaViewSet, 'comprobante_ptoventa')
router.register('api/agencia/img',
                ImgAgenciaUpdateViewSet, 'img_agencia_update')

urlpatterns = [
    path('api/auth/agenciasusuario/<str:codigo>',
         Agencias_User.as_view(), name='agencias_usuario'),
    path('api/cobrador-agencia/<str:agencia>',
         Cobrador_Agencia.as_view(), name='cobrador_agencia'),
    path('api/tarifa-agencia/<str:agencia>',
         Tarifa_Agencia.as_view(), name='tarifa_agencia'),
    path('api/zona-agencia/<str:agencia>',
         Zona_Agencia.as_view(), name='zona_agencia'),
    path('api/puntoventa-agencia/<str:agencia>',
         PuntoVenta_Agencia.as_view(), name='puntoventa_agencia'),
    path('api/comprobante_ptoventa-agencia/<str:agencia>',
         Comprobante_PtoVenta_Agencia.as_view(), name='comprobante_ptoventa_agencia'),
    path('', include(router.urls)),
    path('api/conceptoscomprobante',
         ConceptoComprobanteAPIView.as_view(), name='conceptoscomprobante'),
]
