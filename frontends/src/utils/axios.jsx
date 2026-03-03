import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/admin`;

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
