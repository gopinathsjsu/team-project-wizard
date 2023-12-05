import BaseLayout from '../../Components/Layouts/BaseLayout'
import { Card, Center, Tabs, rem, Image, Group, Badge, Button, Text, Paper, Container, SimpleGrid, Modal } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import MovieListing from '../../Components/Movie/MovieListing'
import { useEffect, useState } from 'react';
import { getAllTheatres } from '../../api/moviesApi';
import { Carousel } from '@mantine/carousel';
import { Theatre } from '../../Interfaces/TheatreInterface';
import { useDisclosure } from '@mantine/hooks';
import { Movie } from '../../Interfaces/MovieInterface';
import MovieBanner from '../../Components/Movie/MovieBanner';

function ListTheater() {
    const iconStyle = { width: rem(12), height: rem(12) };

    const [cities, setCities] = useState<string[]>([])
    const [theaterList, setTheaterList] = useState<Theatre[]>([])
    const [movies, setMovies] = useState<Movie[]>([])

    const fetchAllTheater = async () => {
        const data = await getAllTheatres()
        console.log(data.data.data)
        setCities(Array.from(new Set(data.data.data.map((eachTheater: any) => eachTheater.city))))
        setTheaterList(data.data.data)
    }

    const computeMovies = (theater: any) => {

        const movieData = theater.moviesList
        setMovies(movieData)
        open()

    }

    const tabsTab = cities.map((city, index) => {
        return (<Tabs.Tab value={`${index}`}>
            {city}
        </Tabs.Tab>)
    })

    const tabsPanel = cities.map((city, index) => {

        const theaterCards = theaterList.filter((eachTheater) => eachTheater.city === city).map((theaterData) => {
            return (
                <Card shadow="sm" padding="lg" radius="md" withBorder w={'300px'}>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{theaterData.theatreName}</Text>
                    </Group>
                    <Text c="dimmed">{theaterData.address}</Text>

                    <Text size="sm">
                        {theaterData.description}
                    </Text>

                    <Button color="red" fullWidth mt="md" radius="md" onClick={() => { computeMovies(theaterData) }} >
                        Book Now
                    </Button>
                </Card>
            )
        })



        return (
            <Tabs.Panel value={`${index}`} mt={'30px'}>
                <SimpleGrid cols={3}>
                    {theaterCards}
                </SimpleGrid>
            </Tabs.Panel>
        )
    })




    useEffect(() => {
        fetchAllTheater()
    }, [])

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <BaseLayout>
            <Center mt={'10px'}>
                <Tabs variant="pills" radius="xl" defaultValue="0">
                    <Tabs.List justify="center">
                        {tabsTab}
                    </Tabs.List>
                    {tabsPanel}
                </Tabs>
            </Center>
            <Modal opened={opened} onClose={close} title="Select Movie" centered>

                {movies.length>0?
                <Carousel
                    withIndicators
                    slideSize={{ base: '100%', sm: '50%', md: '20%' }}
                    slideGap={{ base: 0, sm: 'md' }}
                    loop
                    align="start"
                    slidesToScroll={10}
                    maw={760}
                >
                    {movies.map((movie) => (
                        <Carousel.Slide><MovieBanner {...movie} key={movie._id} /></Carousel.Slide>
                    ))}
                </Carousel>:<Text>No movies available at this theater</Text>
                
                }

            </Modal>
        </BaseLayout>
    )
}

export default ListTheater
