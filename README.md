# TODO List Application

## Overview

This is a simple TODO list application built with a REST API using Node.js, Express, and MongoDB for the backend, and HTML, CSS, and vanilla JavaScript for the frontend. The application allows users to create, list, and edit TODO items.

## Features

- Create a new TODO item with a title, start date, and end date.
- List all TODO items.
- Edit a specific TODO item.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend

   npm install express mongoose dotenv body-parser cors
node app.js

## Frontend
Open frontend/index.html in your web browser to interact with the TODO list application.

API Endpoints

Create a TODO
URL: /api/todos
Method: POST
Parameters: title, startDate, endDate
Example:

    {
      "title": "Finish homework",
      "startDate": "2024-05-01",
      "endDate": "2024-05-02"
    }
    
Get All TODOs
URL: /api/todos
Method: GET

Update a TODO
URL: /api/todos/:id
Method: PUT
Parameters: title, startDate, endDate
Example:

    {
      "title": "Complete project",
      "startDate": "2024-05-03",
      "endDate": "2024-05-04"
    }
