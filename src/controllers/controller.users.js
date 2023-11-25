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
  }
}

export default UsersRouter;
