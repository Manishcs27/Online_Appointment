import express from 'express';
import {
  createAppointment,
  getUserAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAllAppointments,
} from '../controllers/appointmentController.js';
import auth from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const router = express.Router();

// User appointments
router.post('/', auth, createAppointment);
router.get('/user', auth, getUserAppointments);
router.get('/:id', auth, getAppointmentById);
router.put('/:id', auth, updateAppointment);
router.delete('/:id', auth, deleteAppointment);

// Admin appointments
router.get('/', auth, authorize('admin'), getAllAppointments);

export default router;
