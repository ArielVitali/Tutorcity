import hiringModel from "../models/Hiring.models.js";

class HiringDAO {
  constructor() {}

  async createHiring(data) {
    try {
      const response = await hiringModel.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getHirings() {
    try {
      const response = await hiringModel.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getHiringById(id) {
    try {
      const response = await hiringModel.findOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateHiring(id, data) {
    try {
      const response = hiringModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteHiring(id) {
    try {
      const response = hiringModel.deleteOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new HiringDAO();
