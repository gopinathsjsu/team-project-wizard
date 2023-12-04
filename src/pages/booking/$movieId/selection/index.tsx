import BaseLayout from '../../../../Components/Layouts/BaseLayout'
import SeatMatrix from '../../../../Components/Booking';
import { useState } from 'react';
import { Seats } from '../../../../Interfaces/SeatInterface';
import SeatDrawer from './SeatDrawer';
import { useLocalStorage } from '@mantine/hooks';
import { User } from '../../../../Interfaces/UserInterface';


function MovieDetail() {

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
  const [user, setUserData] = useLocalStorage<User>({key: "userData"});

  const handleSeatClick = (rowKey: string, colIndex: number) => {
    const updatedSeats = { ...seats };
    const seat = updatedSeats[rowKey][colIndex];
    if (seat.isAvailable) {
      seat.isSelected = !seat.isSelected;
      setSeats(updatedSeats);
    }
  };

  return (
    <BaseLayout>
      <SeatMatrix seats={seats} handleSeatClick={handleSeatClick}/>
      <SeatDrawer seats={seats} price={18} user={user}/>
    </BaseLayout>
  )
}

export default MovieDetail;