import React from 'react';
import { Card, Text, Group, Button, Badge, Image, Center, CopyButton } from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';
import { cancelBooking, getUser } from '../../api/moviesApi';
import { useLocalStorage } from '@mantine/hooks';
import { User } from '../../Interfaces/UserInterface';


interface TicketProps {
    showTime: string;
    bookingDate: string;
    totalCost: number;
    numberOfSeats: number;
    seats: string; // This should be parsed accordingly
    qrCodeUrl?: string; // URL for the QR code image
    allowCancel?: boolean,
    transactionId?: string,
    userId?: string
}

const SingleTicket: React.FC<TicketProps> = ({ showTime, bookingDate, totalCost, numberOfSeats, seats, qrCodeUrl, allowCancel, transactionId="", userId }) => {
    // Function to copy ticket details to clipboard
    const [user, setUser]= useLocalStorage<User>({key: 'userData'});
    
    function getSelectedSeats() {
        // Parse the JSON string
        const seatsObj = JSON.parse(seats);
        const selectedSeats:any = [];
    
        for (const row in seatsObj) {
            // Iterate through each seat in the row
            seatsObj[row].forEach((seat: { isSelected: boolean; col: number; }) => {
                selectedSeats.push(`${row}${seat.col}`);
            });
        }
    
        return selectedSeats.join(', ');
    }

    const handleCancellation = async () =>{
        try{
            const response = await cancelBooking({transactionId: transactionId});
            const userResponse = await getUser(userId|| "");
            setUser(userResponse?.data?.data[0]);
        }catch(error){
            console.log(error);
        }

    }

    return (
        <Center>
            <Card mt="md" shadow="sm" padding="lg" w={"300"}>
                <Group justify="space-between" style={{ marginBottom: 5 }}>
                    <Text fw={500}>Movie Ticket</Text>
                    <CopyButton value={window.location.href}>
                        {({ copied, copy }) => (
                            <Button color={copied ? 'teal' : 'default'} onClick={copy} variant={"outline"}>
                             <IconCopy/>
                            </Button>
                        )}
                    </CopyButton>

                </Group>
                <Text size="sm">Show Time: {new Date(showTime).toLocaleString()}</Text>
                <Text size="sm">Booking Date: {new Date(bookingDate).toLocaleString()}</Text>
                <Text size="sm">Total Cost: ${totalCost}</Text>
                <Text size="sm">Number of Seats: {numberOfSeats}</Text>
                <Text size="sm">Seats: {getSelectedSeats()}</Text>
                <Badge color="pink" variant="light" mt={"md"}>
                    Enjoy your movie!
                </Badge>
                { qrCodeUrl && <Image src={qrCodeUrl} alt="QR Code" width={100} height={100} />}
                { allowCancel && <Button mt="md" variant="light" onClick={handleCancellation} >Cancel Booking</Button>}
            </Card>
        </Center>
    );
};

export default SingleTicket;
