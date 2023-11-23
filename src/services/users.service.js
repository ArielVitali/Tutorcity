import UserDAO from "../DAOs/mongo/clasess/User.class.js";

export const getUsers = async () => {
  try {
    const response = await UserDAO.getUsers();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (serviceId) => {
  try {
    return await UserDAO.getUserById(serviceId);
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

export const removeUser = async (id) => {
  try {
    return await UserDAO.deleteUser(id);
  } catch (error) {
    throw error;
  }
};
