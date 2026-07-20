from django.urls import path, include
from . import views
#Connect Urls with Views
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('contactus/', views.contact, name='contact'),
    path('about/', views.aboutus, name='aboutus'),
    path('todolist/', views.todolist, name='todolist'),
    path('delete/<int:task_id>/', views.delete_task, name='delete_task'),
    path('edit/<int:task_id>/', views.edit_task, name='edit_task'),
    path('complete/<int:task_id>/', views.complete_task, name='complete_task'),



]