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
        const response = await getServices();
        return response;
      } catch (error) {}
    });

    this.get("/:id", ["PUBLIC"], async (req, res) => {
      try {
        const response = getServiceById(req.params.id);
        return response;
      } catch (error) {}
    });

    this.get("/:userId", ["PRIVATE"], async (req, res) => {
      try {
        const response = getServicesByUserId(req.params.userId);
        return response;
      } catch (error) {}
    });

    this.post("/", ["PRIVATE"], async (req, res) => {
      try {
        const response = await createNewService(req.body);
        return response;
      } catch (error) {}
    });

    this.put("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updateService(req.params.id, req.body);
        return response;
      } catch (error) {}
    });

    this.delete("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await removeService(req.params.id);
        return response;
      } catch (error) {}
    });
  }
}

export default ServiceRouter;
