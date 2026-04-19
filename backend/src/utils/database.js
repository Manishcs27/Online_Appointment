import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/appointhub';

  if (!/^mongodb(\+srv)?:\/\//.test(uri)) {
    console.error(
      `Invalid MongoDB connection string. Expected scheme to start with "mongodb://" or "mongodb+srv://". Received: ${uri}`
    );
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
