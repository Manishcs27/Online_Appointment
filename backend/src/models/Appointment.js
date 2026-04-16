import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide a user ID'],
    },
    service: {
      type: String,
      required: [true, 'Please provide a service'],
      enum: ['General Checkup', 'Cardiology', 'Vaccination', 'Blood Test'],
    },
    provider: {
      type: String,
      required: [true, 'Please provide a provider'],
    },
    date: {
      type: Date,
      required: [true, 'Please provide a date'],
    },
    time: {
      type: String,
      required: [true, 'Please provide a time'],
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'completed', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
      trim: true,
    },
    bookedAt: {
      type: Date,
      default: Date.now,
    },
    price: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
      default: '30 min',
    },
  },
  { timestamps: true }
);

// Index for faster queries
appointmentSchema.index({ userId: 1, date: 1 });
appointmentSchema.index({ status: 1 });

export default mongoose.model('Appointment', appointmentSchema);
