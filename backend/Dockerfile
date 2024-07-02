# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code into the container
COPY src .

# Expose the port the app runs on (Waitress default is 8080)
EXPOSE 8080

# Run the application using Waitress
CMD ["waitress-serve", "--host=0.0.0.0", "--port=8080", "server:app"]