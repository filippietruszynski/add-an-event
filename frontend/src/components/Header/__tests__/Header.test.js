import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../Header";

describe("Header", () => {
  describe("Initial render", () => {
    test("Renders itself", () => {
      render(<Header />);
    });

    test("Renders app name", () => {
      const { getByText } = render(<Header />);
      expect(getByText(/add an event/i)).toBeInTheDocument();
    });
  });
});
