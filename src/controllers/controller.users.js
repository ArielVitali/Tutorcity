import passport from "passport";
import RouterClass from "../router/router.class.js";
import { getUserById } from "../services/users.service.js";

class UsersRouter extends RouterClass {
  init() {
    this.get("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getUserById(req.params.id);
        return response;
      } catch (error) {}
    });

    this.post(
      "/",
      ["PUBLIC"],
      passport.authenticate("register", { failureRedirect: "/auth/failLogin" }),
      async (req, res) => {
        try {
          res.send({ message: "Usuario registrado" });
        } catch (error) {
          if (error.code === 11000)
            return res.status(400).json({ error: "User already exists" });
          res.status(500).json({ error: "Internal server error" });
        }
      }
    );

    this.get("/failRegister", ["PUBLIC"], (req, res) => {
      res.send({ error: "Signup failed" });
    });
  }
}

export default UsersRouter;
