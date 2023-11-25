import { config } from "dotenv";

config();

export const appConfig = {
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET,
};
