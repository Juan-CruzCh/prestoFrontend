import axios from "axios";
console.log(import.meta.env.VITE_API_BACKEND);

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BACKEND}/api/`,
  headers: {
    "Content-Type": "application/json",

  },
  withCredentials: true,
});