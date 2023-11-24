import UsersRouter from "../controllers/controller.users.js";
import ServiceRouter from "../controllers/controller.services.js";
import HiringRouter from "../controllers/controller.hirings.js";
import CommentRouter from "../controllers/controller.comments.js";

const usersRouter = new UsersRouter();
const serviceRouter = new ServiceRouter();
const hiringRouter = new HiringRouter();
const commentRouter = new CommentRouter();

const router = (app) => {
  app.use("/users", usersRouter.getRouter());
  app.use("/services", serviceRouter.getRouter());
  app.use("/hirings", hiringRouter.getRouter());
  app.use("/comments", commentRouter.getRouter());
};

export default router;
