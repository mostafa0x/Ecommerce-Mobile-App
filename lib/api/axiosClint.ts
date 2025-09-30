import axios from "axios";

export const axiosClint = axios.create({
  baseURL: "https://fofo-store-back-end.vercel.app",
});
