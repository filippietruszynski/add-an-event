import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import EventForm from "../EventForm";

describe("EventForm", () => {
  describe("Initial render", () => {
    test("Renders itself", () => {
      render(<EventForm />);
    });

    test("Renders labels", () => {
      const { getByLabelText } = render(<EventForm />);
      expect(getByLabelText(/first name/i)).toBeInTheDocument();
      expect(getByLabelText(/last name/i)).toBeInTheDocument();
      expect(getByLabelText(/email/i)).toBeInTheDocument();
      expect(getByLabelText(/event date/i)).toBeInTheDocument();
    });

    test("Renders button text", () => {
      const { getByText } = render(<EventForm />);
      expect(getByText(/add an event/i)).toBeInTheDocument();
    });
  });
});
