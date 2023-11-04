import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Container, PasswordInput, Text, Divider, Button, SimpleGrid, Center } from '@mantine/core';
import Demo from './Button';
import InputBox from './InputBox';
import BasicAppShell from './AppShell';
import { IconBrandGoogleFilled, IconBrandMeta } from '@tabler/icons-react';

function App() {

  return (
    <MantineProvider>
      <BasicAppShell>
      <Container px={0} size="30rem"> 
        <InputBox  label={"Username or email"} placeholder={"ex: john.doe@hotmail.com"} />
        <PasswordInput  label={"Enter a password"} />
        <Text size="xs" c="blue" mt="xs">Forgot Password?</Text>
        <Demo/>
        <Divider  mt="sm" label="or" labelPosition="center"/>
        <Text size="sm" mt="s">Don't have an Account yet? <Text c="blue" component="span" td="underline">Sign Up</Text></Text>
        <Center mt="sm">
        <SimpleGrid cols={2} maw={400} >
          <Button variant="default" c={"#4285F4"}><IconBrandGoogleFilled /></Button>
          <Button variant="default" c={"#4267B2"}><IconBrandMeta/></Button>
        </SimpleGrid>
        </Center>
      </Container>
      </BasicAppShell>
    </MantineProvider>
  )
}

export default App
