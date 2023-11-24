import serviceModel from "../models/Service.models.js";

class ServiceDAO {
  constructor() {}

  async createService(data) {
    try {
      const response = await serviceModel.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getServices() {
    try {
      const response = await serviceModel.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getServiceById(id) {
    try {
      const response = await serviceModel.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getServiceByUserId(id) {
    try {
      const response = await serviceModel.find({ id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateService(id, data) {
    try {
      const response = serviceModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteService(id) {
    try {
      const response = serviceModel.deleteOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ServiceDAO();
