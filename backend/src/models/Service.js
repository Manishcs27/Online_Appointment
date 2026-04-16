import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a service title'],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
    duration: {
      type: String,
      required: [true, 'Please provide duration'],
    },
    description: {
      type: String,
      trim: true,
    },
    providers: [{
      type: String,
      required: true,
    }],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);
