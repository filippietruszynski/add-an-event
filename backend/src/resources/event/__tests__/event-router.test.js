import eventRouter from "../event-router";

describe("Event router", () => {
  test("Has CRUD routes", () => {
    const routes = [{ path: "/", method: "post" }];

    routes.forEach((route) => {
      const match = eventRouter.stack.find(
        (stack) =>
          stack.route.path === route.path && stack.route.methods[route.method]
      );
      expect(match).toBeTruthy();
    });
  });
});
