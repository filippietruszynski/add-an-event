import mongoose from "mongoose";

export const connect = (url = process.env.DB_URI_DEV, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
