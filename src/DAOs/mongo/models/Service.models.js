import mongoose from "mongoose";

const serviceCollection = "services";

const serviceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    maxLength: [45, "The service name exceeds the max chars."],
    required: true,
  },
  duration: {
    type: Number,
    min: [0.5, "Minimum duration is half an hour"],
    max: [4, "Maximum duration is four hours"],
    required: true,
  },
  type: {
    type: String,
    enum: ["Private", "Group"],
    required: true,
  },
  frequency: {
    type: String,
    enum: ["One time", "weekly", "monthly"],
    required: true,
  },
  description: {
    type: String,
    maxLength: [150, "The service description exceeds the max chars."],
    required: true,
  },
  price: {
    type: Number,
    min: [1, "Minimum valid price $1"],
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
  ratedTimes: {
    type: Number,
    default: 0,
  },
  ratingTotalPoints: {
    type: Number,
    default: 0,
  },
  ratingAverage: {
    type: Number,
    default: 0,
  },
});

const serviceModel = mongoose.model(serviceCollection, serviceSchema);

export default serviceModel;
