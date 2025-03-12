import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const host =
  window.location.hostname === "localhost"
    ? API_URL
    : `${window.location.origin}/api`;

export const apiClient = axios.create({
  baseURL: host,
});
