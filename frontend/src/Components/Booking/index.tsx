import React, { useState } from 'react';
import { Button, Container, Flex } from '@mantine/core';
import { Seats } from '../../Interfaces/SeatInterface';
interface seatMatrixProps {
  seats: Seats,
  handleSeatClick: (rowKey: string, index:any) => void
}
const SeatMatrix: React.FC<seatMatrixProps> = ({seats, handleSeatClick}) => {


  return (
    <Container p="lg">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10,50 Q 200,10 390,50" stroke="black" fill="transparent"/>
        </svg>
      </div>

      <Flex direction="column">
        {Object.keys(seats).map((rowKey) => (
          <div key={rowKey} style={{ display: 'flex', marginBottom: '10px', justifyContent: "center" }}>
            {seats[rowKey].map((seat, index) => (
              <Button
                key={seat.col}
                color={seat.isSelected ? 'green' : seat.isAvailable ? 'blue' : 'grey'}
                onClick={() => handleSeatClick(rowKey, index)}
                className={(seat.col==="3" || seat.col=="9") ? "mr40": "mr5"}
              >
                {rowKey}{seat.col}
              </Button>
            ))}
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default SeatMatrix;