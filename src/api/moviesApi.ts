import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json'
    }
});
  

export const getAllMovies = () => {
  return apiClient.get('movies/getAll');
};

export const getMovie = (_id:string | undefined) => {
  return apiClient.get(`movies/get/${_id}`);
};