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

  async getHiringsByUserId(id) {
    try {
      const response = await hiringModel.find({ id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getHiringsByServiceId(service) {
    try {
      const response = await hiringModel.find({ service });
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
