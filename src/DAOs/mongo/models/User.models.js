import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    requied: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    maxLength: [50, "Exceeded characters"],
  },
  experience: {
    type: String,
    maxLength: [150, "Experince exceeds the max chars."],
    required: true,
  },
  profile_img_url: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
