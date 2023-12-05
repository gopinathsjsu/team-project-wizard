import React from 'react';
import { Card, Text, Group, Button, Badge, Image, Center, CopyButton } from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';


interface TicketProps {
    showTime: string;
    bookingDate: string;
    totalCost: number;
    numberOfSeats: number;
    seats: string; // This should be parsed accordingly
    qrCodeUrl: string; // URL for the QR code image
}

const SingleTicket: React.FC<TicketProps> = ({ showTime, bookingDate, totalCost, numberOfSeats, seats, qrCodeUrl }) => {
    // Function to copy ticket details to clipboard

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
                <Image src={qrCodeUrl} alt="QR Code" width={100} height={100} />
            </Card>
        </Center>
    );
};

export default SingleTicket;
