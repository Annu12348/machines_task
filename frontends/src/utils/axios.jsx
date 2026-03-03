import axios from "axios";

// Use environment variable if available, otherwise fallback to localhost for development
const API_URL =
  (import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/api/admin`
    : "http://localhost:5000/api/admin"
  );

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Send cookies (for auth)
});

export default instance;
