import React from "react";
import { Text, Image, Container, Button, Flex, UnstyledButton, Chip } from '@mantine/core';
import { Movie } from '../../../Movie/MovieInterface';
const MovieCard: React.FC<Movie> = 
({  title, 
    _id, 
    genres, 
    format, 
    languages, 
    certificate }) => {

    return (
        <Container px={0} mt="md" style={{width:""}}>
            <Flex direction={"row"} gap="xl">
                <div>
                    <Flex direction={"row"} gap="sm">
                        <Text size="32px">{title} ({format}) - {languages?.[0]}</Text>
                    </Flex>
                    <Flex direction="row" style={{ marginTop: "20px" }} align={"center"}>
                        <Chip size="lg">{`${certificate}`}</Chip>
                        <Flex direction="row" gap="xs">
                        {genres.map((genre)=>(<Chip variant="outline">{genre}</Chip>))}
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </Container>
    );
}

export default MovieCard;