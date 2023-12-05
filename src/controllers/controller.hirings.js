import RouterClass from "../router/router.class.js";
import {
  createHiring,
  getHiringsByServiceId,
  getHiringsByUserId,
  removeHiring,
  updateHiring,
} from "../services/hirings.service.js";

class HiringRouter extends RouterClass {
  init() {
    this.get("/user", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getHiringsByUserId(req.user.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/:serviceId", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getHiringsByServiceId(req.params.serviceId);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.post("/:serviceId", ["PUBLIC"], async (req, res) => {
      try {
        const response = await createHiring(req.params.serviceId, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.patch("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updateHiring(req.params.id, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.delete("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = removeHiring(req.params.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });
  }
}

export default HiringRouter;
