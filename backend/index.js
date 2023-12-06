import { appConfig } from "./config/index.js";
import app from "./server.js";

const { port } = appConfig;

app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});
