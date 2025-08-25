import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STUDENT_API_URL, 
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_STUDENT_API_KEY,
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${yourToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
