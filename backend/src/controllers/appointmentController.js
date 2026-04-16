import Appointment from '../models/Appointment.js';
import User from '../models/User.js';

export const createAppointment = async (req, res, next) => {
  try {
    const { service, provider, date, time, notes } = req.body;
    const userId = req.userId;

    if (!service || !provider || !date || !time) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Get service details for price and duration
    const serviceDetails = {
      'General Checkup': { price: 50, duration: '30 min' },
      'Cardiology': { price: 120, duration: '45 min' },
      'Vaccination': { price: 30, duration: '15 min' },
      'Blood Test': { price: 40, duration: '20 min' },
    };

    const details = serviceDetails[service];

    const appointment = new Appointment({
      userId,
      service,
      provider,
      date: new Date(date),
      time,
      notes,
      price: details?.price || 0,
      duration: details?.duration || '30 min',
      status: 'pending',
    });

    await appointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserAppointments = async (req, res, next) => {
  try {
    const userId = req.userId;

    const appointments = await Appointment.find({ userId }).sort({ date: 1 });

    res.json({
      success: true,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};

export const getAppointmentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if user is owner or admin
    if (appointment.userId.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const updateAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, date, time, notes } = req.body;

    let appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check authorization
    if (appointment.userId.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    if (status) appointment.status = status;
    if (date) appointment.date = new Date(date);
    if (time) appointment.time = time;
    if (notes) appointment.notes = notes;

    await appointment.save();

    res.json({
      success: true,
      message: 'Appointment updated successfully',
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check authorization
    if (appointment.userId.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await Appointment.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Appointment deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAppointments = async (req, res, next) => {
  try {
    const { status } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    const appointments = await Appointment.find(query)
      .populate('userId', 'name email phone')
      .sort({ date: -1 });

    res.json({
      success: true,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};
