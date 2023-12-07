import '@mantine/core/styles.css';
import { Container, PasswordInput, Text, Divider, Button, SimpleGrid, Center } from '@mantine/core';
import InputBox from '../../Components/InputBox';
import BaseLayout from '../../Components/Layouts/Onboarding';
import { IconBrandGoogleFilled, IconBrandMeta } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';



const Index = () => {

    const navigate=useNavigate()

  return (
    <BaseLayout>
      <Container px={0} size="30rem">
        <InputBox label={"Username or Email"} placeholder={"ex: john.doe@hotmail.com"} />
        <PasswordInput label={"Enter a password"} />
        <Text size="xs" c="blue" mt="xs">Forgot Password?</Text>
        <Button variant="filled" size="md" mt="xs" onClick={()=>{
            navigate('/admin/home')
        }} >Login</Button>       
      </Container>
    </BaseLayout>
  );
}

export default Index;