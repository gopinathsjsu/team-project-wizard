import React,{forwardRef} from 'react'
import { Button, Container, Flex, Text, Tooltip } from '@mantine/core';
import { Theatre } from '../../../../Interfaces/TheatreInterface';
import { IconInfoCircle } from '@tabler/icons-react';
import { Showtime } from '../../../../Interfaces/ShowTimeInterface';
import { convertTo12HourFormat } from '../../../../utils/Date';
import { useNavigate } from 'react-router-dom';
interface DisplayShowsProps {
  theatres: Theatre[]
}


const DisplayShows: React.FC<DisplayShowsProps> = ({theatres}) => {
  const navigator = useNavigate();
  const handleNavigation = (movieId: string, showId: string, screenId: string) => {
    navigator(`/booking/${movieId}/selection?showId=${showId}&screenId=${screenId}`);
};
  // normalized theatre array based on on show time
  const theatresArray = theatres.map((theatre)=>{
      let showsArray: Showtime[] = [];
      theatre.screens.map((screen)=>{
      let tempShowsArray = screen.showtimes.map((showtime)=>{
        return {
        ...showtime, 
        screenType: screen.screenType,
        screenName: screen.screenName,
        isActive: screen.isActive
      }});
      showsArray = showsArray.concat(tempShowsArray);
    })
    console.log("This is the shows array ",showsArray);
    showsArray.sort((a: Showtime, b: Showtime) => {
      const dateA = a.startTime ? new Date(a.startTime) : new Date();
      const dateB = b.startTime ? new Date(b.startTime) : new Date();
  
      return dateA.getTime() - dateB.getTime();
  });
    const theatreEntry = {...theatre, shows: showsArray};
    console.log(theatreEntry);
    return theatreEntry;
  });
  
  return (
    <Container mt={"lg"} bg="#f2f2f2" pr="sm" pl="sm" pt="xs" pb="xs">
      <Container bg="#ffffff">
        {theatresArray && theatresArray.map((theatre)=>(
          <Flex direction="column" gap="sm" >
            <Flex gap="30px">
              <Text fw={700}>{theatre?.theatreName}</Text>
                <IconInfoCircle size="20px"></IconInfoCircle>
            </Flex>
            <Flex direction={"row"} gap="md" align="center" mb="sm">
              {theatre.shows.map((show)=>(
                <Tooltip label={`$ ${show.price}`} transitionProps={{ transition: 'skew-down', duration: 400 }}>
                  <button
                    onClick={()=>handleNavigation(show.movieId, show._id, show.screenId)}
                    className={`secondry-button makePointer 
                    ${show.isActive? "success":"disabled"}`}>
                    <Text size="sm">{convertTo12HourFormat(show.startTime|| "")}</Text>
                    {show.screenType==="IMAX" && <Text size="xs">IMAX</Text>}
                  </button>
                </Tooltip>
              ))}
            </Flex>
          </Flex>
          ))
        }
      </Container>
    </Container>
  )
}

export default DisplayShows;