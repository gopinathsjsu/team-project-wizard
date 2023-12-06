
import React, { useEffect, useState } from 'react'

import SingleTicket from '../../Components/Ticket/SingleTicket';
import { User } from '../../Interfaces/UserInterface';
import { getPastBookings } from '../../api/moviesApi';
import { Ticket } from '../../Interfaces/TicketInterface';
import Loading from '../Loading';
import { getUsTimeZone } from "../../utils/Date"
import { Flex } from '@mantine/core';
interface pastTicketsProps {
    user: User
}

const defaultTickets = [
    {
        "_id": "",
        "userId": "",
        "movieId": "",
        "screenId": "",
        "transactionId": "",
        "showTime": "",
        "showTimeId": "",
        "seats": "",
        "numberOfSeats": 0,
        "totalCost": 0,
        "isActive": false,
        "bookingDate": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
    },
    {
        "_id": "",
        "userId": "",
        "movieId": "",
        "screenId": "",
        "transactionId": "",
        "showTime": "",
        "showTimeId": "",
        "seats": "",
        "numberOfSeats": 0,
        "totalCost": 0,
        "isActive": false,
        "bookingDate": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
    }
];

const PastTickets :React.FC<pastTicketsProps> = ({user}) => {

    const [loading, isLoading] = useState(true);
    const [tickets, setTickets] = useState<Ticket[]>(defaultTickets);
    console.log("This is the User ID", user);
    const fetchTicketDetails = async () =>{
        console.log("This is the user id ", user?._id)
        const response = await getPastBookings(user?._id);
        const {data} = response;
        setTickets(data.tickets);
        isLoading(false);
    }

    useEffect(()=>{
        fetchTicketDetails();
    },[]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Flex direction="row" wrap="wrap" justify="center" gap="10px">
                {tickets.map((ticket) => (
                        <SingleTicket
                            {...ticket}
                            allowCancel={getUsTimeZone(ticket.showTime) < getUsTimeZone("")}
                        />
                    
                ))}
                </Flex>
            )}
        </>

    )
}

export default PastTickets;