import mongoose from "mongoose";

const commentCollection = "comments";

const commentSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.ObjectId,
    ref: "services",
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
  comment: {
    type: String,
    maxLength: [150, "The service description exceeds the max chars."],
    trim: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted"],
    default: "Pending",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const commentModel = mongoose.model(commentCollection, commentSchema);

export default commentModel;
