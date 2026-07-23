from django.urls import path, include
from . import views
#Connect Urls with Views
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('contactus/', views.contact, name='contact'),
    path('about/', views.aboutus, name='aboutus'),
    path('todolist/', views.todolist, name='todolist'),
    path('todolist/delete/<int:task_id>/', views.delete_task, name='delete_task'),
    path('todolist/edit/<int:task_id>/', views.edit_task, name='edit_task'),
    path('todolist/complete/<int:task_id>/', views.complete_task, name='complete_task'),
    path('todolist/pending/<int:task_id>/', views.pending_task, name='pending_task'),
    path('subbmit_contact/', views.submit_contact, name='submit_contact'),



]