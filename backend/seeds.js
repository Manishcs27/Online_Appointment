import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import User from './src/models/User.js';
import Service from './src/models/Service.js';
import dotenv from 'dotenv';

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Service.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const hashedUserPassword = await bcryptjs.hash('password123', 10);
    const hashedAdminPassword = await bcryptjs.hash('admin123', 10);

    const users = await User.create([
      {
        name: 'Standard User',
        email: 'user@gmail.com',
        password: hashedUserPassword,
        role: 'user',
        status: 'active',
        phone: '+1-555-0101',
      },
      {
        name: 'System Admin',
        email: 'admin@gmail.com',
        password: hashedAdminPassword,
        role: 'admin',
        status: 'active',
        phone: '+1-555-0102',
      },
    ]);

    console.log(`✓ Created ${users.length} users`);

    // Create services
    const services = await Service.create([
      {
        title: 'General Checkup',
        price: 50,
        duration: '30 min',
        description: 'Comprehensive general health checkup with medical professional',
        providers: ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'],
        status: 'active',
      },
      {
        title: 'Cardiology',
        price: 120,
        duration: '45 min',
        description: 'Heart and cardiovascular health consultation and check',
        providers: ['Dr. Brown', 'Dr. Wilson', 'Dr. Martinez'],
        status: 'active',
      },
      {
        title: 'Vaccination',
        price: 30,
        duration: '15 min',
        description: 'Vaccination and immunization services for all ages',
        providers: ['Nurse Davis', 'Nurse Miller', 'Nurse Garcia'],
        status: 'active',
      },
      {
        title: 'Blood Test',
        price: 40,
        duration: '20 min',
        description: 'Complete blood work analysis and laboratory testing',
        providers: ['Lab Tech Kumar', 'Lab Tech Singh', 'Lab Tech Patel'],
        status: 'active',
      },
    ]);

    console.log(`✓ Created ${services.length} services`);

    console.log('\n✓ Database seeded successfully!');
    console.log('\nDemo Credentials:');
    console.log('User - Email: user@gmail.com | Password: password123');
    console.log('Admin - Email: admin@gmail.com | Password: admin123');

    await mongoose.connection.close();
    console.log('\nConnection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
