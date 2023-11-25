import { config } from "dotenv";

config();

export const config = {
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET,
};
