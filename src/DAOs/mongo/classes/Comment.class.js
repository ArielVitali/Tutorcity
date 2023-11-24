import commentModel from "../models/Comment.models.js";

class CommentDAO {
  constructor() {}

  async createComment(serviceId, data) {
    try {
      const response = await commentModel.create({ serviceId, data });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCommentsByServiceId(serviceId) {
    try {
      const response = await commentModel.find({ serviceId });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCommentById(id) {
    try {
      const response = await commentModel.find({ id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateComment(id, data) {
    try {
      const response = commentModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteComment(id) {
    try {
      const response = commentModel.deleteOne(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new CommentDAO();
