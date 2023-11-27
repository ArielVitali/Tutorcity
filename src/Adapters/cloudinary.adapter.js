import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../config/cloudinaryConfig/cloudinary.config.js";

const { cloud_name, api_key, api_secret } = cloudinaryConfig;

class CloudinaryAdapter {
  constructor() {
    cloudinary.config({
      cloud_name,
      api_key,
      api_secret,
    });
  }

  async uploadImage(imageBuffer) {
    try {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream((error, result) => {
            if (error) {
              console.error("Error uploading to Cloudinary:", error);
              reject(error.message);
            }
            resolve(result.secure_url);
          })
          .end(imageBuffer);
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new CloudinaryAdapter();
