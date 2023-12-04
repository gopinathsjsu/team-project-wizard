import { Drawer, Container, Highlight, Divider, Button, Text, Anchor, Center } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Seats } from "../../../../../Interfaces/SeatInterface";
import { User } from "../../../../../Interfaces/UserInterface";
import { IconQuestionMark } from "@tabler/icons-react";

interface seatMatrixProps {
  seats: Seats,
  price: number,
  user: User | undefined
}
  
const SeatDrawer: React.FC<seatMatrixProps> = ({seats, price, user})=> {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedSeats, setSelectedSeats] = useState<Seats>({});
  const [totalSeats, setTotalSeats] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const getTotal =(noOfSeats: number, price:number, membershipType: string | undefined ) =>{
    const basicCosts = noOfSeats*price;
    const serviceFees = membershipType==="regular" ? 1.5 : 0;
    console.log(basicCosts + ' + '+ serviceFees);
    return basicCosts + serviceFees;
  }
  const getSelectedSeats = () =>{
    let newTotalSeats =0
    let newSelectedSeats = { ...selectedSeats };
    for (const rowKey in seats) {
      seats[rowKey].forEach((seat) => {
        console.log("Seat Is Selected ", rowKey, seat);
        if (seat.isSelected) {
          if (!newSelectedSeats[rowKey]) {
            newSelectedSeats[rowKey] = [];
          }
          newSelectedSeats[rowKey].push(seat);
          newTotalSeats+=1;
        }
      });
    }
    setSelectedSeats(newSelectedSeats);
    setTotalSeats(newTotalSeats);
    console.log("This is the total ", getTotal(newTotalSeats, price, user?.memberShipType));
    setGrandTotal(getTotal(newTotalSeats, price, user?.memberShipType));
    console.log(newSelectedSeats);
  }

  return (
    <>
      <Drawer.Root opened={opened} onClose={()=>{close(); setSelectedSeats({})}} position="bottom">
      <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Book Your Tickets</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            {totalSeats === 0 ? <Text>Book your favourite seats!</Text> :<>
            <Text size="lg">Here Are your chosen Seats:</Text>
              <Container ta="center">
                {Object.keys(selectedSeats).map((rowKey) => (
                  <Highlight key={rowKey} highlight={`Row ${rowKey}`} fw={500}>
                    {`Row ${rowKey}: ${selectedSeats[rowKey].map(seat => seat.col).join(', ')}`}
                  </Highlight>
                ))}
                <Divider my="sm" variant="dashed" />
              </Container>
              <Text size="lg">We give you the best deal:</Text>
              <Container ta="center">
                <Text>Seats: {totalSeats}*$18 = ${totalSeats*18}</Text>
                <Text td={user?.memberShipType ==="premium" ? "line-through" : ""}>Online Service Fee = ${1.5}</Text>
                <Text>Total =  ${grandTotal}</Text>
                {user?.memberShipType ==="premium" ? <Text>You just got your service Fees Waiver Off!</Text> : 
                <>
                  <Text>Become a member to get offers on your service fees</Text>
                  <Anchor href="https://mantine.dev/" target="_blank" td="underline">Learn More</Anchor> 
                  {/* TO DO : Link learn more to get membership page */}
                </>}
            </Container>
            </>}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <Center>
        <Button onClick={()=>{
          getSelectedSeats();
          open()
        }}>Open drawer</Button>
      </Center>
    </>
  );
}

export default SeatDrawer;