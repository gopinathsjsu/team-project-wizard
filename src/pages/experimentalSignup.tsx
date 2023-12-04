import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code, Container, Text, SegmentedControl, Center, Flex, Image, Stack, Transition, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import BasicAppShell from '../Components/Layouts/Onboarding';
import { IconArrowNarrowRight, IconUserPlus } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      membershipType: ''
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <BasicAppShell>
      <Container px={0} size="40rem">

      <Stepper  active={active}>
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput label="Username" placeholder="Username" {...form.getInputProps('username')} />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        </Stepper.Step>
        <Stepper.Step label="Third Step" description="Membership Information">
          <Flex direction="column" align="center">
            <Flex direction="column" align="center" maw="60%" p="sm" bg="#E67D81" style={{borderRadius: "10px"}}>
              <IconUserPlus color="black" fill='black' />
              <Text mt="40px">Become A Premium Member</Text>
              <Text>And more at just 15$/Anually</Text>
              <SegmentedControl {...form.getInputProps('membershipType')}
                mt="sm"
                data={['Premium','Regular']}
                defaultValue='Premium'
                transitionDuration={300}
                transitionTimingFunction="linear"
              />
            </Flex>
          </Flex>
        </Stepper.Step>
        <Stepper.Completed>
          <Flex w="300" direction="column" align={"center"} m="auto">
            <Image      
              h={200}
              fit="contain" 
              radius="50%" src="https://ik.imagekit.io/vclgut93d/showiz-logo.png?updatedAt=1701657840160"
              className="rotating"
              />  
            <Text size="32px" fw={900} mt="md" variant="gradient" gradient={{ from: 'red', to: 'indigo', deg: 72 }}>We Welcome You!</Text>
            <Button mt="md">Get Started<IconArrowNarrowRight /></Button>
          </Flex>
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
      </Container>
    </BasicAppShell>
  );
}

export default Demo;