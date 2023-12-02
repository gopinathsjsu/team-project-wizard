import React, {useState, useEffect} from 'react'
import MovieBanner from './MovieBanner/index';
import { Movie } from './MovieInterface';
import { getAllMovies } from '../../api/moviesApi';
import { Flex } from '@mantine/core';

const MovieListing = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getAllMovies()
      .then(response => {
        setMovies(response.data.movies);
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
    <Flex 
      style={{ maxWidth: 1240, margin: 'auto' }} 
      gap="md"
      justify="center"
      align="flex-start"
      direction="row"
      wrap="wrap">
        { movies.map((movie) =>(
              <MovieBanner {...movie} key={movie._id}/>
        ))}
    </Flex>
  )
}

export default MovieListing