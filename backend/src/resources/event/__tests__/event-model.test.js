import { Event } from "../event-model";

describe("Event model", () => {
  describe("Event schema", () => {
    test("Has correct firstName property", () => {
      const firstName = Event.schema.obj.firstName;
      expect(firstName).toEqual({
        type: String,
        required: true,
        trim: true,
      });
    });

    test("Has correct lastName property", () => {
      const lastName = Event.schema.obj.lastName;
      expect(lastName).toEqual({
        type: String,
        required: true,
        trim: true,
      });
    });

    test("Has correct email property", () => {
      const email = Event.schema.obj.email;
      expect(email).toEqual({
        type: String,
        required: true,
        trim: true,
      });
    });

    test("Has correct eventDate property", () => {
      const eventDate = Event.schema.obj.eventDate;
      expect(eventDate).toEqual({
        type: Date,
        required: true,
        trim: true,
      });
    });
  });
});
