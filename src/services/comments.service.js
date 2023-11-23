import CommentDAO from "../DAOs/mongo/clasess/Comment.class.js";

export const getCommentsByServiceId = async (serviceId) => {
  try {
    const response = await CommentDAO.getCommentsByServiceId(serviceId);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCommentById = async (id) => {
  try {
    return await CommentDAO.getCommentById(id);
  } catch (error) {
    throw error;
  }
};

export const createNewService = async (serviceId, commentInfo) => {
  try {
    return await CommentDAO.createComment(serviceId, commentInfo);
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (id, updateInfo) => {
  try {
    return await CommentDAO.updateComment(id, updateInfo);
  } catch (error) {
    throw error;
  }
};

export const removeComment = async (id) => {
  try {
    return await CommentDAO.deleteComment(id);
  } catch (error) {
    throw error;
  }
};
