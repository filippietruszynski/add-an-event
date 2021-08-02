import { render } from "@testing-library/react";

import Main from "../Main";

describe("Main", () => {
  describe("Initial render", () => {
    test("Renders itself", () => {
      render(<Main />);
    });
  });
});
