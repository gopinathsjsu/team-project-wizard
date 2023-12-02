import React,{forwardRef} from 'react'
import { Button, Container, Flex, Text, Tooltip } from '@mantine/core';
import { Theatre } from '../../../../Interfaces/TheatreInterface';
import { IconInfoCircle } from '@tabler/icons-react';
import { Showtime } from '../../../../Interfaces/ShowTimeInterface';
import { convertTo12HourFormat } from '../../../../utils/Date';

interface DisplayShowsProps {
  theatres: Theatre[]
}


const DisplayShows: React.FC<DisplayShowsProps> = ({theatres}) => {

  // normalized theatre array based on on show time
  const theatresArray = theatres.map((theatre)=>{
      let showsArray: Showtime[] = [];
      theatre.screens.map((screen)=>{
      showsArray = screen.showtimes.map((showtime)=>{
        return {
        ...showtime, 
        screenType: screen.screenType,
        screenName: screen.screenName,
        isActive: screen.isActive
      }});
    })
    showsArray.sort((a: Showtime, b: Showtime) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
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
                  <button className={`secondry-button ${show.isActive? "success":"disabled"}`}>
                    <Text size="sm">{convertTo12HourFormat(show.startTime)}</Text>
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