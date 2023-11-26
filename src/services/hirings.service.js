import HiringDAO from "../DAOs/mongo/classes/Hiring.class.js";
import { getServiceById } from "./services.service.js";

export const getHiringsByServiceId = async (serviceId) => {
  try {
    return await HiringDAO.getHiringsByServiceId(serviceId);
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

export const createHiring = async (serviceId, hiringInfo) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      email,
      meeting_time,
      description,
    } = hiringInfo;

    const service = await getServiceById(serviceId);
    if (!service) {
      throw new Error("Service not found");
    }

    const newHiringInfo = {
      service: serviceId,
      user: service.user,
      first_name,
      last_name,
      phone_number,
      email,
      meeting_time,
      description,
    };
    return await HiringDAO.createHiring(newHiringInfo);
  } catch (error) {
    throw error;
  }
};

export const updateHiring = async (id, updateInfo) => {
  try {
    const { status } = updateInfo;
    return await HiringDAO.updateHiring(id, { status });
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
