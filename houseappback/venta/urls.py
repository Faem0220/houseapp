from django.conf.urls import url
from venta import views

urlpatterns = [
    url('casas/', views.CasasView.as_view(),name='venta')
]