import { check, validationResult } from "express-validator";

import { EMAIL_REGEX } from "../../utils/helpers";

const validateEvent = [
  check(["firstName", "lastName", "email", "eventDate"])
    .not()
    .isEmpty()
    .withMessage("Is required!")
    .bail()
    .isString()
    .withMessage("Must be a string!")
    .bail(),
  check("email")
    .trim()
    .normalizeEmail()
    .matches(EMAIL_REGEX)
    .withMessage("Email is incorrect!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

export default validateEvent;
