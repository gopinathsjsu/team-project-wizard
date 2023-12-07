import React from "react";
import { Text, Image, Container, Button, Flex, UnstyledButton } from '@mantine/core';
import { Movie } from '../../../Interfaces/MovieInterface';
import { formatDate, minutesToHours } from "../../../utils/Date";
import { IconShare } from '@tabler/icons-react';
import { handleOptionOverflow } from "../../../utils/String";
import { useNavigate } from "react-router-dom";
import { handleShareClick } from "../../../utils/share";
import { useLocalStorage } from '@mantine/hooks';
import { User } from "../../../Interfaces/UserInterface";

const MovieDescription: React.FC<Movie> = 
({  title, 
    posterUrl, 
    description, 
    _id, 
    runTime, 
    genres, 
    releaseDate, 
    format, 
    languages, 
    certificate }) => {

    const navigator = useNavigate();
    const [user, setUser] = useLocalStorage<User>({key:'userData'});

    const handleNavigation = () => {
        console.log(user);
        (user && user?.memberShipType) ?  navigator(`/booking/${_id}`) : navigator(`/login?callback=/booking/${_id}`);
    };

    return (
        <Container px={0} mt="md" mih={320}>
            <Flex direction={"row"} justify={"center"} gap="xl" wrap="wrap" pos="relative">
                <div>
                    <Image src={posterUrl} style={{ height: 320, width: 223 }} alt={title} />
                </div>
                <div style={{minHeight: "320px", maxWidth: "260px"}}>
                    <Flex direction={"row"} justify={"space-between"}>
                        <Text size="36px" mt="5px" fw={700}>{title}</Text>
                        <Flex direction={"column"}>
                            <UnstyledButton mt="7px" onClick={handleShareClick}><IconShare /></UnstyledButton>
                            <Text size="xs">Share</Text>
                        </Flex>
                    </Flex>
                    <div style={{ marginTop: "20px" }}>
                        <Text size="lg">{format}</Text>
                        <Text size="lg">{handleOptionOverflow(languages)}</Text>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Text size="lg">{`${minutesToHours(runTime)} . ${certificate} . ${formatDate(releaseDate)}`}</Text>
                        <Text size="lg">{handleOptionOverflow(genres)}</Text>
                    </div>
                    <div style={{ bottom: 0, position:"absolute", width: "260px" }}>
                        <Button fullWidth bottom={0} onClick={handleNavigation}>Book Now</Button>
                    </div>
                </div>
            </Flex>
        </Container>
    );
}

export default MovieDescription;