# Task Management System

A web-based **Task Management System** built with **Django** that enables users to create, update, track, and manage tasks through a clean and intuitive interface. The project demonstrates fundamental and practical Django concepts, including **CRUD Operations, Models, Forms, URL Routing, Template Inheritance, Form Validation, Django Messages Framework, and Database Integration**.

The application is designed to provide a simple yet effective task management solution while showcasing backend development skills, database integration, and clean project architecture.

---

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Django](https://img.shields.io/badge/Django-Framework-green)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Project Overview

Task Management System is a Django-based web application that helps users organize and manage daily tasks efficiently. Users can create, update, track, and delete tasks while monitoring their completion status through a responsive dashboard.

This project demonstrates practical implementation of:

- Django Models
- Django Forms
- CRUD Operations
- URL Routing
- Template Inheritance
- Form Validation
- Django Messages Framework
- MySQL Database Integration
- Bootstrap-Based Responsive Design

---

## Features

- Create new tasks
- Update existing tasks
- Delete tasks with confirmation prompts
- Mark tasks as completed or pending
- View task status in a structured dashboard
- Form validation to prevent empty submissions
- Success and error notifications using Django Messages Framework
- Responsive user interface built with Bootstrap 5
- Database integration using MySQL
- Clean and maintainable project architecture

---

## Tech Stack

### Backend

- Python
- Django

### Frontend

- HTML5
- CSS3
- Bootstrap 5

### Database

- MySQL

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## Project Structure

```text
Task-Management-System-Django/
│
├── manage.py
├── requirements.txt
│
├── screenshots/
│   ├── home-page.png
│   ├── todo-dashboard.png
│   ├── edit-task.png
│   ├── delete-task.png
│   ├── about-page.png
│   └── contact-page.png
│
├── static/
│   ├── css/
│   └── image/
│
├── templates/
│   └── base.html
│
├── todolist/
│   ├── migrations/
│   ├── templates/
│   │   ├── main.html
│   │   ├── aboutus.html
│   │   ├── contact.html
│   │   ├── todolist.html
│   │   └── edit.html
│   │
│   ├── admin.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
└── Todomanager/
    ├── settings.py
    ├── urls.py
    ├── asgi.py
    ├── wsgi.py
    └── __init__.py
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SohelMallik/Task-Management-System-Django.git
```

### 2. Navigate to the Project Directory

```bash
cd Task-Management-System-Django
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

Or install manually:

```bash
pip install django mysqlclient
```

### 6. Configure MySQL Database

Update the database settings inside:

```python
Todomanager/settings.py
```

Example:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "task_management",
        "USER": "your_username",
        "PASSWORD": "your_password",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
```

### 7. Apply Database Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 8. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 9. Run the Development Server

```bash
python manage.py runserver
```

### 10. Open the Application

```text
http://127.0.0.1:8000/
```

---

## Usage

### Create a Task

1. Navigate to the Todo List page.
2. Enter a task title.
3. Click **Add Task**.
4. The task will be saved to the database.

### Update a Task

1. Click the **Edit** button beside a task.
2. Modify the task details.
3. Update the completion status if required.
4. Click **Update Task**.

### Delete a Task

1. Click the **Delete** button beside a task.
2. Confirm the deletion prompt.
3. The task will be permanently removed.

### Task Status

| Status | Description |
|----------|-------------|
| Completed | Task completed successfully |
| Not Completed | Task is still pending |

---

## Database Schema

### Task Model

```python
class Task(models.Model):
    task = models.CharField(max_length=500)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.task
```

### Model Fields

| Field | Type | Description |
|---------|---------|-------------|
| task | CharField | Stores task description |
| is_completed | BooleanField | Stores task completion status |

---

## URL Endpoints

| Endpoint | Description |
|----------|-------------|
| `/` | Home Page |
| `/contactus/` | Contact Page |
| `/about/` | About Page |
| `/todolist/` | Task Dashboard |
| `/edit/<task_id>/` | Edit Task |
| `/delete/<task_id>/` | Delete Task |

---

## Form Validation

The application validates task input before saving data.

```python
def clean_task(self):
    task = self.cleaned_data.get("task")

    if not task.strip():
        raise forms.ValidationError(
            "You did not write anything!"
        )

    return task
```

This prevents users from submitting empty or whitespace-only tasks.

---

## Key Learning Outcomes

Through this project, I gained practical experience in:

- Building CRUD applications using Django
- Working with Django Models and ModelForms
- Integrating MySQL with Django ORM
- Implementing form validation and error handling
- Managing URL routing and views
- Using Bootstrap for responsive UI development
- Applying Django Messages Framework
- Using Git and GitHub for version control

---

## Testing

Run automated tests:

```bash
python manage.py test
```

### Manual Testing Checklist

- Task Creation
- Task Editing
- Task Deletion
- Task Completion Status Updates
- Form Validation
- Navigation Links
- Success and Error Messages

---

## Future Enhancements

- User Authentication and Authorization
- User-Specific Task Management
- Task Categories
- Due Date Management
- Task Priorities
- Search and Filtering
- REST API Integration using Django REST Framework
- Email Notifications
- Dark Mode Support
- Analytics Dashboard

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

See the LICENSE file for more details.

---

## Author

### Sohel Mallik

**Django Backend Developer | AI Integration | Computer Science and Engineering Undergraduate**

- GitHub: https://github.com/SohelMallik
- LinkedIn: https://linkedin.com/in/sohel2005
- Email: malliksohel582@gmail.com

---

## Acknowledgements

Special thanks to:

- Django Documentation
- Bootstrap Documentation
- Python Community
- Open Source Contributors

---

## Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🛠️ Contribute improvements

📢 Share it with others

---

Built with ❤️ using Django and Python by Sohel Mallik.