import axios from "axios";

export const api = axios.create({
  baseURL: "http://140.245.230.202:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
