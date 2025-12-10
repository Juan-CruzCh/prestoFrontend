import axios from "axios"
export const instanceAxios = axios.create({
    baseURL: "http://localhost:5000/api/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});
