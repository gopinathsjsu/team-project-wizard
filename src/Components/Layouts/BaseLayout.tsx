import { AppShell, Avatar, Button, Container, Group, } from '@mantine/core';

import classes from './header.module.css';

import ShowizLogo from './showizLogo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { User } from '../../Interfaces/UserInterface';


const links = [
  { link: '/home', label: 'Home' },
  { link: '/theaters/listtheaters', label: 'Theaters' },
  { link: '/managebookings/', label: 'Manage Bookings' },
  { link: '/learn', label: 'Learn' },
]

const Header = () => {
  const [active, setActive] = useState('/home');
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage({key: 'userData'});
  console.log("This is the user ",user);
  const items = links.map((link) => (
    <Button
      key={link.label}
      className={classes.link + ' ' + 'change-on-hover'}
      variant="subtle"
      data-active={active === link.link || undefined}
      onClick={(event) => {
        navigate(link.link);
        setActive(link.link);
      }}
    >
      {link.label}
    </Button>
  ));
  console.log(user)

  const isLoggedIn = !!user;

  const getLoginAndSignupButtons = () => {
    return (
      <div style={{ display: 'flex' }}>
        <Button onClick={() => navigate('/login')}>Login</Button>
        <Button onClick={() => navigate('/signup')} variant='outline' style={{ marginLeft: 10 }}>Signup</Button>
      </div>
    );
  }

  const getAvatarUI = () => {

    return <Avatar size="md" />
  }
  return (
    <Container size="md" className={classes.inner}>
      <div style={{ display: 'flex' }}>
        <div onClick={() => navigate('/home')} style={{ display: 'flex' }}>
          <img src={ShowizLogo} alt='Showiz' className={classes.headerIcon} />
        </div>
        <Group gap={20} visibleFrom="md">
          {items}
        </Group>
      </div>
      {!isLoggedIn ? getLoginAndSignupButtons() : getAvatarUI()}

    </Container>
  );
}

export function BaseLayout(props: React.PropsWithChildren<any>) {
  return (
    <AppShell
      header={{ height: { base: 48, sm: 60, lg: 76 } }}
    >
      <AppShell.Header bg="#333545">
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <div style={{ margin: "auto" }}>
          {props.children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default BaseLayout;
