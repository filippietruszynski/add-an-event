import axiosInstance from "./axios";

export interface IPostEventRequest {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

export const postEvent = (request: IPostEventRequest) =>
  axiosInstance.post("/event", request);
