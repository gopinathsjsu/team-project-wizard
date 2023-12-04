import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { addNewScreen, addNewShowTime, editNewScreen, getAllMovies, getAllScreens, getAllShowTimes, getAllTheatres, updateShowTime } from "../../api/moviesApi";
import { ActionIcon, Button, Container, Grid, Group, Modal, NumberInput, Select, Table, TextInput } from "@mantine/core";
import { IconPencil, IconX } from "@tabler/icons-react";
import { Showtime } from "../../Interfaces/ShowTimeInterface";
import { formatDate } from "../../utils/Date";
import { DateTimePicker } from "@mantine/dates";
// import { TimeInput } from '@mantine/dates';

const defaultShowTime = {
    _id: "",
    movieId: "",
    screenId: "",
    startTime: "",
    endTime: "",
    price: 0,
    discountPrice: 0,
    isActive: true,
    createdAt: "",
    updatedAt: "",
    __v: 0,
};

function ShowTimeAdmin() {
    const [showTimeList, setShowTimeList] = useState<Showtime[]>([])
    const [movieDropDownList, setMovieDropDownList] = useState<{ value: string, label: string }[]>([])
    const [movieMap, setMovieMapList] = useState<{ [key: string]: string }>({})

    const [screeneDropDownList, setScreenDropDownList] = useState<{ value: string, label: string }[]>([])
    const [screenMap, setScreenMapList] = useState<{ [key: string]: string }>({})

    const [selectedShowTime, setSelectedShowTime] = useState<Showtime>(defaultShowTime)
    const [opened, { open, close }] = useDisclosure(false);

    const demoProps = {
        h: 50,
        mt: 'md',
    };

    const rows = showTimeList.map((element) => (
        <Table.Tr key={element._id}>
            <Table.Td>{movieMap[`${element.movieId}`]}</Table.Td>
            <Table.Td>{screenMap[`${element.screenId}`]}</Table.Td>
            <Table.Td>{formatDate(element.startTime,true)}</Table.Td>
            <Table.Td>{formatDate(element.endTime,true)}</Table.Td>
            <Table.Td>{element.price}</Table.Td>
            <Table.Td>
                <ActionIcon variant="outline" aria-label="Settings" onClick={() => {
                    setSelectedShowTime(element)
                    open()
                }}>
                    <IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="outline" color='red' aria-label="Settings" ml={'10px'}>
                    <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
            </Table.Td>
        </Table.Tr>
    ));

    const fetchMoviesList = async () => {

        const { data } = await getAllMovies()

        console.log(data)

        const mappedMovieData: any = {}

        const mappedDropwDownMovieData = data.data.map((eachElement: any) => {
            mappedMovieData[`${eachElement._id}`] = eachElement.title
            return {
                value: eachElement._id,
                label: eachElement.title,
            }
        })

        setMovieMapList(mappedMovieData)
        setMovieDropDownList(mappedDropwDownMovieData)
    }

    const fetchScreenList = async () => {

        const { data } = await getAllScreens()

        const mappedScreenData: any = {}

        const mappedDropwDownScreenData = data.data.map((eachElement: any) => {
            mappedScreenData[`${eachElement._id}`] = eachElement.screenName
            return {
                value: eachElement._id,
                label: eachElement.screenName,
            }
        })

        console.log("ScreenList",data)

        setScreenDropDownList(mappedDropwDownScreenData)
        setScreenMapList(mappedScreenData)
    }

    const fetchShowTimes = async () => {
        const { data } = await getAllShowTimes()
        setShowTimeList(data.data)
    }

    const addShowTime = async () => {
        const response = await addNewShowTime(selectedShowTime)
        console.log(response)
        close()
        setSelectedShowTime(defaultShowTime)
        await fetchShowTimes()
    }

    const editShowTime = async () => {
        const response = await updateShowTime(selectedShowTime, selectedShowTime._id)
        console.log(response)
        close()
        setSelectedShowTime(defaultShowTime)
        await fetchShowTimes()

    }

    useEffect(() => {
        fetchScreenList()
        fetchMoviesList()
        fetchShowTimes()
    }, [])


    return (
        <>
            <Container size="md" {...demoProps}>
                <Group justify="center">
                    <Button variant="filled" onClick={() => {
                        open()
                    }}>Add New Show Time</Button>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Movie Name</Table.Th>
                                <Table.Th>Screen Name</Table.Th>
                                <Table.Th>Start Time</Table.Th>
                                <Table.Th>End Time</Table.Th>
                                <Table.Th>Cost</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </Group>
            </Container>
            <Modal opened={opened} onClose={close} centered>
                <Select
                mb={'10px'}
                    label="Select Movie"
                    data={movieDropDownList}
                    value={selectedShowTime.movieId}
                    clearable
                    onChange={(value) => { setSelectedShowTime({ ...selectedShowTime, movieId: value ?? '' }) }}

                />
                <Select
                mb={'10px'}
                    label="Select Screen"
                    data={screeneDropDownList}
                    value={selectedShowTime.screenId}
                    clearable
                    onChange={(value) => { setSelectedShowTime({ ...selectedShowTime, screenId: value ?? '' }) }}

                />
                <Grid mb={'10px'}>
                    <Grid.Col span={6}>
                        <DateTimePicker
                            label="Start Time"
                            value={selectedShowTime.startTime ? new Date(selectedShowTime.startTime) : new Date()}
                            onChange={(e)=>{
                                console.log(e)
                                setSelectedShowTime({ ...selectedShowTime, startTime: new Date(`${e}`).toISOString()??""})
                            }}

                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <DateTimePicker
                            label="End Time"
                            value={selectedShowTime.endTime ? new Date(selectedShowTime.endTime) : new Date()}
                            onChange={(e)=>{
                                console.log(e)
                                setSelectedShowTime({ ...selectedShowTime, endTime: new Date(`${e}`).toISOString()??""})
                            }}

                        />
                    </Grid.Col>
                </Grid>
                <Group justify="center">
                    <Button variant="filled" onClick={() => {
                        selectedShowTime?._id.length > 0 ? editShowTime() :
                            addShowTime()
                    }}>Save</Button>
                </Group>


            </Modal>
        </>
    )


}

export default ShowTimeAdmin
