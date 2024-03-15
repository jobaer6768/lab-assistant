import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://lab-assistant-server.vercel.app",
});

// Add a request interceptor to include the token in the headers
axiosPublic.interceptors.request.use(
  (config) => {
    // Get token from session storage
    const token = sessionStorage.getItem("token");
    // If token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
