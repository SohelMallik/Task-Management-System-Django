FROM python:3.13-slim

# Prevent Python from creating .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Show Python output immediately
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy requirements first
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django project
COPY . .

# Expose Gunicorn port
EXPOSE 8000

# Start Django using Gunicorn
CMD ["gunicorn", "Todomanager.wsgi:application", "--bind", "0.0.0.0:8000"]