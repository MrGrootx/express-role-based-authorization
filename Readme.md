# 🚀 Express Role-Based Authorization

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📖 About
This is a Node.js and Express-based authentication system that implements **role-based authorization**. It allows users to register, log in, and access different endpoints based on their roles (Admin, Moderator, User). The authentication is handled via **JWT tokens**, and MongoDB is used as the database for storing user credentials and roles.

## 📌 Features
- 🔐 JWT-based authentication
- 👤 Role-based authorization (Admin, Mod, User)
- 📩 User registration & login
- 📜 Middleware for role verification
- 📡 MongoDB integration
- 📂 Organized folder structure
- ⚡ Built with TypeScript

## 🛠️ Installation
```sh
# Clone the repository
git clone https://github.com/your-username/express-role-based-authorization.git
cd express-role-based-authorization

# Install dependencies
pnpm install

# Create a .env file and add your configuration
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Build and start the server
pnpm run build
pnpm start
```

## 🛡️ API Endpoints
### Authentication
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login and receive JWT token

### User Access
- `GET /api/v1/users/user` - Accessible by Users, Mods, Admins
- `GET /api/v1/users/mod` - Accessible by Mods and Admins
- `GET /api/v1/users/admin` - Accessible by Admins only

## 📜 License
This project is licensed under the MIT License.

