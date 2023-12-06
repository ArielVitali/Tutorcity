import UsersRouter from "../controllers/controller.users.js";
import ServiceRouter from "../controllers/controller.services.js";
import HiringRouter from "../controllers/controller.hirings.js";
import CommentRouter from "../controllers/controller.comments.js";
import AuthRouter from "../controllers/controller.auth.js";
import UploadsRouter from "../controllers/controller.uploads.js";
import CategoryRouter from "../controllers/controller.categories.js";

const usersRouter = new UsersRouter();
const serviceRouter = new ServiceRouter();
const hiringRouter = new HiringRouter();
const commentRouter = new CommentRouter();
const authRouter = new AuthRouter();
const uploadsRouter = new UploadsRouter();
const categoryRouter = new CategoryRouter();

const router = (app) => {
  app.use("/api/users", usersRouter.getRouter());
  app.use("/api/services", serviceRouter.getRouter());
  app.use("/api/hirings", hiringRouter.getRouter());
  app.use("/api/comments", commentRouter.getRouter());
  app.use("/api/auth", authRouter.getRouter());
  app.use("/api/uploads", uploadsRouter.getRouter());
  app.use("/api/categories", categoryRouter.getRouter());
};

export default router;
