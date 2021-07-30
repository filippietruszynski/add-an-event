import axios from "axios";

import { IRequest } from "./types";

// TODO: Hard-coded url
export const postEvent = (request: IRequest) =>
  axios.post("http://localhost:5000/api/event", request);
