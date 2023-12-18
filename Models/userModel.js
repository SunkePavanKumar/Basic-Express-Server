import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  userId: { type: String, required: true },
});

export const userModel = mongoose.model("users", userSchema);
