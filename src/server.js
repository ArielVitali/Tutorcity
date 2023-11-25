import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router/index.js";
import passportConfig from "./config/passportConfig/config.passport.js";
import cookieParser from "cookie-parser";
import mongoDBconnect from "./config/mongoConfig/config.mongo.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("Codi0goS3creto"));
await mongoDBconnect(app);
passportConfig(app);
router(app);

export default app;
