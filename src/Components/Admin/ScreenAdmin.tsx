import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { addNewScreen, editNewScreen, getAllScreens, getAllTheatres } from "../../api/moviesApi";
import { ActionIcon, Button, Container, Grid, Group, Modal, NumberInput, Select, Table, TextInput } from "@mantine/core";
import { IconPencil, IconX } from "@tabler/icons-react";
import { Screen } from "../../Interfaces/ScreenInterface";

const defaultScreen = {
    _id: "",
    screenType: "",
    seatingCapacity: 0,
    screenName: "",
    rows: 13,
    col: 12,
    cost: 0,
    theatreId: "",
    occupancyStatus: [], // Specify a more detailed type if available
    isActive: true,
    createdAt: "",
    updatedAt: "",
    __v: 0,
    showtimes: [],
};

function ScreenAdmin() {
    const [screenList, setScreenList] = useState<Screen[]>([])
    const [theatherList, setTheatherList] = useState<{value:string,label:string}[]>([])

    const [selectedScreen, setSelectedScreen] = useState<Screen>(defaultScreen)
    const [opened, { open, close }] = useDisclosure(false);

    const demoProps = {
        h: 50,
        mt: 'md',
    };

    const rows = screenList.map((element) => (
        <Table.Tr key={element._id}>
            <Table.Td>{element.screenName}</Table.Td>
            <Table.Td>{element.screenType}</Table.Td>
            <Table.Td>{element.rows}</Table.Td>
            <Table.Td>{element.col}</Table.Td>
            <Table.Td>{element.cost}</Table.Td>
            <Table.Td>
                <ActionIcon variant="outline" aria-label="Settings" onClick={() => {
                    setSelectedScreen(element)
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

    const fetchTheatherList = async () => {

        const { data } = await getAllTheatres()

        console.log(data)

        const mappedData = data.data.map((eachElement:any)=>{
            console.log("hey",eachElement)
            return {
            value: eachElement._id,
            label: eachElement.theatreName,
        }})

        setTheatherList(mappedData)
    }

    const fetchScreenList = async () => {

        const { data } = await getAllScreens()

        console.log(data)

        setScreenList(data.data)
    }

    const addScreen = async () => {
        const response = await addNewScreen(selectedScreen)
        console.log(response)
        close()
        setSelectedScreen(defaultScreen)
        await fetchScreenList()
    }

    const editScreen = async () => {
        const response = await editNewScreen(selectedScreen, selectedScreen._id)
        console.log(response)
        close()
        setSelectedScreen(defaultScreen)
        await fetchScreenList()

    }

    useEffect(() => {
        fetchScreenList()
        fetchTheatherList()
    }, [])


    return (
        <>
            <Container size="md" {...demoProps}>
                <Group justify="center">
                    <Button variant="filled" onClick={() => {
                        open()
                    }}>Add New Screen</Button>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Screen Name</Table.Th>
                                <Table.Th>Screen Type</Table.Th>
                                <Table.Th>Row</Table.Th>
                                <Table.Th>Coloumns</Table.Th>
                                <Table.Th>Cost</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </Group>
            </Container>
            <Modal opened={opened} onClose={close} centered>
                <TextInput
                    label="Screen Name"
                    placeholder="Inox"
                    mb={'10px'}
                    value={selectedScreen.screenName}
                    onChange={(event) => {
                        setSelectedScreen({ ...selectedScreen, screenName: event.target.value })
                    }}
                />
                <TextInput
                    label="Screen Type"
                    placeholder="Best viewing experience"
                    mb={'10px'}
                    value={selectedScreen.screenType}
                    onChange={(event) => {
                        setSelectedScreen({ ...selectedScreen, screenType: event.target.value })
                    }}
                />
                <Grid mb={'10px'}>
                    <Grid.Col span={4}>
                        <NumberInput
                            label="Rows"
                            placeholder="95126"
                            value={selectedScreen.rows}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <NumberInput
                            label="Columns"
                            placeholder="95126"
                            value={selectedScreen.col}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <NumberInput
                            label="Cost"
                            placeholder="95126"
                            value={selectedScreen.cost}
                            onChange={(event) => {
                                setSelectedScreen({ ...selectedScreen, cost: parseInt(`${event}`) })
                            }}
                        />
                    </Grid.Col>
                </Grid>
                <Select
                    label="Select Theater"
                    data={theatherList}
                    value={selectedScreen.theatreId}
                    onChange={(value)=>{setSelectedScreen({...selectedScreen,theatreId:value??''})}}

                />
                <Group justify="center">
                    <Button variant="filled" onClick={() => {
                        selectedScreen?._id.length > 0 ? editScreen() :
                            addScreen()
                    }}>Save</Button>
                </Group>
                

            </Modal>
        </>
    )


}

export default ScreenAdmin
