import mongoose from "mongoose";
import { dbConfig } from "./db.config.js";

const { dbUser, dbPassword, dbHost, dbName } = dbConfig;

const dbConnectURI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`;

const mongoDBconnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbConnectURI);
    console.log("db connected!");
  } catch (error) {
    console.log(`Error al conectar ${error}`);
  }
};

export default mongoDBconnect;
