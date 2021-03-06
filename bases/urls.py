from django.urls import path, include
from rest_framework import routers
from .api import ProvinciaViewSet, AlicuotaIVAViewSet, CodigoPostalViewSet, CondicionIVAViewSet, TipoDocumentoViewSet, ComprobanteViewSet, TipoComprobanteChoiceAPIView

from accounts.api import ProfileViewSet, ImgProfileUpdateViewSet, UserUpdateViewSet

router = routers.DefaultRouter()
router.register('api/provincias', ProvinciaViewSet, 'provincias')
router.register('api/alicuotasiva', AlicuotaIVAViewSet, 'alicuotas_iva')
router.register('api/condicioniva', CondicionIVAViewSet, 'condicion_iva')
router.register('api/codigospostales', CodigoPostalViewSet, 'codigospostales')
router.register('api/tipodocumento', TipoDocumentoViewSet, 'tipodocumento')
router.register('api/comprobantes', ComprobanteViewSet, 'comprobantes')

router.register('api/profile', ProfileViewSet, 'profile')
router.register('api/profile/update/img',
                ImgProfileUpdateViewSet, 'img_profile_update')
router.register('api/user/update',
                UserUpdateViewSet, 'user_update')

urlpatterns = [
    path('api/tiposcomprobantechoice',
         TipoComprobanteChoiceAPIView.as_view(), name='tiposcomprobantechoice'),
    path('', include(router.urls)), ]
