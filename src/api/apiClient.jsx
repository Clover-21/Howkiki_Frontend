import axios from "axios";

const API_LOCAL_URL = process.env.REACT_APP_API_URL;
const API_HTTPS_URL = process.env.REACT_APP_HTTPS_URL;

const host =
  window.location.hostname === "localhost" ? API_LOCAL_URL : API_HTTPS_URL;

export const apiClient = axios.create({
  baseURL: host,
});
