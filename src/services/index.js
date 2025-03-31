import axios from "axios";
import createLandlordApi from "./landlordRoutes";
import { baseUrl } from "@/constants/data";

const createBackendServer = (baseURL) => {
  const api = axios.create({
    baseURL: `${baseURL}`,
    headers: {
      Accept: "application/json",
    },
    timeout: 60 * 1000,
  });

  // Request Interceptor to attach the token
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response Interceptor to handle errors
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const message =
        error?.response?.data?.data?.error ||
        "Something went wrong. Please try again.";
      return Promise.reject(message);
    }
  );

  // Combine all routes
  return {
    ...createLandlordApi(api), // Landlord APIs
  };
};

const apis = createBackendServer(baseUrl);

export default apis;
