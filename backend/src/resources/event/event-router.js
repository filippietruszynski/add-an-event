import { Router } from "express";

import controllers from "./event-controllers";
import validateEvent from "./event-validator";

const eventRouter = Router();

eventRouter.route("/").post(validateEvent, controllers.createDocument);

export default eventRouter;
