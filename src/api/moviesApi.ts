import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json'
    }
});
  

export const getAllMovies = () => {
    console.log("This is the backend URL ", import.meta.env.VITE_BACKEND_URL);
  return apiClient.get('movies/getAll');
};
