import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';
dotenv.config({
path:'./env'
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MONGODB connection FAILED', error);
    process.exit(1);
  }
};

connectDB()
.then((result) => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}).catch((err) => {
  console.log("MongoDB connection failed", err);
});
