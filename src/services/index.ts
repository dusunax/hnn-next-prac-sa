import axios from "axios";
import { API_URL } from "@/constants/server";
import { getToken } from "@/utils/storageToken";

export const CLIENT = axios.create({
  baseURL: API_URL,
});

CLIENT.interceptors.request.use((config) => {
  const appToken = getToken();
  if (appToken) {
    config.headers.Authorization = `Bearer ${appToken}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});
