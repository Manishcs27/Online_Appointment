import express from 'express';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';
import auth from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const router = express.Router();

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Admin routes
router.post('/', auth, authorize('admin'), createService);
router.put('/:id', auth, authorize('admin'), updateService);
router.delete('/:id', auth, authorize('admin'), deleteService);

export default router;
