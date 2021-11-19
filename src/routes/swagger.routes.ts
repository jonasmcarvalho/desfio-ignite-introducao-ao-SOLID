import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../swagger.json";

const swaggerRoute = Router();

swaggerRoute.use("/", swaggerUi.serve);
swaggerRoute.get("/", swaggerUi.setup(swaggerFile));

export { swaggerRoute };
