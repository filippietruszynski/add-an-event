import { Router } from "express";

import controllers from "./event-controllers";
import validateEvent from "./event-validator";

const router = Router();

router.route("/").post(validateEvent, controllers.createDocument);

export default router;
