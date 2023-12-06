import RouterClass from "../router/router.class.js";
import {
  getCategories,
  getCategoryById,
  createCategory,
  getCategoryByName,
} from "../services/categories.service.js";

class CategoryRouter extends RouterClass {
  init() {
    this.get("/name/:name", ["PUBLIC"], async (req, res) => {
      try {
        const response = await getCategoryByName(req.params.name);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/id/:id", ["PUBLIC"], async (req, res) => {
      try {
        const response = await getCategoryById(req.params.id);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.get("/", ["PUBLIC"], async (req, res) => {
      try {
        const response = await getCategories();
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });

    this.post("/", ["PRIVATE"], async (req, res) => {
      try {
        const response = await createCategory(req.body);
        res.sendSuccess(response);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });
  }
}

export default CategoryRouter;
