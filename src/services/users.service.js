import UserDAO from "../DAOs/mongo/classes/User.class.js";

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
    const { first_name, last_name, email, password, phone_number } =
      serviceInfo;
    const newUserInfo = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      degree: "",
      experience: "",
    };
    return await UserDAO.createUser(newUserInfo);
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, updateInfo) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      degree,
      experience,
    } = updateInfo;
    const updatedUserInfo = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      degree,
      experience,
    };
    return await UserDAO.updateUser(id, updatedUserInfo);
  } catch (error) {
    throw error;
  }
};

export const getPublicUserProfile = async (user) => {
  try {
    const { first_name, last_name, degree, experience, profile_img_url } = user;
    return { first_name, last_name, degree, experience, profile_img_url };
  } catch (error) {
    throw error;
  }
};

export const updatedUserProfileImg = async (id, updateInfo) => {};
