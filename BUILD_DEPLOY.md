# Build and deployment scripts for Render

## Backend Build

The backend uses Node.js and should be deployed as a Web Service.

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

**Source Directory:** `backend/`

## Frontend Build

The frontend uses Vite and should be deployed as a Static Site.

**Build Command:**
```bash
cd Online_Appointment-_booking_Frontend-main && npm install && npm run build
```

**Publish Directory:** `Online_Appointment-_booking_Frontend-main/dist`

**Source Directory:** Root (automatic)

## Environment Setup

Both services need environment variables configured in the Render dashboard.

### Backend Environment Variables (Web Service)

```
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster/database
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
NODE_ENV=production
CORS_ORIGIN=https://frontend-url.onrender.com
```

### Frontend Environment Variables (Static Site)

```
VITE_API_URL=https://backend-url.onrender.com/api
```

## Post-Deployment

1. Update backend `CORS_ORIGIN` with frontend URL
2. Test health endpoint: `https://backend-url/api/health`
3. Test frontend loads: `https://frontend-url.onrender.com`
4. Test login functionality
5. Monitor logs in Render dashboard
