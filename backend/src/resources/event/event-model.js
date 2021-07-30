import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    eventDate: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("event", eventSchema);
