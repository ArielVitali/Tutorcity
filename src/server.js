import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router/index.js";
import passportConfig from "./config/passportConfig/config.passport.js";
import cookieParser from "cookie-parser";
import mongoDBconnect from "./config/mongoConfig/config.mongo.js";
import { appConfig } from "./config/index.js";

const { cors_withelist } = appConfig;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || cors_withelist.includes(origin)) {
        return callback(null, true);
      }
      return callback("Not allowed by CORS");
    },
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
await mongoDBconnect(app);
passportConfig(app);
router(app);

export default app;
