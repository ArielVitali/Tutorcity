import HiringDAO from "../DAOs/mongo/classes/Hiring.class.js";

export const getHiringByServiceId = async (serviceId) => {
  try {
    return await HiringDAO.getHiringByServiceId(serviceId);
  } catch (error) {
    throw error;
  }
};

export const getHiringsByUserId = async (userId) => {
  try {
    return await HiringDAO.getHiringsByUserId(userId);
  } catch (error) {
    throw error;
  }
};

export const createHiring = async (serviceId, serviceInfo) => {
  try {
    return await HiringDAO.createHiring(serviceId, serviceInfo);
  } catch (error) {
    throw error;
  }
};

export const updateHiring = async (id, updateInfo) => {
  try {
    return await HiringDAO.updateHiring(id, updateInfo);
  } catch (error) {
    throw error;
  }
};

export const removeHiring = async (id) => {
  try {
    return await HiringDAO.deleteHiring(id);
  } catch (error) {
    throw error;
  }
};
