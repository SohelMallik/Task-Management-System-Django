from multiprocessing import context

from django.core import paginator
from django.shortcuts import redirect, render
from .models import Task #Import Task model from models.py

from todolist.forms import TaskForm #Import TaskForm from forms.py
from django.contrib import messages # For Messages
from django.core.paginator import Paginator # For Pagination

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

# def contact(request):
#     context={
#         'page' :'contact page'
#     }
#     return render(request, 'contact.html', context)

from .models import Contact

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        issue = request.POST.get("issue")
        priority = request.POST.get("priority")
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            issue=issue,
            priority=priority,
            message=message
        )
        messages.success(request, "Contact message submitted successfully!")

        return redirect("contact")   # Redirect back to contact page

    return render(request, "contact.html")


def todolist(request):# For save data to database

    if request.method=="POST":# POST Means Create data to DB
        from_data=TaskForm(request.POST or None)# Create New task 
        if from_data.is_valid():
            from_data.save() #Save the data to database
            messages.success(request, "Task added successfully!")# Display success message
            return redirect("todolist") #Redirect to todolist page after saving the data
        
        messages.error(request, "Failed to add task. Please check the form for errors.")# Display error message if form is invalid


    all_tasks= Task.objects.all() # get all the tasks from database as Objects
    #For Pagination
    paginator = Paginator(all_tasks, 5)  # Show 5 tasks per page
    page_number = request.GET.get('page')  # Get the current page number from the request
    all_tasks = paginator.get_page(page_number)  # Get the tasks for the current page

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

#For Edit data from database
def edit_task(request, task_id):  # For Edit data from database
    task_obj = Task.objects.get(id=task_id)

    if request.method == "POST":  # Handle both PUT and POST requests
        form = TaskForm(request.POST or None, instance=task_obj)

        # Check if task field is empty
        if not request.POST.get('task', '').strip():
            messages.error(request, "You did not write anything!")
        elif form.is_valid():#From is Valid check
            form.save()#Save the data to database
            messages.success(request, "Task updated successfully!")
            return redirect("todolist")
        else:
            messages.error(request, "Failed to update task. Please check the form for errors.")

    else:
        form = TaskForm(instance=task_obj)

    context = {
        'form': form,
        'task_obj': task_obj,
    }

    return render(request, 'edit.html', context)

#Marking a task as complete
def complete_task(request, task_id):  # For Marking a task as complete
    task=Task.objects.get(id=task_id)  # Get the task object by ID
    task.is_completed = True
    task.save()
    messages.success(request, "Task marked as complete!")
    return redirect("todolist")


def pending_task(request, task_id):  # For Marking a task as pending
    task=Task.objects.get(id=task_id)  # Get the task object by ID
    task.is_completed = False
    task.save()
    messages.success(request, "Task marked as pending!")
    return redirect("todolist")

def submit_contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        issue = request.POST.get("issue")
        priority = request.POST.get("priority")
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            issue=issue,
            priority=priority,
            message=message
        )
        messages.success(request, "Contact message submitted successfully!")

    return redirect("contact")  # Redirect back to contact page