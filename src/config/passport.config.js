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
          const user = await getUserByEmail(username);

          if (user) {
            console.log("User already exists.");
            return done(null, false);
          }

          const newUser = await createUser(req.body, password);

          const { token, expiresIn } = generateToken({ id: newUser._id });

          const repsonse = {
            user: {
              id: newUser._id,
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              email: newUser.email,
              phone_number: newUser.phone_number,
              degree: newUser.degree,
              experience: newUser.experience,
              profileImgUrl: newUser.profile_img_url,
            },
            jwt: {
              token,
              expiresIn,
            },
          };

          return done(null, repsonse);
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

          if (!(await user.isValidPassword(password))) {
            return done(null, false);
          }

          const { token, expiresIn } = generateToken({ id: user._id });

          const repsonse = {
            user: {
              id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              phone_number: user.phone_number,
              degree: user.degree,
              experience: user.experience,
              profileImgUrl: user.profile_img_url,
            },
            jwt: {
              token,
              expiresIn,
            },
          };

          return done(null, repsonse);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

export default initializePassport;
