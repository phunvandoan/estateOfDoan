import axios from "axios";

const apiRequest = axios.create({
  baseURL: `${import.meta.env.BACKEND_PORT}/api`,
  withCredentials: true,
});

export default apiRequest;
