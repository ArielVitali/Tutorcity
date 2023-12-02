import mongoose from "mongoose";

const categoryCollection = "categories";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  services: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "services",
    },
  ],
});

const categoryModel = mongoose.model(categoryCollection, categorySchema);

export default categoryModel;
