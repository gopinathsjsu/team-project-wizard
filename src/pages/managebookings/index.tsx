
import React, { useEffect, useState } from 'react'
import BaseLayout from '../../Components/Layouts/BaseLayout';
import PastTickets from '../../Components/Ticket/PastTickets';
import { useLocalStorage } from '@mantine/hooks';

import { User } from '../../Interfaces/UserInterface';
import LoginPagePrompt from '../../Components/Redirect/LoginPrompt';




const PaymentsPage = () => {
    const [user, setUser]= useLocalStorage<User>({key: 'userData'});

    return (
        <BaseLayout>
            { user?._id ?  <PastTickets user={user}/> : <LoginPagePrompt />}
        </BaseLayout>
    )
}

export default PaymentsPage;