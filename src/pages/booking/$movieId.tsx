import React, { useState, useEffect } from 'react'
import BaseLayout from '../../Components/Layouts/BaseLayout'
import MovieCard from '../../Components/Booking/ListShows/MovieCard';
import { useParams } from 'react-router-dom';
import { Movie } from '../../Components/Movie/MovieInterface';
import {getMovie} from "../../api/moviesApi";
import Loading from '../../Components/Loading';

function MovieDetail() {
  const {movieid} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<Movie>({title:"", _id:"", posterUrl: "", genres: []});
    useEffect(() => {
        getMovie(movieid)
        .then(response => {
          setMovie(response.data.movie);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    }, []);
  return (
    <BaseLayout>
      {isLoading ? <Loading/> : 
        <>
          <MovieCard {...movie} />
        </>
      }
      
    </BaseLayout>
  )
}

export default MovieDetail;

