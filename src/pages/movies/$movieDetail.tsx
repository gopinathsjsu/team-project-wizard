import { useState, useEffect } from 'react'
import BaseLayout from '../../Components/Layouts/BaseLayout'
import MovieDescription from '../../Components/Movie/MovieDescription';
import { useParams } from 'react-router-dom';
import { Movie } from '../../Interfaces/MovieInterface';
import {getMovie} from "../../api/moviesApi";
import YouTubeVideoEmbed from '../../Components/Video';
import Loading from '../../Components/Loading';

function MovieDetail() {
  const {moviedetail} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<Movie>({title:"", _id:"", posterUrl: "", genres: []});
    useEffect(() => {
        getMovie(moviedetail)
        .then(response => {
          setMovie(response.data.data.movie);
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
          <YouTubeVideoEmbed movieTrailerUrl={movie.movieTrailerUrl} />
          <MovieDescription {...movie} />
        </>
      }
      
    </BaseLayout>
  )
}

export default MovieDetail;

