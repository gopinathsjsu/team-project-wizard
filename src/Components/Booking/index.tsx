import React, { useState } from 'react';
import { Button, Container, Flex } from '@mantine/core';
import { Seats } from '../../Interfaces/SeatInterface';

const SeatMatrix: React.FC = () => {
  const [seats, setSeats] = useState<Seats>({
    "A": [
      {"col": "1", "isAvailable": false, "isSelected": false},
      {"col": "2", "isAvailable": true, "isSelected": false},
      {"col": "3", "isAvailable": true, "isSelected": false},
      {"col": "4", "isAvailable": true, "isSelected": false},
      {"col": "5", "isAvailable": true, "isSelected": false},
      {"col": "6", "isAvailable": true, "isSelected": false},
      {"col": "7", "isAvailable": true, "isSelected": false},
      {"col": "8", "isAvailable": true, "isSelected": false},
      {"col": "9", "isAvailable": true, "isSelected": false},
      {"col": "10", "isAvailable": true, "isSelected": false},
      {"col": "11", "isAvailable": true, "isSelected": false},
      {"col": "12", "isAvailable": true, "isSelected": false}
    ],
    "B": [
      {"col": "1", "isAvailable": true, "isSelected": false},
      {"col": "2", "isAvailable": true, "isSelected": false},
      {"col": "3", "isAvailable": true, "isSelected": false},
      {"col": "4", "isAvailable": true, "isSelected": false},
      {"col": "5", "isAvailable": true, "isSelected": false},
      {"col": "6", "isAvailable": true, "isSelected": false},
      {"col": "7", "isAvailable": true, "isSelected": false},
      {"col": "8", "isAvailable": true, "isSelected": false},
      {"col": "9", "isAvailable": true, "isSelected": false},
      {"col": "10", "isAvailable": true, "isSelected": false},
      {"col": "11", "isAvailable": true, "isSelected": false},
      {"col": "12", "isAvailable": true, "isSelected": false}
    ]
  });

  const handleSeatClick = (rowKey: string, colIndex: number) => {
    const updatedSeats = { ...seats };
    const seat = updatedSeats[rowKey][colIndex];
    if (seat.isAvailable) {
      seat.isSelected = !seat.isSelected;
      setSeats(updatedSeats);
    }
  };

  return (
    <Container p="lg">
      
      <Flex direction="column">
        {Object.keys(seats).map((rowKey) => (
          <div key={rowKey} style={{ display: 'flex', marginBottom: '10px', justifyContent: "center" }}>
            {seats[rowKey].map((seat, index) => (
              <Button
                key={seat.col}
                color={seat.isSelected ? 'green' : seat.isAvailable ? 'blue' : 'grey'}
                onClick={() => handleSeatClick(rowKey, index)}
                // style={{ marginRight: '5px' } : { marginRight: "40px" }}
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