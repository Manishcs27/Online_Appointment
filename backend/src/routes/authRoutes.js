import express from 'express';
import { signup, login, getCurrentUser, logout, refreshToken } from '../controllers/authController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh', refreshToken);
router.get('/me', auth, getCurrentUser);
router.post('/logout', logout);

export default router;
