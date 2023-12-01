import passport from "passport";
import local from "passport-local";
import jwt from "passport-jwt";
import {
  createUser,
  getUserByEmail,
  getUserById,
} from "../services/users.service.js";
import { appConfig } from "../config/index.js";
import { generateToken } from "../Utils/token/tokenManager.js";

const { jwt_secret } = appConfig;
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret,
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
          console.log("req.body");
          const user = await getUserByEmail(username);

          if (user) {
            console.log("User already exists.");
            return done(null, false);
          }

          const newUser = await createUser(req.body, password);

          const token = generateToken({ id: newUser.id, email: newUser.email });

          return done(null, { user: newUser, token });
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
          console.log(user, "user");
          const user = await getUserByEmail(username);

          if (!user) {
            console.log("User does not exist.");
            return done(null, false);
          }

          if (!(await user.isValidPassword(password))) {
            return done(null, false);
          }

          const token = generateToken({ id: user.id, email: user.email });

          return done(null, { token });
        } catch (error) {}
      }
    )
  );
};

export default initializePassport;
