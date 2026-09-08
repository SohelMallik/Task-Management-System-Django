# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set environment variables to prevent generating .pyc files and to buffer output
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Install system dependencies required by mysqlclient
# This step is crucial for the Python package to compile correctly.
RUN apt-get update && apt-get install -y \
    pkg-config \
    default-libmysqlclient-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file first to leverage Docker's build cache.
# This way, dependencies are only re-installed if requirements.txt changes.
COPY requirements.txt .

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the application's code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Run the application using Gunicorn.
# Gunicorn is a production-ready WSGI server.
CMD ["gunicorn", "Todomanager.wsgi:application", "--bind", "0.0.0.0:8000"]