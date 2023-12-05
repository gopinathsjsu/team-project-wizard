import { Modal, Button, Text, Title, SegmentedControl, Tabs, Image, Container, Center } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconArrowRight, IconReportMoney } from "@tabler/icons-react";
import { Seats } from "../../../Interfaces/SeatInterface";
import { User } from "../../../Interfaces/UserInterface";
import { useState } from "react";
import { bookTicket } from "../../../api/moviesApi";

interface paymentModalProps{
    seats: Seats,
    user: User | undefined,
    grandTotal: number,
    showTimeId: string | undefined
} 


const PaymentModal:  React.FC<paymentModalProps> = ({user, seats, grandTotal, showTimeId }) =>{
    
    
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 50em)');
    const rewardPoints = user?.rewardPoints || 0;
    const [isPoints, setIsPoints] = useState((rewardPoints || 0) >= grandTotal);
    let initialPaymentValues ={
        userId: user?._id || "",
        selectedSeats: seats,
        showTimeId: showTimeId
    }

    let defaultCardDetails = {
        "cardNumber": "1234567890123456",
        "expiryDate": "12/24",
        "cvv": "123"
    }

    const handlePayment= async (modeOfPayment: string)=>{
        try{
            let response
            if(modeOfPayment!=="card")
                response = await bookTicket(JSON.stringify({...initialPaymentValues, modeOfPayment: modeOfPayment}));
            else
                response = await  bookTicket(JSON.stringify({...initialPaymentValues, modeOfPayment: modeOfPayment, cardDetails: {...defaultCardDetails}  }));
            console.log(response)
        } catch(error){
            console.log(error);
        }

    }


    return(
    <>
    <Modal
        opened={modalOpened}
        onClose={closeModal}
        title="Payment"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
    >
        <Title order={5}>Choose your Mode of Payment</Title>
        <Tabs mt="md" defaultValue="Card">
            <Tabs.List grow>
                <Tabs.Tab value="Card">Cards</Tabs.Tab>
                <Tabs.Tab value="Rewards">Rewards</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel p={"md"} value="Card">
                <Image h={220} src={"https://ik.imagekit.io/vclgut93d/pngtree-editable-fake-plastic-credit-card-png-image_2207379.png?updatedAt=1701758450821"} />
                <Text mt="lg" fw={500} >Pay ${grandTotal} out of the card</Text>
                <Center mt="md">
                    <Button onClick={()=>handlePayment("card")} >Pay using card<IconArrowRight/></Button>
                </Center>
            </Tabs.Panel>
            <Tabs.Panel p={"md"} value="Rewards">
                <Text mt="lg" fw={500} >Pay ${grandTotal} out of Rewards</Text>
                <Text>${grandTotal}-{rewardPoints} = ${isPoints ? 0:  grandTotal - (rewardPoints)}</Text>
                <Center mt="md">
                    <Button onClick={()=>handlePayment("points")}   disabled={isPoints ? false: true}>Pay using rewards!<IconArrowRight/></Button>
                </Center>
                    {!isPoints && <Text mt="sm" ta="center" size="sm">You do not have enough rewards to book the ticket</Text>}
            </Tabs.Panel>
        </Tabs>
    </Modal>
    <Button mt="lg" onClick={openModal}> <Text>Book Seats</Text>< IconReportMoney style={{ marginLeft: "4px" }} /> </Button>
    </>
);
}

export default PaymentModal;