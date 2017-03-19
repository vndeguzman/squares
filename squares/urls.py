from django.conf.urls import patterns, url, include
from django.contrib import admin

from squares.views import IndexView

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
]
