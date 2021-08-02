import { render } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  describe("Initial render", () => {
    test("Renders itself", () => {
      render(<App />);
    });
  });
});
