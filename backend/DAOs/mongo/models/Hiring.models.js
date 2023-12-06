import mongoose from "mongoose";

const hiringCollection = "hirings";

const hiringSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.ObjectId,
    ref: "services",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  meeting_time: {
    type: String,
    enum: ["morning", "afternoon", "evening"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Canceled", "Finalized"],
    required: true,
    default: "Pending",
  },
});

const hiringModel = mongoose.model(hiringCollection, hiringSchema);

export default hiringModel;
