import {  Container, Tabs, rem, } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings} from '@tabler/icons-react';
import BasicAppShell from '../../Components/Layouts/Onboarding';
import TheaterAdmin from '../../Components/Admin/TheaterAdmin';
import ScreenAdmin from '../../Components/Admin/ScreenAdmin';
import ShowTimeAdmin from '../../Components/Admin/ShowTimeAdmin';
// import ShowTimeAdmin from '../../Components/Admin/ShowTimeAdmin';




function AdminHome() {
    const iconStyle = { width: rem(12), height: rem(12) };

    const demoProps = {
        h: 50,
        mt: 'md',
    };
   
    return (
        <>
            <BasicAppShell>
                <Container fluid>
                    <Tabs defaultValue="theather">
                        <Tabs.List justify="center">
                            <Tabs.Tab value="theather" leftSection={<IconPhoto style={iconStyle} />}>
                                Theather
                            </Tabs.Tab>
                            <Tabs.Tab value="screens" leftSection={<IconMessageCircle style={iconStyle} />}>
                                Screens
                            </Tabs.Tab>
                            <Tabs.Tab value="showTime" leftSection={<IconSettings style={iconStyle} />}>
                                Show Time
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="theather">
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
            </BasicAppShell>
        </>

    );
}

export default AdminHome