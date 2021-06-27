from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import include
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path('admin/', admin.site.urls),

]
urlpatterns += [
  url('venta/', include('venta.urls'))
]
