# Quick Start Checklist

## Prerequisites Installation
- [ ] Node.js installed (v14+) - `node --version`
- [ ] npm installed - `npm --version`
- [ ] MongoDB installed or accessible - `mongod --version`
- [ ] Git installed (optional) - `git --version`

## Backend Setup
- [ ] Navigate to backend folder: `cd backend`
- [ ] Install dependencies: `npm install`
- [ ] Copy .env file: `cp .env.example .env`
- [ ] Edit .env with correct MongoDB URI
- [ ] Verify MongoDB is running
- [ ] (Optional) Seed database: `node seeds.js`
- [ ] Start backend: `npm run dev`
- [ ] See message: "Server is running on port 5000"
- [ ] Test health check: `curl http://localhost:5000/api/health`

## Frontend Setup
- [ ] Navigate to frontend folder: `cd ../Online_Appointment-_booking_Frontend-main`
- [ ] Install dependencies: `npm install`
- [ ] Copy .env file: `cp .env.example .env`
- [ ] Verify .env has: `VITE_API_URL=http://localhost:5000/api`
- [ ] Start frontend: `npm run dev`
- [ ] Access: http://localhost:5173

## Application Testing
- [ ] Open http://localhost:5173 in browser
- [ ] Test Signup with new credentials
- [ ] Try Demo User: user@gmail.com / password123
- [ ] Try Demo Admin: admin@gmail.com / admin123
- [ ] Book an appointment
- [ ] View appointments
- [ ] (Admin) Manage appointments

## Verification Points
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] MongoDB connected successfully
- [ ] Login works with demo credentials
- [ ] Signup creates new user
- [ ] Can book appointments
- [ ] Admin can approve/manage appointments

## Troubleshooting
- MongoDB not running? → Start mongod service
- Port 5000 in use? → Change PORT in backend .env
- Port 5173 in use? → Vite will use next available port
- CORS errors? → Check CORS_ORIGIN in backend .env
- Blank login form? → Check browser console for errors

## Documentation
- Backend API: See `backend/README.md`
- Full Setup: See `SETUP_GUIDE.md`
- Changes Made: See `CHANGES_SUMMARY.md`

## Demo Credentials
**User:**
- Email: user@gmail.com
- Password: password123

**Admin:**
- Email: admin@gmail.com
- Password: admin123

---

Once you've completed the checklist, your appointment booking system is ready to use!
