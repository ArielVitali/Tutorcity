import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { dbConfig } from "./db.config";
const { dbConnectURI, dbSessionName } = dbConfig;

const configMongo = (app) => {
  app.use(
    session({
      store: MongoStore.create({
        mongoUrl: dbSessionName,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      }),
      secret: "secreto",
      resave: false,
      saveUninitialized: false,
    })
  );

  mongoose.set("strictQuery", false);
  mongoose.connect(dbConnectURI, (error) => {
    if (error) {
      console.log(`Cannot connect to db. error ${error}`);
    }
    console.log("db conected");
  });
};

export default configMongo;
