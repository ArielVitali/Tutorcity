import passport from "passport";
import RouterClass from "../router/router.class.js";
import { getUserByEmail } from "../services/users.service.js";
import { sendPasswordResetEmail } from "../services/mailing.service.js";
import { updateUser } from "../services/users.service.js";

class AuthRouter extends RouterClass {
  init() {
    this.post(
      "/",
      ["PUBLIC"],
      passport.authenticate("login", { session: false }),
      async (req, res) => {
        try {
          if (!req.user) {
            return res.status(400).json({ error: "Credenciales invalidas" });
          }
          //el bro retorna el token y el user
          console.log(req.user);
          res.json({ token: req.user.token });
        } catch (error) {
          res.sendServerError(`something went wrong ${error}`);
        }
      }
    );

    this.post("/request-password-reset", ["PUBLIC"], async (req, res) => {
      try {
        const { email } = req.body;
        const user = await getUserByEmail(email);
        if (user) {
          sendPasswordResetEmail(user);
        }
        res.sendSuccess("If the email exists, a reset link will be sent.");
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.post("/reset-password", ["PRIVATE"], async (req, res) => {
      try {
        const { password } = req.body;
        const response = await updateUser(req.user.id, { password });
        res.sendSuccess(response);
      } catch (error) {
        console.log("error");
        res.sendServerError(error);
      }
    });

    this.post("/validate-token", ["PRIVATE"], async (req, res) => {
      try {
        res.sendSuccess({ valid: true });
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default AuthRouter;
