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

  async getServices(query, sortOptions, hasConditions) {
    try {
      if (!hasConditions) {
        const response = await serviceModel.find().populate("user");
        return response;
      } else {
        const response = await serviceModel
          .find(query)
          .populate("user")
          .sort({ ratingAverage: sortOptions });

        return response;
      }
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

  async getServiceByUserId(user) {
    try {
      const response = await serviceModel.find({ user });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateService(id, data) {
    try {
      const response = await serviceModel.updateOne(
        { _id: id },
        { $set: data }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteService(id) {
    try {
      console.log("antes de borrarrr", id);
      const response = await serviceModel.deleteOne({ _id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ServiceDAO();
