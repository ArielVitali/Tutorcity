import passport from "passport";
import RouterClass from "../router/router.class.js";

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
          // res.cookie("token", req.user.token, {
          //   httpOnly: true,
          // });
          res.json({ token: req.user.token });
        } catch (error) {
          res.sendServerError(`something went wrong ${error}`);
        }
      }
    );

    this.post("/passwordReset", ["PUBLIC"], async (req, res) => {
      try {
        const expirationTime = new Date().getTime() + 3600000;
        let linkMold = req.protocol + "://" + req.get("host");
        const url = linkMold + `/passwordReset/${expirationTime}`;
        const email = { email: req.body.user };
        req.session.destroy;
        req.session.expirationTime = expirationTime;
        req.session.email = email;
        const mensaje = {
          message: `<div> <h1>Hola!</h1> <h2>Este es el link para recuperar tu contreseña</h2> <h3> ${url}</h3> </div>`,
          subject: "Recuperacion  de contraseña",
        };
        const emailSend = await correo.sendNotification(email, mensaje);
        console.log(emailSend);
        res.json({ emailSend });
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
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
