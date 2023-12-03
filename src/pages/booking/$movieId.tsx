import React, { useState, useEffect } from 'react'
import BaseLayout from '../../Components/Layouts/BaseLayout'
import MovieHeader from '../../Components/Booking/ListShows/MovieCard';
import { useParams } from 'react-router-dom';
import { Movie } from '../../Interfaces/MovieInterface';
import {getMovie} from "../../api/moviesApi";
import Loading from '../../Components/Loading';
import Calendar from '../../Components/Booking/ListShows/Calendar';
import DisplayShows from '../../Components/Booking/ListShows/DisplayShows';
import { Theatre } from '../../Interfaces/TheatreInterface';


function MovieDetail() {
  const currentDate = new Date();
  const {movieid} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState(currentDate);
  const [movie, setMovie] = useState<Movie>({title:"", _id:"", posterUrl: "", genres: []});
  const [theatres, setTheatres] = useState<Theatre[]>(defaultTheatres);

  useEffect(() => {
      getMovie(movieid)
      .then(response => {
        setMovie(response.data.data.movie);
        setTheatres(response.data.data.theatres);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleBooking = (newBookingDate: Date) =>{
      setBookingDate(newBookingDate);
  }
  return (
    <BaseLayout>
      {isLoading ? <Loading/> : 
        <>
          <MovieHeader {...movie} />
          <Calendar currentDate={currentDate}  handleBooking={handleBooking} />
          <DisplayShows theatres={theatres}/>
        </>
      }
      
    </BaseLayout>
  )
}

export default MovieDetail;

var defaultTheatres: Theatre[] = [{
  _id: "",
  theatreName: "",
  description: "",
  location: "",
  state: "",
  address: "",
  zip: 0,
  contact: 0,
  city: "",
  theatreUrl: "",
  isActive: false,
  createdAt: "",
  updatedAt: "",
  __v: 0,
  screens: []
}];