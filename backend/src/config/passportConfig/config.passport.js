import passport from "passport";
import initializePassport from "../passport.config.js";

const passportConfig = (app) => {
  initializePassport();
  app.use(passport.initialize());
};

export default passportConfig;
