from django.db import models

# Create your models here.

class Task(models.Model):#Tell it is model
    task= models.CharField(max_length=200) #Task is a character field with max length of 200
    is_completed= models.BooleanField(default=False) #is_completed is a boolean field with default value of False

