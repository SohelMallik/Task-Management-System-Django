from django.urls import path, include
from . import views
#Connect Urls with Views
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('contact/', views.contact, name='contact'),
    path('aboutus/', views.aboutus, name='aboutus'),
    path('todolist/', views.todolist, name='todolist'),

]