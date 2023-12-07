import { useState, useEffect } from 'react'
import BaseLayout from '../../Components/Layouts/BaseLayout'
import MovieDescription from '../../Components/Movie/MovieDescription';
import { useParams } from 'react-router-dom';
import { Movie } from '../../Interfaces/MovieInterface';
import {getMovie} from "../../api/moviesApi";
import YouTubeVideoEmbed from '../../Components/Video';
import Loading from '../../Components/Loading';
import { Center, Text, Flex, Group, Image, Spoiler, Stack, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

function MovieDetail() {
  const {moviedetail} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<Movie>({title:"", _id:"", posterUrl: "", genres: []});
    
    const cast = ["https://pbs.twimg.com/profile_images/1653105772136390667/7CqRRhOA_400x400.jpg","https://pbs.twimg.com/profile_images/1634904704772890624/D-BtE-Fy_400x400.jpg","https://pbs.twimg.com/profile_images/1707670344654626816/1D9u5YrV_400x400.jpg", "https://pbs.twimg.com/profile_images/1011605600600354816/79-x6S9u_400x400.jpg"]
    
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
          <Center mt="lg" px={"sm"}>
            <Stack>
              <Stack maw={"760px"}>
                <Title order={2}>About The Movie!</Title>
                <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">{movie.description}</Spoiler>
              </Stack>
              <Title order={2}>The Best is the Cast</Title>
              <Group gap={"sm"} w="70%">
                {movie?.cast?.map((member, index)=>(
                  <Stack align="center">
                    <Image w={"100px"} radius="50%" src={cast[(index%4)]} h="50px" />
                    <Text maw="130px" truncate="end">{member}</Text>
                  </Stack>
                ))}
              </Group>
            </Stack>
          </Center>          
        </>
      }
      
    </BaseLayout>
  )
}

export default MovieDetail;

