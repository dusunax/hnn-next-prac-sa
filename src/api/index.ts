import axios from "axios";

import { API_URL } from "@/constants/api";

export const CLIENT = axios.create({
  baseURL: API_URL,
  responseType: "json",
});
