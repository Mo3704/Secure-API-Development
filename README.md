# Information Security Management Task

## Description
This project is a **secure RESTful API** designed to manage users and products, emphasizing **information security best practices**. It includes user authentication with **JWT (JSON Web Tokens)**, password hashing, protected routes, and CRUD operations for products. The system is built using **Node.js**, **Express.js**, and **MySQL**, with a focus on secure coding, database management, and API security.

---

## Key Features

### 1. User Authentication
- **Signup**: Users can register by providing a name, username, and password. Passwords are hashed using **bcrypt** before being stored in the database.
- **Login**: Users can log in using their credentials. Upon successful authentication, a **JWT token** (valid for 10 minutes) is generated and returned.
- **Protected Routes**: Certain endpoints (e.g., product management) require a valid JWT token for access.

### 2. Password Security
- Passwords are hashed using **bcrypt** before being stored in the database, ensuring they are not stored in plaintext.
- Sensitive data (e.g., JWT secret, database credentials) is stored securely using **environment variables** (`.env` file).

### 3. Product Management (CRUD Operations)
- **Create**: Add a new product (requires authentication).
- **Read**: Retrieve all products or a single product by ID.
- **Update**: Modify product details (requires authentication).
- **Delete**: Remove a product (requires authentication).

### 4. Database Design
- Designed and implemented a **MySQL database** with two tables:
  - **Users Table**: Stores user information (id, name, username, hashed password).
  - **Products Table**: Stores product information (id, name, description, price, stock, creation timestamp).
- Used **Sequelize ORM** for database interactions, ensuring clean and maintainable code.

### 5. Security Best Practices
- **JWT Authentication**: Tokens are used to authenticate users and protect sensitive endpoints.
- **Environment Variables**: Sensitive information (e.g., database credentials, JWT secret) is stored in a `.env` file and accessed using the `dotenv` package.
- **Input Validation**: User inputs are validated to prevent SQL injection and other attacks.
- **Error Handling**: Proper error handling is implemented to ensure the API responds gracefully to invalid requests or server errors.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL, Sequelize (ORM)
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Tools**: 
  - Postman (API testing)
  - Git (version control)
  - Dotenv (environment variable management)

---

## Learning Outcomes

- **Secure Authentication**: Implemented JWT-based authentication and password hashing to secure user data.
- **Database Management**: Designed and managed a relational database using Sequelize ORM.
- **API Development**: Built a RESTful API with CRUD operations and protected routes.
- **Security Practices**: Applied industry-standard security practices, including input validation, environment variables, and error handling.
- **Testing**: Tested the API using Postman to ensure functionality and security.

---

## How to Run the Project

### Prerequisites
- Node.js and npm installed.
- MySQL server installed and running.
- Postman or any HTTP client for testing.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/information-security-task.git
   cd information-security-task
