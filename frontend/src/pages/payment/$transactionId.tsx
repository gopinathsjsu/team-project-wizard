
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BaseLayout from '../../Components/Layouts/BaseLayout';
import { getTicketByTransaction } from '../../api/moviesApi';
import { Ticket } from '../../Interfaces/TicketInterface';
import SingleTicket from '../../Components/Ticket/SingleTicket';


const defaultTicket = {
    "_id": "656f80458fc72d647cddfb97",
    "userId": "656dbbcea0dfd82a2e721541",
    "movieId": "656bdecc9f783e9e90b62cd9",
    "screenId": "656f7da18fc72d647cddfafd",
    "transactionId": "656f80458fc72d647cddfb94",
    "showTime": "2023-12-05T20:45:00.000Z",
    "showTimeId": "656f7dd98fc72d647cddfb12",
    "seats": "{\"L\":[{\"col\":\"1\",\"isAvailable\":true,\"isSelected\":true},{\"col\":\"2\",\"isAvailable\":true,\"isSelected\":true},{\"col\":\"3\",\"isAvailable\":true,\"isSelected\":true}]}",
    "numberOfSeats": 3,
    "qrUrls": [],
    "bookingDate": "2023-12-05T19:55:49.954Z",
    "totalCost": 1.5,
    "isActive": true,
    "createdAt": "2023-12-05T19:55:49.956Z",
    "updatedAt": "2023-12-05T19:55:49.956Z",
    "__v": 0
};
const PaymentsPage = () => {
    const {transactionid} = useParams();
    const [ticket, setTicket] = useState<Ticket>(defaultTicket)
    const fetchTicketDetails = async () =>{
        const response = await getTicketByTransaction(transactionid);
        const {data} = response;
        setTicket(data.ticket);
        return data.ticket;
    }

    useEffect(()=>{
        fetchTicketDetails();
    },[])
    return (
        <BaseLayout>
            <SingleTicket
               {...ticket}
                qrCodeUrl='https://ik.imagekit.io/vclgut93d/dummyQR-code.png?updatedAt=1701808212936'
            ></SingleTicket>
        </BaseLayout>
    )
}

export default PaymentsPage;