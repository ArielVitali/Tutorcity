import RouterClass from "../router/router.class";
import {
  createHiring,
  getHiringByServiceId,
  getHiringsByUserId,
  removeHiring,
  updateHiring,
} from "../services/hirings.service";

//NO ES UNA BUENA PRACTICA MANDAR TODO EL REQ.BODY, SE DEBERIA DESESTRUCTURAR.

class HiringRouter extends RouterClass {
  init() {
    this.post("/:serviceId", ["PUBLIC"], async (req, res) => {
      try {
        const response = await createHiring(req.params.serviceId, req.body);
        return response;
      } catch (error) {}
    });

    this.get("/:serviceId", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getHiringByServiceId(req.params.serviceId);
        return response;
      } catch (error) {
        throw error;
      }
    });

    this.get("/:userId", ["PRIVATE"], async (req, res) => {
      try {
        const response = await getHiringsByUserId(req.params.userId);
        return response;
      } catch (error) {
        throw error;
      }
    });

    this.patch("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = await updateHiring(req.params.id, req.body);
        return response;
      } catch (error) {}
    });

    this.delete("/:id", ["PRIVATE"], async (req, res) => {
      try {
        const response = removeHiring(req.params.id);
        return response;
      } catch (error) {}
    });
  }
}

export default HiringRouter;
