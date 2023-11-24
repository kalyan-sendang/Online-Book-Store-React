import axios from "axios"
export const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  });
