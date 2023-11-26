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

  async getUserById(id) {
    try {
      const response = await userModel.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const response = await userModel.findOne({ email });
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateUser(id, data) {
    try {
      const response = await userModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserDAO();
