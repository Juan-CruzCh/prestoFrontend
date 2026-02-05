import axios from "axios";
import { HttpStatus } from "../enum/httpSatatus";
export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BACKEND}/api/`,
  headers: {
    "Content-Type": "application/json",

  },
  withCredentials: true,
});


instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response && error.response.status === HttpStatus.FORBIDDEN) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);