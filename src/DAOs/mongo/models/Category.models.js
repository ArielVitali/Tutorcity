import mongoose from "mongoose";

const categoryCollection = "categories";

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const categoryModel = mongoose.model(categoryCollection, categorySchema);

export default categoryModel;
