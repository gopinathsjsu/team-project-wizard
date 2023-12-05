import { useState, useEffect } from 'react'
import MovieBanner from './MovieBanner/index';
import { Movie } from '../../Interfaces/MovieInterface';
import { getAllMovies } from '../../api/moviesApi';
import { Center, Container, Flex, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import MembershipBanner from './MembershipBanner';
import { useLocalStorage } from "@mantine/hooks";
import { User } from '../../Interfaces/UserInterface';
import { useParams } from 'react-router-dom';


const MovieListing = () => {

  const {moviedetail} = useParams()

  const [user, setUser] = useLocalStorage<User>({key:'userData'})
  const [movies, setMovies] = useState<Movie[]>([]);


  useEffect(() => {
    getAllMovies()
      .then(response => {
        console.log("Getting Movies ", response.data)
        setMovies(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const movieList = [
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    },
    {
      "screenId": [],
      "_id": "6567729c28c468628d7bd85b",
      "movieId": "287421m7blpk17n4s",
      "title": "RRR",
      "cast": [
        "Ram Charan",
        "NTR",
        "Alia Bhatt",
        "Shriya Saran"
      ],
      "crew": [
        "Rajamouli",
        "DVV"
      ],
      "description": "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.",
      "format": "IMAX",
      "genres": [
        "Action",
        "Adventure",
        "Superhero",
        "Drama"
      ],
      "languages": [
        "Telugu",
        "Hindi",
        "Tamil",
        "Kannada",
        "Malayalam",
        "English",
        "Japanese"
      ],
      "runTime": 182,
      "rating": 9,
      "movieTrailerUrl": "https://www.youtube.com/watch?v=xo1P2sQdhC0",
      "releaseDate": "2022-03-24T00:00:00.000Z",
      "ticketPrice": 25,
      "ticketsSold": 1000000,
      "posterUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvgDcYi5ux-HI__DXXFScylyswVeu0DfMC7owmTYfei9kOtZP2",
      "certificate": "U/A",
      "popularity": 99,
      "isActive": true,
      "createdAt": "2023-11-29T17:19:24.132Z",
      "updatedAt": "2023-11-29T17:57:40.950Z",
      "__v": 0
    }
  ];
  return (
    <Flex direction="column" align="center">
      <Container w="760px">
        <Text mr="lg" mb="sm" mt="md" w={"100%"} fw={"bold"} size="24px" ta="start">Now Showing!</Text>
      </Container>
      <Carousel
        withIndicators
        slideSize={{ base: '100%', sm: '50%', md: '20%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        align="start"
        slidesToScroll={10}
        maw={760}
      >
        {movies.map((movie) => (
          <Carousel.Slide><MovieBanner {...movie} key={movie._id} /></Carousel.Slide>
        ))}
      </Carousel>
      <MembershipBanner user={user}/>
      <Container w="760px">
        <Text mr="lg" mb="sm" mt="md" w={"100%"} fw={"bold"} size="24px" ta="start" c="gray">Upcoming Movies</Text>
      </Container>
      <Carousel
        withIndicators
        slideSize={{ base: '100%', sm: '50%', md: '20%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        align="start"
        slidesToScroll={10}
        maw={760}
      >
        {movies.map((movie) => (
          <Carousel.Slide><MovieBanner {...movie} key={movie._id} upcoming /></Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  )
}

export default MovieListing;