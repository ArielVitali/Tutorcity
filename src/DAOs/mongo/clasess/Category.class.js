import categoryModel from "../models/Category.models.js";

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
      const response = await categoryModel.findOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateCategory(id, data) {
    try {
      const response = categoryModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id) {
    try {
      const response = categoryModel.deleteOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new CategoryDAO();
