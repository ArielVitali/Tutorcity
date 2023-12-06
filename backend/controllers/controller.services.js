import RouterClass from "../router/router.class.js";
import {
  createNewService,
  updateService,
  removeService,
  getServices,
  getServicesByUserId,
  getServiceById,
} from "../services/services.service.js";

class ServiceRouter extends RouterClass {
  init() {
    this.get("/", ["PUBLIC"], async (req, res) => {
      try {
        const response = await getServices(req.query);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/user", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getServicesByUserId(req.user.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/:id", ["PUBLIC"], async (req, res) => {
      try {
        const response = await getServiceById(req.params.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.post("/", ["PRIVATE"], async (req, res) => {
      try {
        const response = await createNewService(req.user.id, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.patch("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updateService(req.params.id, req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.delete("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await removeService(req.params.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });
  }
}

export default ServiceRouter;
