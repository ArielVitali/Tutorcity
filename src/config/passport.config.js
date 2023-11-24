import passport from "passport";
import local from "passport-local";
import jwt from "passport-jwt";
import { cookieExtractor } from "../Utils/cookieExtractor.js";
import {
  createUser,
  getUserByEmail,
  getUserById,
} from "../services/users.service.js";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: "Codi0goS3creto",
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

          //   if(!first_name || !last_name || !email || !age){
          //     userError(userInfo);
          //   }

          if (user) {
            console.log("User already exists.");
            return null, false;
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
        const user = await getUserByEmail(username);

        if (!user) {
          console.log("User does not exist.");
          return done(null, false);
        }

        // if (!cryptPassword.isValidPasswordMethod(password, user)) {
        //     return done(null, false);
        //   }

        return done(null, user);
      }
    )
  );
};

export default initializePassport;
