import { isFunction } from "lodash";

import crudControllers from "../event-controllers";

describe("Event controllers", () => {
  test("Has CRUD controllers", () => {
    const methods = ["createDocument"];

    methods.forEach((name) =>
      expect(isFunction(crudControllers[name])).toBe(true)
    );
  });
});
