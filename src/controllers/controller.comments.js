import RouterClass from "../router/router.class";
import {
  getCommentsByServiceId,
  createNewComment,
  updateComment,
  removeComment,
} from "../services/comments.service.js";

class CommentRouter extends RouterClass {
  init() {
    this.get("/:serviceId", ["PUBLIC"], async (req, res) => {
      try {
        const response = getCommentsByServiceId(req.params.serviceId);
        return response;
      } catch (error) {
        //
      }
    });

    this.post("/:serviceId", ["PUBLIC"], async (req, res) => {
      try {
        const response = createNewComment(req.params.serviceId, req.body);
        return response;
      } catch (error) {}
    });

    this.patch("/:commentId", ["PRIVATE"], async (req, res) => {
      try {
        const response = updateComment(req.params.commentId, req.body);
      } catch (error) {}
    });

    this.delete("/:commentId", ["PRIVATE"], async (req, res) => {
      try {
        const response = removeComment(req.params.commentId);
      } catch (error) {}
    });
  }
}

export default CommentRouter;
