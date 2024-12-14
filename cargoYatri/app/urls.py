from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('express',views.express,name='express'),
    path('passenger',views.express,name='passenger'),
    path('registration',views.registration,name='registration'),
    path('login',views.login,name='login'),
    path('register_user',views.register_user,name='register_user'),
    path('login_user',views.login_user,name='login_user')
    
    
    
    
]


