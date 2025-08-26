ExpressAuthJWT is a Node.js + Express application that provides user authentication and basic CRUD operations,
secured using JSON Web Tokens (JWT). It uses Mongoose to interact with MongoDB and supports secure password hashing with bcrypt.

Features :
    User Registration (new users can sign up)
    User Login (JWT generated on login)
    Password Hashing (using bcrypt)
    JWT Middleware (protects routes)
    Protected Routes (accessible only with valid token)
    Update Password (users can securely change their password)
    Delete User (remove user account)

techstack : 
    Node.js (v24.6.0)
    Express.js 
    MongoDB + Mongoose
    JWT (jsonwebtoken) 
    bcryptjs 
    dotenv

file structures :
      config/
      controllers/
      middlewares/
      models/
      node_modules/
      routes/
      .env
      app.js
      package-lock.json
      package.json

commands :
    git clone https://github.com/aisha2311/ExpressAuthJWT.git 
    npm install
    npm run dev 













