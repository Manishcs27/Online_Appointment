# ApointHub Backend API

A full-featured backend for the ApointHub Online Appointment Booking System built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Secure signup, login with JWT tokens
- **Appointment Management**: Create, read, update, delete appointments
- **User Management**: Admin dashboard for managing users
- **Service Management**: Manage available services and pricing
- **Role-Based Access Control**: Admin and User roles with specific permissions
- **Data Validation**: Input validation on all endpoints
- **Error Handling**: Comprehensive error handling middleware

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **CORS**: Enable cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

### 1. Clone or navigate to the backend directory

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/appointhub
JWT_SECRET=your_secret_key_here # Change this in production
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### 4. Start MongoDB

Make sure MongoDB is running:

```bash
# Using MongoDB directly
mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 5. Start the server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

#### Signup
- **POST** `/api/auth/signup`
- **Body**: `{ name, email, password }`
- **Response**: `{ success, token, user }`

#### Login
- **POST** `/api/auth/login`
- **Body**: `{ email, password }`
- **Response**: `{ success, token, user }`

#### Get Current User
- **GET** `/api/auth/me`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, user }`

#### Logout
- **POST** `/api/auth/logout`
- **Response**: `{ success, message }`

### Appointments

#### Create Appointment
- **POST** `/api/appointments`
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ service, provider, date, time, notes }`
- **Response**: `{ success, appointment }`

#### Get User Appointments
- **GET** `/api/appointments/user`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, appointments }`

#### Get All Appointments (Admin Only)
- **GET** `/api/appointments`
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?status=pending`
- **Response**: `{ success, appointments }`

#### Get Appointment by ID
- **GET** `/api/appointments/:id`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, appointment }`

#### Update Appointment
- **PUT** `/api/appointments/:id`
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ status, date, time, notes }`
- **Response**: `{ success, appointment }`

#### Delete Appointment
- **DELETE** `/api/appointments/:id`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, message }`

### Services

#### Get All Services
- **GET** `/api/services`
- **Response**: `{ success, services }`

#### Get Service by ID
- **GET** `/api/services/:id`
- **Response**: `{ success, service }`

### Users (Admin Only)

#### Get All Users
- **GET** `/api/users`
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?status=active`
- **Response**: `{ success, users }`

#### Get User by ID
- **GET** `/api/users/:id`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, user }`

#### Update User
- **PUT** `/api/users/:id`
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ name, phone, status }`
- **Response**: `{ success, user }`

#### Delete User (Admin Only)
- **DELETE** `/api/users/:id`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, message }`

#### Get User Statistics (Admin Only)
- **GET** `/api/users/stats`
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ success, stats }`

## Demo Credentials

After seeding the database, use these credentials:

**User Account**:
- Email: `user@gmail.com`
- Password: `password123`

**Admin Account**:
- Email: `admin@gmail.com`
- Password: `admin123`

## Seed Database (Optional)

To seed initial data, create a `seeds.js` file:

```bash
node seeds.js
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── appointmentController.js
│   │   ├── userController.js
│   │   └── serviceController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Appointment.js
│   │   └── Service.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── appointmentRoutes.js
│   │   ├── userRoutes.js
│   │   └── serviceRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── authorize.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── database.js
│   └── server.js
├── package.json
├── .env.example
└── README.md
```

## Error Handling

The API uses consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

## Security

- Passwords are hashed using bcryptjs
- JWT tokens expire after 7 days (configurable)
- CORS is enabled only for the frontend origin
- Input validation is performed on all endpoints
- Authorization checks for admin-only routes

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/appointhub |
| JWT_SECRET | Secret key for JWT | your_jwt_secret_key_change_this_in_production |
| JWT_EXPIRE | JWT expiration time | 7d |
| NODE_ENV | Environment mode | development |
| CORS_ORIGIN | Allowed CORS origin | http://localhost:5173 |

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running on the specified port
- Check `MONGODB_URI` in `.env`
- Verify database permissions

### CORS Errors
- Ensure `CORS_ORIGIN` matches your frontend URL
- Check that the frontend is making requests to the correct backend URL

### JWT Errors
- Verify token format: `Bearer {token}`
- Ensure token hasn't expired
- Check `JWT_SECRET` matches on server

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC
