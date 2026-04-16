# RENDER DEPLOYMENT - QUICK REFERENCE

## Essential URLs

| Service | Type | URL Format |
|---------|------|-----------|
| MongoDB Database | Managed DB | Provided by Render |
| Backend API | Web Service | `https://YOUR-BACKEND-NAME.onrender.com` |
| Frontend App | Static Site | `https://YOUR-FRONTEND-NAME.onrender.com` |

---

## Environment Variables Quick Reference

### Backend (Web Service)

```
PORT=5000
NODE_ENV=production
JWT_SECRET=your_random_secret_key_here_min_20_chars
JWT_EXPIRE=7d
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
CORS_ORIGIN=https://your-frontend-url.onrender.com
```

### Frontend (Static Site)

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

## Build Commands

### Backend Build Command
```bash
cd backend && npm install
```

### Backend Start Command
```bash
cd backend && npm start
```

### Frontend Build Command
```bash
cd Online_Appointment-_booking_Frontend-main && npm install && npm run build
```

### Frontend Publish Directory
```
Online_Appointment-_booking_Frontend-main/dist
```

---

## Deployment Order

1. ✅ **Step 1**: Create MongoDB database
2. ✅ **Step 2**: Deploy Backend
3. ✅ **Step 3**: Deploy Frontend
4. ✅ **Step 4**: Update Backend CORS settings
5. ✅ **Step 5**: Test all endpoints

---

## Testing URLs After Deployment

```
Backend Health:
https://your-backend-api.onrender.com/api/health

Backend Root:
https://your-backend-api.onrender.com/

Frontend:
https://your-frontend.onrender.com
```

---

## Common Issues & Quick Fixes

| Issue | Fix |
|-------|-----|
| Build fails | Check build command matches your file paths |
| Backend won't start | Verify `start` command in package.json |
| Frontend shows blank page | Check `VITE_API_URL` environment variable |
| Cannot login | Verify MongoDB connection string |
| CORS errors | Update backend `CORS_ORIGIN` with frontend URL |
| Slow deployments | Render free tier has longer build times |

---

## Tips

- 🔒 Never commit `.env` files - use `.env.example`
- 🚀 Free tier Render services sleep after 15 min inactivity (cold start ~30 sec)
- 📊 Monitor usage in Render dashboard
- 🔄 Redeploy manually if needed: Service → Deploys → Redeploy
- 📝 Check logs for errors: Service → Logs

---

## Important Files

- [Full Deployment Guide](./RENDER_DEPLOYMENT.md)
- [Step-by-Step Guide](./RENDER_STEP_BY_STEP.md)
- [Environment Variables](./ENV_VARIABLES.md)
- [Backend .env.example](./backend/.env.example)
- [Frontend .env.example](./Online_Appointment-_booking_Frontend-main/.env.example)

---

## Render Account Setup

1. Create account: https://render.com
2. Sign up with GitHub (recommended for easier integration)
3. Dashboard: https://dashboard.render.com/
4. Docs: https://docs.render.com/

---

Need help? See the [full step-by-step guide](./RENDER_STEP_BY_STEP.md)
