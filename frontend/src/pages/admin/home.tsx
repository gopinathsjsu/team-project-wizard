import {  Container, Tabs, rem, } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings} from '@tabler/icons-react';
import TheaterAdmin from '../../Components/Admin/TheaterAdmin';
import ScreenAdmin from '../../Components/Admin/ScreenAdmin';
import ShowTimeAdmin from '../../Components/Admin/ShowTimeAdmin';
import BaseLayout from '../../Components/Layouts/BaseLayout';
// import ShowTimeAdmin from '../../Components/Admin/ShowTimeAdmin';




function AdminHome() {
    const iconStyle = { width: rem(12), height: rem(12) };

    const demoProps = {
        h: 50,
        mt: 'md',
    };
   
    return (
        <>
            <BaseLayout>
                <Container fluid>
                    <Tabs defaultValue="Theater">
                        <Tabs.List justify="center">
                            <Tabs.Tab value="Theater" leftSection={<IconPhoto style={iconStyle} />}>
                                Theater
                            </Tabs.Tab>
                            <Tabs.Tab value="screens" leftSection={<IconMessageCircle style={iconStyle} />}>
                                Screens
                            </Tabs.Tab>
                            <Tabs.Tab value="showTime" leftSection={<IconSettings style={iconStyle} />}>
                                Show Time
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="Theater">
                            <TheaterAdmin></TheaterAdmin>
                        </Tabs.Panel>
                        <Tabs.Panel value="screens">
                           <ScreenAdmin></ScreenAdmin>
                        </Tabs.Panel>
                        <Tabs.Panel value="showTime">
                          <ShowTimeAdmin></ShowTimeAdmin>
                        </Tabs.Panel>
                    </Tabs>
                </Container>
            </BaseLayout>
        </>

    );
}

export default AdminHome