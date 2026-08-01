# Todomanager

Todomanager is a Django-based task management web application that helps users create, view, update, complete, and delete daily tasks. It also includes user authentication, a contact form, and an admin panel for managing content.

## Features

- User registration and login
- Create, read, update, and delete tasks
- Mark tasks as complete or pending
- Pagination for task lists
- Contact form for user feedback or support requests
- Admin interface for managing tasks and contacts

## Tech Stack

- Python
- Django
- MySQL
- HTML, CSS, and JavaScript
- Bootstrap

## Project Structure

```text
Todomanager/
├── Todomanager/          # Project settings and URL configuration
├── todolist/             # Main app for tasks and contact handling
├── users/                # Authentication-related views and templates
├── templates/            # Shared HTML templates
├── static/               # CSS, JavaScript, and images
├── manage.py             # Django project entry point
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Python 3.8+
- Django
- MySQL Server
- Git

### Installation

1. Clone the repository
   ```bash
   git clone <your-repository-url>
   cd Todomanager
   ```

2. Create and activate a virtual environment
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies
   ```bash
   pip install django mysqlclient
   ```

4. Configure the database
   - Make sure your MySQL server is running.
   - Create a database named `todo_db`.
   - Update database settings in [Todomanager/settings.py](Todomanager/settings.py) if needed.

5. Apply migrations
   ```bash
   python manage.py migrate
   ```

6. Create a superuser
   ```bash
   python manage.py createsuperuser
   ```

7. Run the development server
   ```bash
   python manage.py runserver
   ```

8. Open the app in your browser
   - Home page: http://127.0.0.1:8000/
   - Admin panel: http://127.0.0.1:8000/admin/

## Usage

1. Register a new account or log in.
2. Add tasks from the main task page.
3. Edit, delete, or mark tasks as complete.
4. Use the contact page to send feedback or issues.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact: malliksohel582@gmail.com