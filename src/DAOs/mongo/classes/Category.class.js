import categoryModel from "../models/Category.model.js";

class CategoryDAO {
  constructor() {}

  async createCategory(data) {
    try {
      const response = await categoryModel.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCategories() {
    try {
      const response = await categoryModel.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCategoryById(id) {
    try {
      const response = await categoryModel.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCategoryByName(name) {
    try {
      const response = await categoryModel.find({ name });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new CategoryDAO();
