from django.db import models

# Create your models here.

class Task(models.Model):#Tell it is model
    task= models.CharField(max_length=500) #Task is a character field with max length of 500
    is_completed= models.BooleanField(default=False) #is_completed is a boolean field with default value of False

    def __str__(self):
         return f"{self.task}"
    

from django.db import models

class Contact(models.Model):
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]

    ISSUE_CHOICES = [
        ('task_not_created', 'Task Not Created'),
        ('task_not_saved', 'Task Not Saved'),
        ('task_not_completed', 'Task Not Completed'),
        ('task_not_edited', 'Task Not Edited'),
        ('task_not_deleted', 'Task Not Deleted'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    issue = models.CharField(max_length=50, choices=ISSUE_CHOICES)
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name