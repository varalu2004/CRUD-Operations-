# Screenshots of the Outputs
## A list of registered users.
![Screenshot (249)](https://github.com/user-attachments/assets/2646a627-f83f-4033-bddc-3e381beeef19)
## Add a New User
![Screenshot (250)](https://github.com/user-attachments/assets/4447ad0b-44b6-4bd4-ad61-1241e5d8f267)
![Screenshot (251)](https://github.com/user-attachments/assets/2457c47e-e0c7-4f7c-b956-d60ddf91b46f)
## Delete Users
![Screenshot (252)](https://github.com/user-attachments/assets/bf3d7161-904c-4184-8bd9-3b82db1302ce)
## Update User Details
![Screenshot (253)](https://github.com/user-attachments/assets/8308b082-83c2-441a-936b-42d87c1d4e3b)
![Screenshot (254)](https://github.com/user-attachments/assets/eeb6eae4-0d98-4261-94e3-3923219a0d76)





# User Management Application

This is a user management web application with a backend API that handles CRUD (Create, Read, Update, Delete) operations for managing user data. The front end is built with HTML, CSS, and JavaScript, while the backend is implemented in PHP.

## Features

- Add new users with name, email, and date of birth.
- Display a list of all users in a table format.
- Update user details directly from the table.
- Delete users from the database.
- Responsive design to ensure compatibility across devices.
## Setup and Run Instructions

### Step 1: Clone or Download the Project

1. Clone the repository from GitHub:

   ```bash
   git clone (https://github.com/varalu2004/CRUD-Operations)
### Step 2. Set Up the Database
 1.Start Apache and MySQL from the XAMPP Control Panel.
 2.Open phpMyAdmin in your browser.

3.Create a new database:
 Go to the Databases tab.
 Enter a database name, e.g., user_management, and click Create.
4.Import the SQL file to set up tables:

 Select your new database from the sidebar.
 Click Import at the top.
 Click Choose File, select the database.sql file located in the backend folder of your project, 
 then click Go to import.
### Step 3: Configure Frontend API URL
Open app.js located in the frontend folder.
Update the API_URL to match your local server setup:
const API_URL = 'http://localhost/user-management-app/backend/index.php';
### Step 4: Run the Application
http://localhost/user-management-app/frontend/index.html
### Step 5: Test the Application
#### Add User: 
Use the form to add a new user by filling in the name, email, and date of birth, then click Add User.
#### Update User:
Click the Update button next to a user to modify their details.
#### Delete User: 
Click the Delete button next to a user to remove them from the database.
## Prerequisites

To run this project, you need to have the following installed:

- **XAMPP** or any other web server with PHP and MySQL support.
- **Git** for cloning the repository (optional, you can also download the ZIP directly from GitHub).
- **Web Browser** such as Chrome, Firefox, or Edge to view the application.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL
- **Deployment**: GitHub Pages (for front-end) / localhost (for full app testing)


## Installation

1. **Clone the repository**:
   ```bash
   git clone (https://github.com/varalu2004/CRUD-Operations)
2. **To get Index Page**:
   ```bash
     (https://varalu2004.github.io/CRUD_Operations/frontend/index.html)
