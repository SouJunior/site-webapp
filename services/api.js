import axios from "axios";

const http = axios.create({
  baseURL: "https://site-backend-67zq.onrender.com",
});

export const api = {
  sendMailAdmin: (endpoint, payload) => http.post(endpoint, payload),
};
