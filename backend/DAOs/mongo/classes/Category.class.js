import categoryModel from "../models/Category.model.js";

class CategoryDAO {
  constructor() {}

  async createCategory(data) {
    try {
      const response = await categoryModel.create({
        name: data.name,
      });
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

  async updateCategory(id, data) {
    try {
      if (data.service) {
        const response = await categoryModel.findByIdAndUpdate(
          id,
          { ...data, $push: { services: data.service } },
          { new: true }
        );
        return response;
      } else {
        const response = await categoryModel.findByIdAndUpdate(id, data, {
          new: true,
        });
        return response;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new CategoryDAO();
