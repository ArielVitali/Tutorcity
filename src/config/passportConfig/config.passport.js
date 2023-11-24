import passport from "passport";
import initializePassport from "../passport.config";

const passportConfig = (app) => {
  initializePassport();
  app.use(passport.initialize());
  app.use(passport.session());
};

export default passportConfig;
