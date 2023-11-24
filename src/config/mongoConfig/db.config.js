import { config } from "dotenv";

config();

export const dbConfig = {
  dbConnectURI: process.env.DB_CONNECT_URI,
  dbSessionName: process.env.DB_SESSION_NAME,
};
