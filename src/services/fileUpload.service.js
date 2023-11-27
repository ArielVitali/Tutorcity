import CloudinaryAdapter from "../Adapters/cloudinary.adapter.js";

export const uploadImage = async (file) => {
  try {
    return await CloudinaryAdapter.uploadImage(file);
  } catch (error) {
    throw error;
  }
};
