import axios from "axios";
import { API_URL } from "@/constants/server";

// Access-Control-Allow-Origin => CORS
export const CLIENT = axios.create({
  baseURL: API_URL,
});
