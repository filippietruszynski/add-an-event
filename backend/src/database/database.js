import mongoose from "mongoose";

// TODO: hard-coded URI
export const connect = (url = process.env.DB_URI, opts = {}) => {
  return mongoose.connect(
    "mongodb+srv://recruitment-task:393LmN5DZQLhQZ8x@recruitment-task.2fdxb.mongodb.net/recruitment-task-dev?retryWrites=true&w=majority",
    { ...opts, useNewUrlParser: true }
  );
};
