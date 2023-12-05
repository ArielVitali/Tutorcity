import commentModel from "../models/Comment.models.js";

class CommentDAO {
  constructor() {}

  async createComment(data) {
    try {
      const response = await commentModel.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCommentsByServiceId(service) {
    try {
      const status = "Accepted";
      const response = await commentModel.find({ service, status });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getPendingCommentsByServiceId(service) {
    try {
      const response = await commentModel
        .find({ service, status: "Pending" })
        .populate("service");
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getPendingComments() {
    try {
      const response = await commentModel
        .find({ status: "Pending" })
        .populate("service");
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
      const response = await commentModel.updateOne(
        { _id: id },
        { $set: data }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteComment(id) {
    try {
      const response = await commentModel.deleteOne({ _id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getPendingCommentsByUser(userId) {
    try {
      const response = await commentModel.find({
        user: userId,
        status: "Pending",
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new CommentDAO();
