import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserStats,
} from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const router = express.Router();

// Admin routes
router.get('/', auth, authorize('admin'), getAllUsers);
router.get('/stats', auth, authorize('admin'), getUserStats);
router.get('/:id', auth, getUserById);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, authorize('admin'), deleteUser);

export default router;
