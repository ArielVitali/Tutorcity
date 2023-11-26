import ServiceDAO from "../DAOs/mongo/classes/Service.class.js";
import mongoose from "mongoose";

export const getServices = async () => {
  try {
    const response = await ServiceDAO.getServices();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getServicesByUserId = async (userId) => {
  try {
    return await ServiceDAO.getServiceByUserId(userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getServiceById = async (serviceId) => {
  try {
    return await ServiceDAO.getServiceById(serviceId);
  } catch (error) {
    throw error;
  }
};

export const createNewService = async (userId, serviceInfo) => {
  try {
    const {
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    } = serviceInfo;
    const newServiceInfo = {
      user: userId,
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    };
    console.log(newServiceInfo.user);
    return await ServiceDAO.createService(newServiceInfo);
  } catch (error) {
    throw error;
  }
};

export const updateService = async (id, updateInfo) => {
  try {
    const {
      user,
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    } = updateInfo;
    const newServiceInfo = {
      user,
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    };
    return await ServiceDAO.updateService(id, newServiceInfo);
  } catch (error) {
    throw error;
  }
};

export const removeService = async (id) => {
  try {
    return await ServiceDAO.deleteService(id);
  } catch (error) {
    throw error;
  }
};
