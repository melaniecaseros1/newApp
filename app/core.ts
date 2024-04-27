import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_API_DB|| "";

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
  }
}

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);