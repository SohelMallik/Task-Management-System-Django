# 📋 Task Management System - Django

A secure, responsive, and user-friendly **Task Management Web Application** built with **Django**. The application enables users to efficiently create, organize, update, search, and manage daily tasks through an intuitive interface with secure authentication and an administrative dashboard.

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

Task Management System is a Django-based web application designed to help users efficiently manage their daily tasks. The application provides secure user authentication, task management with complete CRUD functionality, task status updates, search capabilities, pagination, and an integrated contact form.

The project follows Django's **Model-View-Template (MVT)** architecture and demonstrates best practices for developing scalable and maintainable web applications.

---

## Features

- 🔐 User Registration and Authentication
- ➕ Create New Tasks
- ✏️ Update Existing Tasks
- ❌ Delete Tasks
- ✅ Mark Tasks as Complete or Pending
- 🔍 Search Tasks
- 📄 Pagination for Task Lists
- 📬 Contact Form
- 👨‍💼 Django Admin Dashboard
- 📱 Responsive User Interface using Bootstrap

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Python | Backend Programming Language |
| Django | Web Framework |
| MySQL | Relational Database |
| Bootstrap | Responsive Frontend Framework |
| HTML5 | Web Page Structure |
| CSS3 | Styling |
| JavaScript | Client-side Functionality |
| Git | Version Control |
| GitHub | Source Code Hosting |

---

## Project Structure

```text
Task-Management-System-Django/
│
├── TaskManagement/          # Project configuration
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   ├── wsgi.py
│   └── __init__.py
│
├── todolist/                # Task management application
│   ├── migrations/
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   ├── views.py
│   └── __init__.py
│
├── users/                   # User authentication
├── templates/               # HTML templates
├── static/                  # CSS, JavaScript, Images
├── media/                   # Uploaded files
├── manage.py
├── requirements.txt
├── README.md
└── LICENSE
```

---

## Getting Started

### Prerequisites

Ensure the following software is installed on your system:

- Python 3.8 or later
- MySQL Server
- Git
- pip

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/SohelMallik/Task-Management-System-Django.git

cd Task-Management-System-Django
```

#### 2. Create a Virtual Environment

**Windows**

```bash
python -m venv venv

venv\Scripts\activate
```

**Linux / macOS**

```bash
python3 -m venv venv

source venv/bin/activate
```

#### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

or

```bash
pip install django mysqlclient
```

#### 4. Configure the Database

- Start your MySQL server.
- Create a database named **todo_db**.

```sql
CREATE DATABASE todo_db;
```

- Update the database configuration in:

```text
TaskManagement/settings.py
```

#### 5. Apply Database Migrations

```bash
python manage.py makemigrations

python manage.py migrate
```

#### 6. Create a Superuser

```bash
python manage.py createsuperuser
```

#### 7. Start the Development Server

```bash
python manage.py runserver
```

#### 8. Open the Application

Home Page

```
http://127.0.0.1:8000/
```

Admin Panel

```
http://127.0.0.1:8000/admin/
```

---

## Usage

1. Register a new account.
2. Log in using your credentials.
3. Create and organize daily tasks.
4. Edit or delete existing tasks.
5. Mark tasks as completed or pending.
6. Search tasks quickly.
7. Submit feedback through the Contact page.
8. Manage users and tasks using the Django Admin Panel.

---


## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more information.

---

## Contact

**Sohel Mallik**

📧 Email: **malliksohel582@gmail.com**

🔗 GitHub: **https://github.com/SohelMallik**

📂 Repository: **https://github.com/SohelMallik/Task-Management-System-Django**
