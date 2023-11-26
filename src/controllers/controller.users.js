import passport from "passport";
import RouterClass from "../router/router.class.js";
import {
  getUserById,
  updateUser,
  getPublicUserProfile,
  updatedUserProfileImg,
} from "../services/users.service.js";

class UsersRouter extends RouterClass {
  init() {
    this.get("/", ["PRIVATE"], async (req, res) => {
      try {
        const user = await getUserById(req.user.id);
        if (!user) {
          return res.status(404).json({ message: "User not found." });
        }
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.get("/:id", ["PUBLIC"], async (req, res) => {
      try {
        const user = await getUserById(req.user.id);
        if (!user) {
          return res.status(404).json({ message: "User not found." });
        }
        const publicUserData = getPublicUserProfile(user);
        res.sendSuccess(publicUserData);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.post(
      "/",
      ["PUBLIC"],
      passport.authenticate("register", { session: false }),
      async (req, res) => {
        try {
          res.json({ token: req.user.token });
        } catch (error) {
          if (error.code === 11000)
            return res.status(400).json({ error: "User already exists" });
          res.status(500).json({ error: "Internal server error" });
        }
      }
    );

    this.patch("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updateUser(req.params.id, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(error);
      }
    });

    this.patch("/profileImg", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updatedUserProfileImg(req.user.id, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(error);
      }
    });
  }
}

export default UsersRouter;
