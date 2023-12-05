import {  Button, TextInput, PasswordInput, Image, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import BasicAppShell from '../Components/Layouts/Onboarding';
import { loginUser } from '../api/moviesApi';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate, useParams } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useLocalStorage({key:'userData'});
  const {callback} = useParams();
  const navigator = useNavigate();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
        return {
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
    },
  });



  const handleLogin = async () => {
    try{
      const response = await loginUser(form.values);
      const {data} = response?.data;
      data && setUser(data);
      callback ? navigator(callback): navigator('/home');

    }catch(error){
      console.log(error);
    }
  }


  return (
    <BasicAppShell>
    <Box maw={400} mx="auto">
        <Image
          h={300}
          fit="contain"
          radius="50%" src="https://ik.imagekit.io/vclgut93d/WizardWelcome.png?updatedAt=1701667168292"
        />
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <Button type="submit" mt="sm" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Box>
    </BasicAppShell>
  );
}

export default Signup;