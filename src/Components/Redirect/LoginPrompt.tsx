import React from 'react';
import { Button, Center, Text, Image, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom'; // assuming you're using react-router for navigation

const LoginPagePrompt: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login'); // replace '/login' with your actual login route
    };

    return (
        <Center style={{ height: '100vh' }}>
            <Stack align="center" gap="md">
                <Image 
                    src="https://ik.imagekit.io/vclgut93d/you-shall-not-pass.webp?updatedAt=1701816724516" // replace with your actual image path
                    alt="Placeholder"
                    width={250}
                    height={250}
                    radius="50%"
                />
                <Text size="lg">You Can't View This Page.</Text>
                <Button onClick={handleLoginRedirect}>Login</Button>
            </Stack>
        </Center>
    );
};

export default LoginPagePrompt;
