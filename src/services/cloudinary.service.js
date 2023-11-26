import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../config/cloudinaryConfig/cloudinary.config.js";

const { cloud_name, api_key, api_secret } = cloudinaryConfig;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

export const uploadImage = async (file) => {
  try {
  } catch (error) {}
};
