import passport from "passport";
import local from "passport-local";
import jwt from "passport-jwt";
import { cookieExtractor } from "../Utils/cookieExtractor.js";
import {
  createUser,
  getUserByEmail,
  getUserById,
} from "../services/users.service.js";
import { isValidPasswordMethod } from "../Utils/bcrypt/cryptPassword.js";
import { appConfig } from "../config/index.js";

const { jwt_secret } = appConfig;
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: `${jwt_secret}`,
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        try {
          const user = await getUserByEmail(username);

          if (user) {
            console.log("User already exists.");
            return done(null, false);
          }

          const newUser = await createUser(req.body, password);
          return done(null, newUser);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await getUserById(id);
    done(null, user);
  });

  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await getUserByEmail(username);

          if (!user) {
            console.log("User does not exist.");
            return done(null, false);
          }

          if (!isValidPasswordMethod(password, user)) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {}
      }
    )
  );
};

export default initializePassport;
