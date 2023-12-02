import { Button, Container, Flex } from '@mantine/core';
import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const daysToShow = 7; // Number of days to display
  const [selectedDate, setSelectedDate] = useState(currentDate);
  
  // Generates an array of dates starting from the current date
  const upcomingDates = Array.from({ length: daysToShow }, (_, index) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + index);
    return newDate;
  });

  // Formats the date into Day, Date, Month format
  const formatDate = (date: Date) => {
    return `${date.toLocaleDateString('en-US', { weekday: 'short' })}\n${date.getDate()}\n${date.toLocaleDateString('en-US', { month: 'short' })}`;
  };

  return (
    <Container  px={0} mt={"md"}>
    <Flex style={{ overflowX: 'auto' }}>
      {upcomingDates.map((date, index) => (
        <Flex 
          key={index} 
          style={{ margin: '5px', whiteSpace: 'pre-line' }} 
          className={`makePointer change-on-hover ${date.getDate()===selectedDate.getDate() ? "fill" : ""}`}
          onClick={()=>setSelectedDate(date)}>
          {formatDate(date)}
        </Flex>
      ))}
    </Flex>
    </Container>
  );
};

export default Calendar;