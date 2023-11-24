import { config } from "./config";
import app from "./server";

const { port } = config;

app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});
