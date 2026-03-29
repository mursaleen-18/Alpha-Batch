# SQL Class User Management App

This is a simple user management web application built with **Node.js**, **Express**, **MySQL**, and **EJS**.  
It is designed as a learning exercise for backend development, SQL queries, and CRUD operations.

## Features

- View total user count on the home page
- View all users in the database
- Edit a user's username (with password confirmation)
- Uses EJS for server-side rendering
- Uses MySQL for data storage
- Uses Faker.js to generate random user data (for seeding/testing)
- Method override for supporting PATCH requests via forms

## Project Structure

```
SQL Class/
│
├── index.js                # Main Express server file
├── package.json
├── /views                  # EJS templates
│   ├── home.ejs
│   ├── showusers.ejs
│   └── edit.ejs
└── ...
```

## Setup Instructions

1. **Clone the repository**  
   Download or clone this project to your local machine.

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up MySQL database**
   - Create a database named `delta_app`.
   - Create a table named `user` with columns: `id`, `username`, `email`, `password`.
   - (Optional) Use Faker.js or your own SQL scripts to seed the database with sample users.

   Example SQL for table:
   ```sql
   CREATE TABLE user (
     id VARCHAR(255) PRIMARY KEY,
     username VARCHAR(255),
     email VARCHAR(255),
     password VARCHAR(255)
   );
   ```

4. **Configure database credentials**  
   Update the MySQL connection settings in `index.js` if needed.

5. **Run the server**
   ```
   nodemon index.js
   ```
   or
   ```
   node index.js
   ```

6. **Open in browser**  
   Visit [http://localhost:8080](http://localhost:8080)

## Usage

- **Home Page:** Shows total user count and a button to view all users.
- **View All Users:** Lists all users in the database.
- **Edit User:** Click "Edit" next to a user to update their username (requires password confirmation).

## Learning Objectives

- Practice Express routing and middleware
- Learn SQL queries and database integration with Node.js
- Use EJS for dynamic HTML rendering
- Implement basic form handling and method override for RESTful routes

## Dependencies

- express
- mysql2
- ejs
- method-override
- @faker-js/faker

---

**Note:**  
This project is for educational purposes only and is not production-ready.  
Passwords are stored in plain text for simplicity—**never do this in real applications**.

---
```# SQL Class User Management App

This is a simple user management web application built with **Node.js**, **Express**, **MySQL**, and **EJS**.  
It is designed as a learning exercise for backend development, SQL queries, and CRUD operations.

## Features

- View total user count on the home page
- View all users in the database
- Edit a user's username (with password confirmation)
- Uses EJS for server-side rendering
- Uses MySQL for data storage
- Uses Faker.js to generate random user data (for seeding/testing)
- Method override for supporting PATCH requests via forms

## Project Structure

```
SQL Class/
│
├── index.js                # Main Express server file
├── package.json
├── /views                  # EJS templates
│   ├── home.ejs
│   ├── showusers.ejs
│   └── edit.ejs
└── ...
```

## Setup Instructions

1. **Clone the repository**  
   Download or clone this project to your local machine.

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up MySQL database**
   - Create a database named `delta_app`.
   - Create a table named `user` with columns: `id`, `username`, `email`, `password`.
   - (Optional) Use Faker.js or your own SQL scripts to seed the database with sample users.

   Example SQL for table:
   ```sql
   CREATE TABLE user (
     id VARCHAR(255) PRIMARY KEY,
     username VARCHAR(255),
     email VARCHAR(255),
     password VARCHAR(255)
   );
   ```

4. **Configure database credentials**  
   Update the MySQL connection settings in `index.js` if needed.

5. **Run the server**
   ```
   nodemon index.js
   ```
   or
   ```
   node index.js
   ```

6. **Open in browser**  
   Visit [http://localhost:8080](http://localhost:8080)

## Usage

- **Home Page:** Shows total user count and a button to view all users.
- **View All Users:** Lists all users in the database.
- **Edit User:** Click "Edit" next to a user to update their username (requires password confirmation).

## Learning Objectives

- Practice Express routing and middleware
- Learn SQL queries and database integration with Node.js
- Use EJS for dynamic HTML rendering
- Implement basic form handling and method override for RESTful routes

## Dependencies

- express
- mysql2
- ejs
- method-override
- @faker-js/faker

---

**Note:**  
This project is for educational purposes only and is not production-ready.  
Passwords are stored in plain text for simplicity—**never do this in real applications**.

---