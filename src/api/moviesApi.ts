import axios from 'axios';
import { Theatre } from '../Interfaces/TheatreInterface';
import { Screen } from '../Interfaces/ScreenInterface';
import { Showtime } from '../Interfaces/ShowTimeInterface';
import { LoginUser, NewUser } from '../Interfaces/OnboardingInterface';

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


export const addNewShowTime = (showTime:Showtime)=>{
  return apiClient.post(`showTimes/add`,showTime)
}

export const updateShowTime = (showTime:Showtime,id:string)=>{
  return apiClient.post(`showTimes/update/${id}`,showTime)
}

export const getAllShowTimes = ()=>{
  return apiClient.get('showTimes/getAll')
}

export const signupUser = (signupData: NewUser)=>{
  return apiClient.post(`user/signup`,signupData);
}

export const loginUser = (loginData: LoginUser)=>{
  return apiClient.post(`user/login`,loginData);
}

export const getScreenBooking = (screenId: string) =>{
  return apiClient.get(`screens/get/${screenId}`)
}

export const bookTicket = (payment: string) =>{
  return apiClient.post('tickets/book', payment);
}