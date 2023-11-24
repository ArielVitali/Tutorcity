import ServiceDAO from "../DAOs/mongo/classes/Service.class.js";

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

export const createNewService = async (serviceInfo) => {
  try {
    return await ServiceDAO.createService(serviceInfo);
  } catch (error) {
    throw error;
  }
};

export const updateService = async (id, updateInfo) => {
  try {
    return await ServiceDAO.updateService(id, updateInfo);
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
