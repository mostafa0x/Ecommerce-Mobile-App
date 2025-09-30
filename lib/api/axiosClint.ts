import axios from "axios";

export const axiosClint = axios.create({
  baseURL: "fofo-store-back-end.vercel.app",
});
