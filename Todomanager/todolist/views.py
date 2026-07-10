from django.shortcuts import redirect, render
from .models import Task #Import Task model from models.py

from todolist.forms import TaskForm #Import TaskForm from forms.py
from django.contrib import messages # For Messages

# Views connect with Templates
def homepage(request):
    context={
        'page' :'homepage'
    }
    return render(request, 'main.html', context)

def aboutus(request):
    context={
        'page' :'aboutus page'
    }
    return render(request, 'aboutus.html', context)

def contact(request):
    context={
        'page' :'contact page'
    }
    return render(request, 'contact.html', context)


def todolist(request):# For save data to database

    if request.method=="POST":# POST Means Create data to DB
        from_data=TaskForm(request.POST or None)
        if from_data.is_valid():
            from_data.save() #Save the data to database
            messages.success(request, "Task added successfully!")# Display success message
            return redirect("todolist") #Redirect to todolist page after saving the data
        
        messages.error(request, "Failed to add task. Please check the form for errors.")# Display error message if form is invalid


    all_tasks= Task.objects.all() # get all the tasks from database as Objects

    context={
        'page' :'todolist page',
        'all_tasks': all_tasks,
    }
    return render(request, 'todolist.html', context)


def delete_task(request, task_id):# For Delete data from database
    task = Task.objects.get(id=task_id) # Get the task object by ID
    task.delete() # Delete the task from database
    messages.success(request, "Task deleted successfully!")# Display success message
    return redirect("todolist") #Redirect to todolist page after deleting the data