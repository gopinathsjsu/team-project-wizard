import React from "react";
import { Text, Image, Container, Button, Flex, UnstyledButton, Chip } from '@mantine/core';
import { Movie } from '../../../../Interfaces/MovieInterface';
const MovieCard: React.FC<Movie> = 
({  title, 
    _id, 
    genres, 
    format, 
    languages, 
    certificate }) => {

    return (
        <Flex m={0} style={{maxWidth:"1920px" ,color: "#ffffff"}} justify="center" bg="#333545">
            <Flex direction={"row"} gap="xl" ml="md"  w={{ base: 100, sm: 400, lg: 1040 }}>
                <div style={{width:"100%"}}>
                    <Flex direction={"row"} gap="sm" mt="sm">
                        <Text size="32px">{title} ({format}) - {languages?.[0]}</Text>
                    </Flex>
                    <Flex direction="row" style={{ marginTop: "20px", marginBottom:"10px" }} align={"center"} gap="20px">
                        <Chip size="sm" className="bg-secondry">{`${certificate}`}</Chip>
                        <Flex direction="row" gap="xxs">
                        {genres.map((genre)=>(<Chip variant="outline">{genre}</Chip>))}
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </Flex>
    );
}

export default MovieCard;