import axios from 'axios';
import { Theatre } from '../Interfaces/TheatreInterface';
import { Screen } from '../Interfaces/ScreenInterface';

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


export const getAllTheatres = ()=>{
  return apiClient.get('theatres/getAll')
}

export const addNewTheatre = (theatre:Theatre)=>{
  return apiClient.post('theatres/add',theatre)
}

export const editNewTheatre = (theatre:Theatre,id:string)=>{
  return apiClient.post(`theatres/update/${id}`,theatre)
}

export const getAllScreens = ()=>{
  return apiClient.get('screens/getAll')
}

export const addNewScreen = (screen:Screen)=>{
  return apiClient.post(`screens/add`,screen)
}

export const editNewScreen = (screen:Screen,id:string)=>{
  return apiClient.post(`screens/update/${id}`,screen)
}