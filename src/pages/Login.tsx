import '@mantine/core/styles.css';
import { Container, PasswordInput, Text, Divider, Button, SimpleGrid, Center } from '@mantine/core';
import InputBox from '../Components/InputBox';
import BasicAppShell from '../Components/Layouts/Onboarding';
import { IconBrandGoogleFilled, IconBrandMeta } from '@tabler/icons-react';
import { Link } from 'react-router-dom';



const Index = () => {
  return (
    <BasicAppShell>
      <Container px={0} size="30rem">
        <InputBox label={"Username or Email"} placeholder={"ex: john.doe@hotmail.com"} />
        <PasswordInput label={"Enter a password"} />
        <Text size="xs" c="blue" mt="xs">Forgot Password?</Text>
        <Button variant="filled" size="md" mt="xs" >Login</Button>
        <Divider mt="sm" label="or" labelPosition="center" />
        <Text size="sm" mt="s">Don't have an Account yet? <Link to="../signup">Sign Up</Link></Text>
        <Center mt="sm">
          <SimpleGrid cols={2} maw={400} >
            <Button variant="default" c={"#4285F4"}><IconBrandGoogleFilled /></Button>
            <Button variant="default" c={"#4267B2"}><IconBrandMeta /></Button>
          </SimpleGrid>
        </Center>
      </Container>
    </BasicAppShell>
  );
}

export default Index;