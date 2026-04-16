# ApointHub - Full Setup Guide

This guide covers the complete setup for both frontend and backend of the ApointHub appointment booking system.

## Project Structure

```
Project Root/
├── Online_Appointment-_booking_Frontend-main/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│   └── ... (frontend files)
└── backend/
    ├── src/
    ├── package.json
    ├── .env.example
    └── ... (backend files)
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- npm or yarn
- Git (optional)

## Backend Setup

### Step 1: Navigate to backend directory

```bash
cd backend
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create `.env` file

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/appointhub
JWT_SECRET=appointhub_secret_key_2024
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Step 4: Start MongoDB

```bash
# Windows
mongod

# macOS/Linux
brew services start mongodb-community

# Docker
docker run -d -p 27017:27017 --name appointhub-mongo mongo:latest
```

### Step 5: Start backend server

```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

You should see: `Server is running on port 5000`

## Frontend Setup

### Step 1: Navigate to frontend directory

```bash
cd Online_Appointment-_booking_Frontend-main
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create `.env` file

```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Start frontend development server

```bash
npm run dev
```

Frontend will be available at: `http://localhost:5173`

## Full Application Startup

### Terminal 1 - Start MongoDB (if not running as service)

```bash
mongod
```

### Terminal 2 - Start Backend

```bash
cd backend
npm run dev
```

### Terminal 3 - Start Frontend

```bash
cd Online_Appointment-_booking_Frontend-main
npm run dev
```

## Test the Application

### Access the App

Open your browser and navigate to: `http://localhost:5173`

### Test Credentials

**User Account**:
- Email: `user@gmail.com`
- Password: `password123`

**Admin Account**:
- Email: `admin@gmail.com`
- Password: `admin123`

## Database Initialization

### Seed Initial Data (Optional)

Create `backend/seeds.js`:

```javascript
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import User from './src/models/User.js';
import Service from './src/models/Service.js';
import dotenv from 'dotenv';

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Service.deleteMany({});

    // Create users
    const hashedUserPassword = await bcryptjs.hash('password123', 10);
    const hashedAdminPassword = await bcryptjs.hash('admin123', 10);

    await User.create([
      {
        name: 'Standard User',
        email: 'user@gmail.com',
        password: hashedUserPassword,
        role: 'user',
        status: 'active',
      },
      {
        name: 'System Admin',
        email: 'admin@gmail.com',
        password: hashedAdminPassword,
        role: 'admin',
        status: 'active',
      },
    ]);

    // Create services
    await Service.create([
      {
        title: 'General Checkup',
        price: 50,
        duration: '30 min',
        description: 'Comprehensive general health checkup',
        providers: ['Dr. Smith', 'Dr. Johnson'],
        status: 'active',
      },
      {
        title: 'Cardiology',
        price: 120,
        duration: '45 min',
        description: 'Heart and cardiovascular check',
        providers: ['Dr. Brown', 'Dr. Wilson'],
        status: 'active',
      },
      {
        title: 'Vaccination',
        price: 30,
        duration: '15 min',
        description: 'Vaccination services',
        providers: ['Nurse Davis', 'Nurse Miller'],
        status: 'active',
      },
      {
        title: 'Blood Test',
        price: 40,
        duration: '20 min',
        description: 'Complete blood work analysis',
        providers: ['Lab Tech Kumar', 'Lab Tech Singh'],
        status: 'active',
      },
    ]);

    console.log('✓ Database seeded successfully!');
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
```

Run the seed script:

```bash
node seeds.js
```

## API Health Check

Test if the backend is running:

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "message": "API is running",
  "timestamp": "2024-01-XX..."
}
```

## Troubleshooting

### MongoDB Not Connecting

```bash
# Check MongoDB is running
# On Windows:
tasklist | find "mongod"

# On macOS/Linux:
ps aux | grep mongod

# Check MongoDB service
mongosh --version
```

### Frontend Can't Connect to Backend

- Verify backend is running on port 5000
- Check `.env` has correct `VITE_API_URL`
- Clear browser cache and restart frontend

### Port Already in Use

```bash
# Kill process on port 5000 (backend)
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### MongoDB Error: "connect ECONNREFUSED"

- Ensure MongoDB is running
- Verify connection string in `.env`
- Check MongoDB port (default: 27017)

## Production Build

### Frontend

```bash
cd Online_Appointment-_booking_Frontend-main
npm run build
npm run preview
```

### Backend

```bash
# Change NODE_ENV to production in .env
# Use a process manager like PM2
npm install -g pm2
pm2 start src/server.js --name appointhub-api
```

## Project Files Created/Modified

### Backend Files Created:
- `/backend/src/server.js` - Main server file
- `/backend/src/models/User.js` - User schema
- `/backend/src/models/Appointment.js` - Appointment schema
- `/backend/src/models/Service.js` - Service schema
- `/backend/src/controllers/*` - Business logic controllers
- `/backend/src/routes/*` - API route definitions
- `/backend/src/middleware/*` - Authentication and error handling
- `/backend/src/utils/database.js` - Database connection
- `/backend/package.json` - Dependencies
- `/backend/.env.example` - Environment template

### Frontend Files Modified:
- `/src/context/AuthContext.jsx` - Updated to use API
- `/src/pages/Login.jsx` - Updated for API calls
- `/src/pages/Signup.jsx` - Updated for API calls
- `/src/services/api.js` - New API client utility
- `/.env.example` - Added API URL configuration

## Next Steps

1. Review the backend API documentation in `/backend/README.md`
2. Customize services and providers in the database
3. Add email notifications (optional enhancement)
4. Implement appointment reminders (optional enhancement)
5. Deploy to production using services like Heroku, Railway, or Vercel

## Support

For issues or questions, refer to:
- Backend API docs: `backend/README.md`
- Frontend README: `Online_Appointment-_booking_Frontend-main/README.md`
- Project explanation: `Online_Appointment-_booking_Frontend-main/project_explanation.md`

---

**ApointHub** - Modern Appointment Booking System
