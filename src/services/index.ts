import axios from "axios";

import { API_URL } from "@/constants/server";

export const CLIENT = axios.create({
  baseURL: API_URL,
  responseType: "json",
});
