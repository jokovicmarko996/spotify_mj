import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true } //  createdAt, updatedAt
);

// Export the User model
// This will allow us to interact with the users collection in MongoDB
export const User = mongoose.model("User", userSchema);
