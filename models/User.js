import mongoose from "mongoose";

// CREATE THE USER SCHEMA //
const userSchema = new mongoose.Schema(
  {
    alias: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      //   required: true,
      default: false,
    },
    secrets: {
      type: Array,
      //   required: true,
      default: [],
    },
    avatar: {
      type: String,
      //   required: true,
      default: "uploads/2055576.png",
    },
  },
  { timestamps: true }
);

// CREATE THE MODEL: The collection name is defined here //
const User = new mongoose.model("user", userSchema)

// EXPORT THE MODEL //
export default User