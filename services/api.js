import axios from "axios";

export const api = axios.create({
  baseURL: "https://site-backend-jw1r.onrender.com/",
});

export const sendMailAdmin = {
  sendMailAdmin: async (payload) => await api.post("/mail", payload),
};