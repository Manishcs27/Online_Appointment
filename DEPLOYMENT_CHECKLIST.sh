#!/bin/bash
# Quick deployment checklist for Render

echo "=== Render Deployment Checklist ==="
echo ""

echo "Step 1: Pre-Deployment Verification"
echo "[ ] Backend package.json has 'start' script"
echo "[ ] Backend package.json has 'dev' script (for development)"
echo "[ ] Frontend package.json has 'build' script"
echo "[ ] .env.example files exist for both"
echo "[ ] MongoDB connection string template ready"
echo ""

echo "Step 2: Backend Preparation"
echo "[ ] Verify backend/src/server.js uses process.env.PORT"
echo "[ ] Verify CORS settings in backend/src/server.js"
echo "[ ] Check all routes in backend/src/routes/"
echo "[ ] Verify database connection in backend/src/utils/database.js"
echo ""

echo "Step 3: Frontend Preparation"
echo "[ ] Verify frontend build in package.json outputs to 'dist'"
echo "[ ] Verify vite.config.js is configured correctly"
echo "[ ] Check all API calls use process.env.VITE_API_URL"
echo "[ ] Ensure .env.example has VITE_API_URL"
echo ""

echo "Step 4: Render Dashboard Setup"
echo "[ ] Created MongoDB database service"
echo "[ ] Noted MongoDB connection string"
echo "[ ] Created Web Service for backend"
echo "[ ] Created Static Site for frontend"
echo "[ ] Set all backend environment variables"
echo "[ ] Set frontend API URL variable"
echo ""

echo "Step 5: Post-Deployment Testing"
echo "[ ] Backend /api/health responds"
echo "[ ] Frontend loads without errors"
echo "[ ] Login page displays"
echo "[ ] Can send signup request"
echo "[ ] Can send login request"
echo "[ ] Frontend correctly calls backend API"
echo ""

echo "For detailed instructions, see RENDER_DEPLOYMENT.md"
