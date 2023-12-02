import { Container } from '@mantine/core';
import React from 'react'
import { Theatre } from '../../../../Interfaces/TheatreInterface';
interface DisplayShowsProps {
  theatres: Theatre[]
}
const DisplayShows: React.FC<DisplayShowsProps> = 
({  theatres}) => {
  console.log(theatres);
  return (
    <Container mt={"lg"}>
      Hi 
    </Container>
  )
}

export default DisplayShows;