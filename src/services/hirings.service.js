import HiringDAO from "../DAOs/mongo/classes/Hiring.class.js";

export const getHirings = async () => {
  try {
    const response = await HiringDAO.getHirings();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getHiringById = async (serviceId) => {
  try {
    return await HiringDAO.getHiringById(serviceId);
  } catch (error) {
    throw error;
  }
};

export const createHiring = async (serviceInfo) => {
  try {
    return await HiringDAO.createHiring(serviceInfo);
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
