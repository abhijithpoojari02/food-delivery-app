import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        console.error("Error: MONGODB_URI is not defined in environment variables.");
        return;
    }
    try {
        await mongoose.connect(mongoUri);
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error.message);
    }
}