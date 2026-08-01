# 📋 Task Management System - Django

A secure, responsive, and user-friendly **Task Management Web Application** built with **Django**. The application enables users to create, organize, update, search, and manage daily tasks through an intuitive interface with secure authentication and an administrative dashboard.

## Table of Contents

* [About the Project](#-about-the-project)
* [Project Screenshots](#-project-screenshots)
* [Features](#-features)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#-usage)
* [Contributing](#-contributing)
* [License](#-license)
* [Contact](#-contact)

---

## 📖 About the Project

**Task Management System** is a Django-based web application designed to help users efficiently manage their daily tasks.

The application provides secure user authentication and complete task management functionality, including creating, viewing, updating, deleting, searching, and tracking tasks.

The project follows Django's **Model-View-Template (MVT)** architecture and demonstrates practical implementation of backend development, database management, authentication, CRUD operations, pagination, search functionality, and responsive web design.

### 🎯 Project Objectives

* Provide a simple and efficient platform for managing daily tasks.
* Allow authenticated users to create and organize their tasks.
* Implement complete CRUD functionality.
* Provide task searching and filtering capabilities.
* Allow users to track completed and pending tasks.
* Provide secure authentication and authorization.
* Create a responsive interface for desktop and mobile devices.
* Provide administrators with centralized management through Django Admin.

---

## 📸 Project Screenshots

> Screenshots of the application interface are stored inside the `screenshots/` directory.

### 🏠 Home Page

![Home Page](screenshots/home-page.png)

### 🔐 Login Page

![Login Page](screenshots/login-page.png)

### 📝 Registration Page

![Registration Page](screenshots/registration-page.png)

### 📋 Task Dashboard

![Task Dashboard](screenshots/task-dashboard.png)

### ➕ Add New Task

![Add Task](screenshots/add-task.png)

### ✏️ Update Task

![Update Task](screenshots/update-task.png)

### 🔍 Search Tasks

![Search Tasks](screenshots/search-tasks.png)

### 📬 Contact Page

![Contact Page](screenshots/contact-page.png)

### 👨‍💼 Django Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

## ✨ Features

### 🔐 Authentication

* User registration
* Secure login and logout
* Authentication-based access control
* User-specific task management

### 📋 Task Management

* ➕ Create new tasks
* 👁️ View existing tasks
* ✏️ Update tasks
* ❌ Delete tasks
* ✅ Mark tasks as completed
* ⏳ Mark tasks as pending

### 🔍 Search & Navigation

* Search tasks and quickly locate specific ones
* Paginated task lists
* Easy navigation between pages

### 📬 Contact System

* Contact form for user feedback or support requests
* Structured contact information management

### 👨‍💼 Administration

* Django Admin dashboard
* Manage registered users
* Manage tasks and application data

### 📱 Responsive Design

* Bootstrap-based interface
* Desktop, tablet, and mobile support

---

## 🛠️ Technology Stack

| Technology | Purpose                       |
| ---------- | ------------------------------ |
| Python     | Backend programming language   |
| Django     | Web framework                  |
| MySQL      | Relational database             |
| HTML5      | Web page structure              |
| CSS3       | Styling                          |
| JavaScript | Client-side functionality        |
| Bootstrap  | Responsive frontend framework    |
| Git        | Version control                  |
| GitHub     | Source code hosting              |

---

## 📁 Project Structure

```text
Task-Management-System-Django/
│
├── TaskManagement/              # Django project configuration
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── todolist/                    # Task management application
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
│
├── users/                       # User authentication
│
├── templates/                   # HTML templates
│   ├── home.html
│   ├── login.html
│   ├── register.html
│   ├── contact.html
│   └── ...
│
├── static/                      # Static files
│   ├── css/
│   ├── js/
│   └── images/
│
├── media/                       # User-uploaded media
│
├── screenshots/                 # README screenshots
│   ├── home-page.png
│   ├── login-page.png
│   ├── registration-page.png
│   ├── task-dashboard.png
│   ├── add-task.png
│   ├── update-task.png
│   ├── search-tasks.png
│   ├── contact-page.png
│   └── admin-dashboard.png
│
├── manage.py
├── requirements.txt
├── .gitignore
├── README.md
└── LICENSE
```

> The exact project structure may vary depending on the current version of the application.

---

## 🚀 Getting Started

Follow the instructions below to run the project locally.

### Prerequisites

Make sure the following software is installed:

* Python 3.8 or later
* pip
* MySQL Server
* Git

Verify each with:

```bash
python --version
pip --version
git --version
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/SohelMallik/Task-Management-System-Django.git
cd Task-Management-System-Django
```

**2. Create a virtual environment**

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

Linux / macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

**3. Install dependencies**

```bash
pip install -r requirements.txt
```

If setting up core dependencies manually:

```bash
pip install django mysqlclient
```

**4. Configure the MySQL database**

Start the MySQL server and log in:

```bash
mysql -u root -p
```

Create the database:

```sql
CREATE DATABASE todo_db;
```

Then configure the database connection inside `TaskManagement/settings.py`:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "todo_db",
        "USER": "your_mysql_username",
        "PASSWORD": "your_mysql_password",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
```

> ⚠️ For production applications, do not commit database passwords or other secrets to GitHub. Store sensitive credentials in environment variables.

**5. Apply database migrations**

```bash
python manage.py makemigrations
python manage.py migrate
```

**6. Create a superuser**

```bash
python manage.py createsuperuser
```

Enter your username, email, and password when prompted.

**7. Run the development server**

```bash
python manage.py runserver
```

**8. Open the application**

* Home page: http://127.0.0.1:8000/
* Django Admin panel: http://127.0.0.1:8000/admin/

---

## 💻 Usage

### For Users

1. Open the application.
2. Register a new account.
3. Log in using your credentials.
4. Create a new task.
5. View your task list.
6. Update existing tasks.
7. Mark tasks as completed or pending.
8. Search for tasks.
9. Delete tasks that are no longer required.
10. Use the Contact page to submit feedback.
11. Log out securely when finished.

### For Administrators

Administrators can access the Django Admin panel to:

* Manage users
* Manage tasks
* Review application data
* Update database records
* Perform administrative operations

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository to your GitHub account.
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Task-Management-System-Django.git
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
4. Make your changes.
5. Stage the changes:
   ```bash
   git add .
   ```
6. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
7. Push the branch:
   ```bash
   git push origin feature/new-feature
   ```
8. Open a Pull Request describing your changes and why they should be included.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for complete license information.

---

## 📬 Contact

**Sohel Mallik**

* 📧 Email: [malliksohel582@gmail.com](mailto:malliksohel582@gmail.com)
* 🔗 GitHub: https://github.com/SohelMallik
* 📂 Repository: https://github.com/SohelMallik/Task-Management-System-Django

---

## ⭐ Support

If you find this project useful, consider giving the repository a **⭐ star** on GitHub. It helps support the project and encourages further development.

<p align="center">
  <strong>Built with ❤️ using Python and Django</strong>
</p>
