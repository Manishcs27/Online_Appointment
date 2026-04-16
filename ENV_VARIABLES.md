# Render Deployment Environment Variables

## Backend (.env)

Production environment variables for backend deployment:

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/appointhub
JWT_SECRET=your_super_secret_jwt_key_here_change_this
JWT_EXPIRE=7d
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.onrender.com
```

## Frontend (.env)

Production environment variables for frontend deployment:

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## Getting Values

### MONGODB_URI

1. Create MongoDB database on Render
2. Copy connection string from Render dashboard
3. Format: `mongodb+srv://user:password@cluster.mongodb.net/database`

### JWT_SECRET

Generate a strong secret:
```bash
# On Linux/Mac
openssl rand -base64 32

# On Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Maximum 256}))
```

Or use any strong random string.

### CORS_ORIGIN

Your frontend URL from Render, e.g.:
- `https://appointhub.onrender.com`

### VITE_API_URL

Your backend URL from Render, e.g.:
- `https://appointhub-api.onrender.com/api`

## Render Service URLs

After deployment:

- **Backend Web Service**: `https://appointhub-api.onrender.com`
- **Frontend Static Site**: `https://appointhub.onrender.com`

⚠️ Available only after services are deployed for the first time.
