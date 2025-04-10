import axios from "axios";

export const api = axios.create({
  baseURL: "https://dev-api.soujunior.tech/api",
});

const tempInstance = axios.create({
  baseURL: "/assets/areas.json",
});

export const apiArea = {
  getArea: () => tempInstance.get(),
};

export const sendMailAdmin = {
  sendMailAdmin: async (payload) => await api.post("/mail", payload),
};
