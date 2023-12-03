import { useEffect, useState } from "react";
import { Theatre } from "../../Interfaces/TheatreInterface";
import { useDisclosure } from "@mantine/hooks";
import { addNewTheatre, editNewTheatre, getAllTheatres } from "../../api/moviesApi";
import { ActionIcon, Button, Container, Grid, Group, Modal, NumberInput, Table, TextInput } from "@mantine/core";
import { formatDate } from "../../utils/Date";
import { IconPencil, IconX } from "@tabler/icons-react";

const defaultTheather = {
    _id: "",
    theatreName: "",
    description: "",
    location: "",
    state: "",
    address: "",
    zip: 0,
    contact: 0,
    city: "",
    theatreUrl: "",
    isActive: false,
    createdAt: "",
    updatedAt: "",
    __v: 0,
    screens: []
};

function TheaterAdmin () {
    const [theatherList, setTheatherList] = useState<Theatre[]>([])
    const [selectedTheather, setSelectedTheather] = useState<Theatre>(defaultTheather)
    const [opened, { open, close }] = useDisclosure(false);

    const demoProps = {
        h: 50,
        mt: 'md',
    };

    const rows = theatherList.map((element) => (
        <Table.Tr key={element._id}>
            <Table.Td>{element.theatreName}</Table.Td>
            <Table.Td>{element.address}</Table.Td>
            <Table.Td>{element.city}</Table.Td>
            <Table.Td>{formatDate(element.createdAt)}</Table.Td>
            <Table.Td>
                <ActionIcon variant="outline" aria-label="Settings" onClick={() => {
                    setSelectedTheather(element)
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

        setTheatherList(data.data)
    }

    const addNewTheather = async () => {
        const response = await addNewTheatre(selectedTheather)
        console.log(response)
        close()
        setSelectedTheather(defaultTheather)
        await fetchTheatherList()
    }

    const editTheather = async () => {
        const response = await editNewTheatre(selectedTheather, selectedTheather._id)
        console.log(response)
        close()
        setSelectedTheather(defaultTheather)
        await fetchTheatherList()

    }

    useEffect(() => {
        fetchTheatherList()
    }, [])


    return (
        <>
            <Container size="md" {...demoProps}>
                <Group justify="center">
                    <Button variant="filled" onClick={() => {
                        open()
                    }}>Add New Theather</Button>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Theather Name</Table.Th>
                                <Table.Th>Location</Table.Th>
                                <Table.Th>City</Table.Th>
                                <Table.Th>Created At</Table.Th>
                                <Table.Th></Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </Group>
            </Container>
            <Modal opened={opened} onClose={close} centered>
                <TextInput
                    label="Name"
                    placeholder="Inox"
                    mb={'10px'}
                    value={selectedTheather.theatreName}
                    onChange={(event) => {
                        setSelectedTheather({ ...selectedTheather, theatreName: event.target.value })
                    }}
                />
                <TextInput
                    label="Description"
                    placeholder="Best viewing experience"
                    mb={'10px'}
                    value={selectedTheather.description}
                    onChange={(event) => {
                        setSelectedTheather({ ...selectedTheather, description: event.target.value })
                    }}

                />
                <Grid mb={'10px'}>
                    <Grid.Col span={6}>
                        <TextInput
                            label="Location"
                            placeholder="Downtown"
                            value={selectedTheather.location}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, location: event.target.value })
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            label="City"
                            placeholder="San Jose"
                            value={selectedTheather.city}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, city: event.target.value })
                            }}
                        />
                    </Grid.Col>
                </Grid>
                <Grid mb={'10px'}>
                    <Grid.Col span={6}>
                        <TextInput
                            label="State"
                            placeholder="CA"
                            value={selectedTheather.state}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, state: event.target.value })
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            label="Address"
                            placeholder="1234 Downtown"
                            value={selectedTheather.address}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, address: event.target.value })
                            }}
                        />
                    </Grid.Col>
                </Grid>
                <Grid mb={'10px'}>
                    <Grid.Col span={6}>
                        <NumberInput
                            label="Zip"
                            placeholder="95126"
                            value={selectedTheather.zip}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, zip: parseInt(`${event}`) })
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <NumberInput
                            label="Contact"
                            placeholder="123456789"
                            value={selectedTheather.contact}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, contact: parseInt(`${event}`) })
                            }}
                        />
                    </Grid.Col>
                </Grid>
                <TextInput
                    label="URL"
                    placeholder="https://www.google.com"
                    mb={'10px'}
                    value={selectedTheather.theatreUrl}
                            onChange={(event) => {
                                setSelectedTheather({ ...selectedTheather, theatreUrl: event.target.value })
                            }}
                />
                <Group justify="center">
                    <Button variant="filled" onClick={() => {
                        selectedTheather?._id.length>0? editTheather():
                        addNewTheather()
                    }}>Save</Button>
                </Group>

            </Modal>
        </>
    )


}

export default TheaterAdmin
