import UserDAO from "../DAOs/mongo/classes/User.class.js";
import { uploadImage } from "./fileUpload.service.js";
import { generateToken } from "../Utils/token/tokenManager.js";

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
      profile_img_url,
    } = updateInfo;
    const updatedUserInfo = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      degree,
      experience,
      profile_img_url,
    };

    let user = await UserDAO.getUserById(id);
    if (!user) return "User not found";

    if (password) {
      await user.updateWithHashedPassword(updatedUserInfo);
    } else {
      user = await UserDAO.updateUser(id, updatedUserInfo);
    }

    const repsonse = {
      user: {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        degree: user.degree,
        experience: user.experience,
        profileImgUrl: user.profile_img_url,
      },
    };

    return repsonse;
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

export const updatedUserProfileImg = async (id, file) => {
  try {
    const imgURL = await uploadImage(file);
    const updatedUserInfo = { profile_img_url: imgURL };
    await updateUser(id, updatedUserInfo);
    return imgURL;
  } catch (error) {
    throw error;
  }
};
