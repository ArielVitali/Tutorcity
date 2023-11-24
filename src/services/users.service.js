import UserDAO from "../DAOs/mongo/classes/classes.js";

export const getUserById = async (serviceId) => {
  try {
    return await UserDAO.getUserById(serviceId);
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await UserDAO.getUserByEmail(email);
  } catch (error) {
    throw error;
  }
};

export const createUser = async (serviceInfo) => {
  try {
    return await UserDAO.createUser(serviceInfo);
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, updateInfo) => {
  try {
    return await UserDAO.updateUser(id, updateInfo);
  } catch (error) {
    throw error;
  }
};
