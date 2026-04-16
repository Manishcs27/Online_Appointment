# Render Deployment Guide

Complete guide to deploy ApointHub (Frontend + Backend + Database) on Render.

## Overview

- **Backend**: Node.js/Express API deployed as Web Service
- **Frontend**: React/Vite deployed as Static Site
- **Database**: MongoDB deployed as Database Service

---

## Step 1: Prepare Your Code

### 1.1 Backend Configuration

Create `.env.example` in `backend/`:

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@host/database
JWT_SECRET=your_jwt_secret_key_change_this
JWT_EXPIRE=7d
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.onrender.com
```

### 1.2 Frontend Configuration

Create `.env.example` in `Online_Appointment-_booking_Frontend-main/`:

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 1.3 Update Backend Server (if not already done)

The backend should use `process.env.PORT` with a fallback. Check `backend/src/server.js`:

```javascript
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## Step 2: Create MongoDB Database on Render

### 2.1 Go to Render Dashboard

1. Visit https://dashboard.render.com/
2. Sign up or log in
3. Click **+ New** → **Database**

### 2.2 Create MongoDB Instance

1. **Database**: Select **MongoDB**
2. **Name**: `appointhub-db`
3. **Region**: Select closest region
4. **Plan**: Choose **Free** or **Standard** based on needs
5. Click **Create Database**

### 2.3 Get Connection String

- Copy the **Connection String** shown after creation
- Format: `mongodb+srv://user:password@cluster.mongodb.net/database`
- Store this for backend configuration

---

## Step 3: Deploy Backend on Render

### 3.1 Create Web Service

1. Go to https://dashboard.render.com/
2. Click **+ New** → **Web Service**
3. Connect your GitHub repository (or use manual deploy)

### 3.2 Configure Backend Service

- **Name**: `appointhub-api`
- **Region**: Same as database
- **Runtime**: `Node`
- **Branch**: `main` (or your branch)
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 3.3 Add Environment Variables

In the **Environment** section, add:

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
NODE_ENV=production
CORS_ORIGIN=https://appointhub.onrender.com
PORT=5000
```

### 3.4 Deploy

- Render will automatically deploy your backend
- You'll get a URL like: `https://appointhub-api.onrender.com`
- Note this URL for frontend configuration

---

## Step 4: Deploy Frontend on Render

### 4.1 Create Static Site

1. Go to https://dashboard.render.com/
2. Click **+ New** → **Static Site**
3. Connect your GitHub repository

### 4.2 Configure Frontend Service

- **Name**: `appointhub-frontend`
- **Region**: Same as backend
- **Branch**: `main` (or your branch)
- **Build Command**: `cd Online_Appointment-_booking_Frontend-main && npm install && npm run build`
- **Publish Directory**: `Online_Appointment-_booking_Frontend-main/dist`

### 4.3 Add Environment Variables

In the **Environment** section, add:

```
VITE_API_URL=https://appointhub-api.onrender.com/api
```

### 4.4 Deploy

- Render will build and deploy your frontend
- You'll get a URL like: `https://appointhub.onrender.com`

---

## Step 5: Update CORS and API URL

### 5.1 Update Backend Environment

1. Go to Backend Service in Render Dashboard
2. Click **Environment**
3. Update `CORS_ORIGIN` to your frontend URL:
   ```
   CORS_ORIGIN=https://appointhub.onrender.com
   ```
4. Click **Save**
5. Backend will auto-redeploy

---

## Step 6: Verify Deployment

### 6.1 Test Backend API

Visit: `https://appointhub-api.onrender.com/api/health`

Should see:
```json
{
  "message": "API is running",
  "timestamp": "2024-..."
}
```

### 6.2 Test Frontend

Visit: `https://appointhub.onrender.com`

Should see:
- Landing page loads properly
- Can navigate to login/signup
- Login page appears

### 6.3 Test Authentication

1. Try signing up with new email
2. Try logging in with demo credentials:
   - Email: `user@gmail.com`
   - Password: `password123`
3. Try admin login:
   - Email: `admin@gmail.com`
   - Password: `admin123`

### 6.4 Test Database

1. Login successfully
2. Try booking an appointment
3. Check appointments appear

---

## Troubleshooting

### Backend won't deploy

1. **Check logs**: Click service → **Logs**
2. **Verify environment variables**: All required vars set?
3. **Check start command**: Should be `npm start`
4. **Verify package.json**: Has `"start": "node src/server.js"`?

### Frontend build fails

1. **Check build command**: Should be `cd Online_Appointment-_booking_Frontend-main && npm install && npm run build`
2. **Check logs**: Look for build errors
3. **Verify VITE_API_URL**: Correct backend URL?

### Database connection fails

1. **Check connection string**: Correct MongoDB URI?
2. **Check whitelist**: MongoDB Atlas IP whitelist (if using Atlas)
3. **Connection string format**: `mongodb+srv://user:password@host/db`?

### CORS errors in frontend

1. **Update backend CORS_ORIGIN**: Should match frontend URL
2. **Redeploy backend**: Changes take effect
3. **Clear browser cache**: Cache old CORS headers

### Login not working

1. **Database connected?** Check backend logs
2. **Token generated?** Check JWT_SECRET set
3. **Frontend API URL?** Should match backend URL

---

## GitHub Deployment Setup (Optional)

For automatic deployments when you push to GitHub:

### 1. Connect Repository

In Render dashboard:
- Service → **Git**
- Authorize GitHub
- Select repository
- Select branch

### 2. Auto-Deploy on Push

- Enable **Auto-Deploy** on selected branch
- Each push triggers automatic deployment

### 3. Disconnect Authorizations

If needed: **Settings** → **Connected Services** → Disconnect GitHub

---

## Useful Render Commands

### View Logs

```bash
# Backend logs
Click Backend Service → Logs

# Frontend build logs
Click Frontend Service → Logs
```

### Manual Redeploy

1. Service → **Deploys**
2. Find latest deployment
3. Click **Redeploy**

### Environment Variables

1. Service → **Environment**
2. Add, edit, or remove variables
3. Changes trigger auto-redeploy

---

## Summary

| Component | Type | URL Pattern |
|-----------|------|------------|
| Backend | Web Service | `https://{name}-api.onrender.com` |
| Frontend | Static Site | `https://{name}.onrender.com` |
| Database | MongoDB | Managed by Render |

---

## Next Steps

1. Set up GitHub integration for auto-deploy
2. Configure custom domain (optional)
3. Monitor application performance
4. Set up error notifications
5. Plan for database backups

For more help, visit: https://docs.render.com/
