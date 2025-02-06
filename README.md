# StudentManagement_FullStack

## Overview
The Student Management Application System is a web-based application that allows users to perform basic CRUD (Create, Read, Update, Delete) operations on student records. The application consists of a React.js frontend, a Spring Boot backend, and uses MongoDB as the database. A Postman collection is also provided for API testing.

## Features
- Add new student records
- Retrieve student details
- Fetches student record by name
- Update student information
- Delete student records
- RESTful API endpoints

## Tech Stack
#### Frontend:
- React.js
- HTML/CSS
- JavaScript
- BootStrap
#### Backend:
- Spring Boot
- Java
- Maven
#### Database:
- MongoDB

## Installation
#### Prerequisites:
- Node.js & npm (for frontend)
- Java (JDK 8 or later)
- Maven
- MongoDB
#### Steps to Run the Application
1. Clone the Repository:
```
git clone https://github.com/zeelmehta19/StudentManagement_FullStack.git
cd StudentManagement_FullStack
```
2. Backend Setup (Spring Boot)
```
cd student_management_backend
mvn clean install
mvn spring-boot:run
```
3. Frontend Setup (React)
```
cd student-management
npm install
npm start
```
4. MongoDB Setup
- Ensure MongoDB is running locally or provide a cloud-based connection.

## API Documentation
A Postman collection is included in the repository for testing the API endpoints. Import the collection into Postman to test CRUD operations.

##
Developed by - Zeel Mehta
