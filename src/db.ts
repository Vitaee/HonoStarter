import mongoose from 'mongoose';
import { config } from './utils/envConfig';


export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${config.DB_USER}:${encodeURIComponent(config.DB_PASS)}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}?authSource=admin`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
