import axios from "axios";

// TODO: Hard-coded port & url
const PORT = "5000";

const axiosInstance = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
});

export default axiosInstance;
