from django.shortcuts import render

# Views connect with Templates
def homepage(request):
    return render(request, 'main.html', {})

def aboutus(request):
    return render(request, 'aboutus.html', {})

def contact(request):
    return render(request, 'contact.html', {})

def todolist(request):
    return render(request, 'todolist.html', {})