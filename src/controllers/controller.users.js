import RouterClass from "../router/router.class.js";

class UsersRouter extends RouterClass {
  init() {
    this.get("/", []);
  }
}

export default UsersRouter;
