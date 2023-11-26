import jwt from "jsonwebtoken";
import { appConfig } from "../../config/index.js";
const { jwt_secret } = appConfig;

export const generateToken = (payload) => {
  const expiresIn = "1d";
  try {
    const token = jwt.sign(
      { id: payload.id, email: payload.email },
      jwt_secret,
      { expiresIn }
    );
    return token;
  } catch (error) {
    throw error;
  }
};
