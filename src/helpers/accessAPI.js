import axios from "axios";

const API_URL = "http://192.168.42.234:3001/api/items";
export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});
