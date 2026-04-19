# RENDER DEPLOYMENT - COMPLETE STEP-BY-STEP GUIDE

This guide will show you exactly how to deploy your entire ApointHub application (Frontend + Backend + Database) on Render.

---

## PHASE 1: MONGODB DATABASE SETUP

### Step 1.1: Go to Render Dashboard

1. Open https://dashboard.render.com/
2. Sign up with GitHub or email
3. Click **Dashboard** to access your account

### Step 1.2: Create MongoDB Database

1. Click **+ New** button (top right)
2. Select **Database**
3. Choose **MongoDB**

### Step 1.3: Configure Database

- **Name**: `appointhub-db` (or your choice)
- **Region**: Choose closest to your location
- **Plan**: Select **Free** (for testing) or **Standard** (for production)
- Leave other settings as default
- Click **Create Database**

### Step 1.4: Save Connection String

1. Wait for database to initialize (~2 minutes)
2. You'll see the connection string
3. **COPY** the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
4. **SAVE THIS** - you'll need it for backend

---

## PHASE 2: BACKEND DEPLOYMENT

### Step 2.1: Push Code to GitHub (if not already)

If your code isn't on GitHub:

```bash
# In your project root
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2.2: Create Web Service for Backend

1. In Render Dashboard, click **+ New**
2. Select **Web Service**
3. Choose **Connect a repository**
4. Authorize GitHub if prompted
5. Select your repository

### Step 2.3: Configure Backend Service

Fill in with these values:

| Field | Value |
|-------|-------|
| **Name** | `appointhub-api` |
| **Region** | Same as database |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `cd backend && npm install` |
| **Start Command** | `cd backend && npm start` |
| **Plan** | Free or Starter |

Click **Advanced** (if available) and verify **Auto-Deploy** is enabled

### Step 2.4: Add Environment Variables

1. In the service settings, find **Environment**
2. Click **Add Environment Variable** for each:

```
PORT = 5000
NODE_ENV = production
JWT_SECRET = (generate random string like: a7x9sPq2mK8wL4jB6nT1vFhRyUeZ3cQ5)
JWT_EXPIRE = 7d
MONGODB_URI = (paste the connection string from Step 1.4)
# If Render supplies DATABASE_URL instead, set that value too.
DATABASE_URL = (paste same connection string if needed)
CORS_ORIGIN = (leave blank for now, update after frontend deployed)
```

**To generate JWT_SECRET:**
- Windows PowerShell: 
  ```powershell
  -join (-join (33..126) | Get-Random -Count 32 | % {[char]$_})
  ```
- Or use any random 32-character string

### Step 2.5: Deploy Backend

1. Check all settings are correct
2. Click **Create Web Service**
3. Render will start deploying (takes ~2-5 minutes)
4. Wait until you see **"Live"** status with a green dot
5. **COPY** your backend URL (like: `https://appointhub-api.onrender.com`)
6. **SAVE THIS** - you need it for frontend

### Step 2.6: Verify Backend is Running

1. Open new browser tab
2. Visit: `https://appointhub-api.onrender.com/api/health`
3. Should see JSON response:
   ```json
   {"message":"API is running","timestamp":"..."}
   ```

✅ If yes, backend is working!
❌ If error, check logs in Render dashboard

---

## PHASE 3: FRONTEND DEPLOYMENT

### Step 3.1: Create Static Site for Frontend

1. In Render Dashboard, click **+ New**
2. Select **Static Site**
3. Choose **Connect a repository**
4. Select same repository as backend

### Step 3.2: Configure Frontend Service

Fill in with these values:

| Field | Value |
|-------|-------|
| **Name** | `appointhub` |
| **Region** | Same as backend |
| **Branch** | `main` |
| **Build Command** | `cd Online_Appointment-_booking_Frontend-main && npm install && npm run build` |
| **Publish Directory** | `Online_Appointment-_booking_Frontend-main/dist` |
| **Plan** | Free |

### Step 3.3: Add Environment Variable

1. Find **Environment** section
2. Add one variable:

```
VITE_API_URL = https://appointhub-api.onrender.com/api
```

(Replace with your actual backend URL from Step 2.5)

### Step 3.4: Deploy Frontend

1. Click **Create Static Site**
2. Render will build and deploy (takes ~3-5 minutes)
3. Wait for **"Live"** status
4. **COPY** your frontend URL (like: `https://appointhub.onrender.com`)
5. **SAVE THIS** - needed for final CORS setup

---

## PHASE 4: FINAL CONFIGURATION

### Step 4.1: Update Backend CORS

Now that frontend is deployed, update backend CORS settings:

1. Go to **appointhub-api** service in Render
2. Click **Environment**
3. Find `CORS_ORIGIN` variable
4. Change value to your frontend URL:
   ```
   CORS_ORIGIN = https://appointhub.onrender.com
   ```
   (Replace with your actual frontend URL)
5. Click **Save**
6. Backend will auto-redeploy with new CORS settings

### Step 4.2: Update MongoDB Connection (if needed)

If connection string wasn't working:
1. Go back to MongoDB database in Render
2. Check connection string format
3. Update backend `MONGODB_URI` environment variable

---

## PHASE 5: TESTING & VERIFICATION

### Test 1: Backend Health Check

Visit: `https://appointhub-api.onrender.com/api/health`

✅ Should see: `{"message":"API is running"...}`

### Test 2: Frontend Loading

Visit: `https://appointhub.onrender.com`

✅ Should see: Landing page with navigation, features, etc.

### Test 3: User Signup

1. Click **Signup** on landing page
2. Fill in email and password
3. Click **Sign Up**
4. Should get success message or redirect to dashboard

### Test 4: User Login (Demo User)

1. Go to Login page
2. Email: `user@gmail.com`
3. Password: `password123`
4. Should see dashboard after login

### Test 5: Admin Login (Demo Admin)

1. Go to Login page
2. Email: `admin@gmail.com`
3. Password: `admin123`
4. Should see admin dashboard with management options

### Test 6: Booking Functionality

1. Login as regular user
2. Try to book appointment
3. Select service, date, time
4. Submit booking
5. Should see booking confirmation

---

## TROUBLESHOOTING

### Issue: Backend showing "Build Failed"

**Solution:**
1. Click service name in dashboard
2. Check logs at bottom
3. Common causes:
   - Missing npm install step in build command
   - Wrong start command
   - Port not available

**Fix:**
- Build Command: `cd backend && npm install`
- Start Command: `cd backend && npm start`

### Issue: Frontend shows "Cannot connect to API"

**Causes:**
1. Backend not deployed yet
2. `VITE_API_URL` incorrect
3. Backend CORS not updated

**Fix:**
1. Check backend is running: visit health endpoint
2. Verify frontend env variable:
   - Frontend service → Environment
   - Check `VITE_API_URL` matches backend URL
3. Check backend CORS_ORIGIN matches frontend URL

### Issue: Login fails / 401 errors

1. Check MongoDB is connected:
   - Backend logs should show "MongoDB Connected"
2. Verify JWT_SECRET is set (backend)
3. Check network tab in browser dev tools for API response

### Issue: Database connection fails

1. Check MongoDB service is running (should be "Live" in Render)
2. Copy connection string again from Render MongoDB
3. Update backend `MONGODB_URI`
4. Redeploy backend

### Issue: CORS errors in browser console

**Solution:**
1. Check backend `CORS_ORIGIN` matches frontend URL exactly
2. Frontend URL format: `https://appointhub.onrender.com` (no /api)
3. Redeploy backend after changing CORS_ORIGIN

---

## USEFUL COMMANDS & LINKS

### Render Dashboard
- Main: https://dashboard.render.com/
- Docs: https://docs.render.com/

### View Logs
1. Service → **Logs** tab
2. Shows real-time application logs
3. Helpful for debugging

### Manual Redeploy
1. Service → **Deploys** tab
2. Find latest deploy
3. Click **Redeploy**

### Environment Variables
1. Service → **Environment** tab
2. Click **Add Environment Variable**
3. Changes auto-redeploy service

---

## DEPLOYMENT CHECKLIST

Use this before deploying:

```
Database Setup:
  [ ] MongoDB created on Render
  [ ] Connection string copied
  
Backend Configuration:
  [ ] GitHub repo has backend code
  [ ] backend/package.json has "start" script
  [ ] backend/src/server.js uses process.env.PORT
  
Frontend Configuration:
  [ ] GitHub repo has frontend code
  [ ] package.json has "build" script
  [ ] vite.config.js configured
  [ ] src/services/api.js uses VITE_API_URL
```

---

## NEXT STEPS AFTER DEPLOYMENT

1. **Add Custom Domain** (optional)
   - Render allows custom domains
   - Settings → Custom Domains

2. **Monitor Performance**
   - Render dashboard shows usage
   - Monitor response times and errors

3. **Setup Email Notifications** (optional)
   - Dashboard → Settings
   - Get alerts on build failures

4. **Regular Backups**
   - Configure MongoDB backups
   - Essential for production

---

## GETTING HELP

### If deployment fails:

1. **Check logs**: Service → Logs tab
2. **Re-read this guide**: Most issues are in configuration
3. **Verify URLs**: Copy-paste exactly, watch for typos
4. **Clear cache**: Browser may have cached errors

### Resources:
- Render Docs: https://docs.render.com/
- MongoDB Docs: https://docs.mongodb.com/
- Vite Docs: https://vitejs.dev/

---

**Congratulations!** 🎉
You now have your ApointHub application deployed on Render!
