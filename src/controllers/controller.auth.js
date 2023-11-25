import passport from "passport";

class AuthRouter extends RouterClass {
  init() {
    this.post(
      "/",
      ["PUBLIC"],
      passport.authenticate("login", { failureRedirect: "/auth/failLogin" }),
      async (req, res) => {
        try {
          if (!req.user) {
            return res.status(400).json({ error: "Credenciales invalidas" });
          }

          // Generate a JWT token
          const token = jwt.sign(
            { id: req.user.id, email: req.user.email },
            "Codi0goS3creto"
          );

          res.json({ user: req.user, token });
        } catch (error) {}
      }
    );
  }
}

export default AuthRouter;
