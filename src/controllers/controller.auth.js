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

    this.get("/logout", ["PUBLIC"], (req, res) => {
      try {
        req.session.destroy((err) => {
          if (err) {
            res.json({ msg: err });
          }
          res.redirect("/login");
        });
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });
  }
}

export default AuthRouter;
