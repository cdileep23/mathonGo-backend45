import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.DATABASE_URL);
    
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
