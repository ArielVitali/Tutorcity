import CommentDAO from "../DAOs/mongo/classes/Comment.class.js";
import { getServiceById, updateService } from "./services.service.js";

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
    if (serviceId === "all") {
      return await CommentDAO.getPendingComments();
    } else {
      return await CommentDAO.getPendingCommentsByServiceId(serviceId);
    }
  } catch (error) {
    throw error;
  }
};

export const getPendingCommentsByUser = async (userId) => {
  try {
    return await CommentDAO.getPendingCommentsByUser(userId);
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
    let response;
    const { status, service, ratedTimes, ratingTotalPoints, rating } =
      updateInfo;

    if (rating && service && ratedTimes && ratingTotalPoints) {
      const newRatingTotalPoints = ratingTotalPoints + rating;
      const newRatedTimes = ratedTimes + 1;
      const newRatingAverage = newRatingTotalPoints / newRatedTimes;

      response = await CommentDAO.updateComment(id, { status });
      await updateService(service, {
        ratedTimes: newRatedTimes,
        ratingTotalPoints: newRatingTotalPoints,
        ratingAverage: newRatingAverage,
      });
      return response;
    }

    return (response = await CommentDAO.updateComment(id, { status }));
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
