import CommentDAO from "../DAOs/mongo/classes/Comment.class.js";

export const getCommentsByServiceId = async (serviceId) => {
  try {
    const response = await CommentDAO.getCommentsByServiceId(serviceId);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPendingCommentsByServiceId = async (serviceId) => {
  try {
    if (serviceId === undefined) {
      return await CommentDAO.getPendingComments();
    } else {
      return await CommentDAO.getPendingCommentsByServiceId(serviceId);
    }
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

export const createNewComment = async (serviceId, commentInfo) => {
  try {
    const { first_name, last_name, comment, rating } = commentInfo;
    const newCommentInfo = {
      service: serviceId,
      first_name,
      last_name,
      comment,
      rating,
    };
    return await CommentDAO.createComment(newCommentInfo);
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (id, updateInfo) => {
  try {
    const { status } = updateInfo;
    return await CommentDAO.updateComment(id, { status });
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
