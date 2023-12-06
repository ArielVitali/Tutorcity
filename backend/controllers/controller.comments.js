import RouterClass from "../router/router.class.js";
import {
  getCommentsByServiceId,
  getPendingCommentsByServiceId,
  createNewComment,
  updateComment,
  removeComment,
} from "../services/comments.service.js";

class CommentRouter extends RouterClass {
  init() {
    this.get("/:serviceId", ["PUBLIC"], async (req, res) => {
      try {
        const response = await getCommentsByServiceId(req.params.serviceId);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/pendingComments/:serviceId", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getPendingCommentsByServiceId(
          req.params.serviceId
        );
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/pendingComments/user", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getPendingCommentsByUser(req.user.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.post("/:serviceId", ["PUBLIC"], async (req, res) => {
      try {
        const response = await createNewComment(req.params.serviceId, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.patch("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updateComment(req.params.id, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.delete("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await removeComment(req.params.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });
  }
}

export default CommentRouter;
