import crudControllers from "../event-controllers";

import { isFunction } from "../../../utils/helpers";

describe("Event controllers", () => {
  test("Has CRUD controllers", () => {
    const methods = ["createDocument"];

    methods.forEach((name) =>
      expect(isFunction(crudControllers[name])).toBe(true)
    );
  });
});
