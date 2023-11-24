import userModel from "../models/User.models.js";

class UserDAO {
  constructor() {}

  async createUser(data) {
    try {
      const response = await userModel.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      const response = await userModel.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const response = await userModel.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, data) {
    try {
      const response = userModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const response = userModel.deleteOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserDAO();
