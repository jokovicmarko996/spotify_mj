import mongoose from "mongoose";

// ne moras da ubacis dotenv jer pozivas funkciju u index.js fajlu gde vec importujes dotenv i pozivas je u app.listen funkciji
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1); // 1 is failure, 0 is success
  }
};
