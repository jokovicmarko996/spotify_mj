import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "/api",
});

// import.meta.env.MODE gives you access to the current mode your Vite app is running in. The mode determines which .env files are loaded and is typically one of:
// "development" – when running vite or vite dev
// "production" – when running vite build
// "test" – (if you run tests with a mode)
