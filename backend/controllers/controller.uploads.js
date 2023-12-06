import RouterClass from "../router/router.class.js";
import { uploadImage } from "../services/fileUpload.service.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

class UploadsRouter extends RouterClass {
  init() {
    this.post("/", upload.single("file"), async (req, res) => {
      try {
        const resposne = await uploadImage(req.file.buffer);
        res.sendSuccess(resposne);
      } catch (error) {
        res.sendServerError(`something went wrong ${error}`);
      }
    });
  }
}

export default UploadsRouter;
