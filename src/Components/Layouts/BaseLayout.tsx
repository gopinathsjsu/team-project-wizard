import { AppShell, Container, Group, } from '@mantine/core';

import classes from './header.module.css';

import ShowizLogo from './showizLogo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const links = [
  { link: '/about', label: 'About' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
]

export function BaseLayout(props: React.PropsWithChildren<any>) {
  const navigate = useNavigate();
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <AppShell
      header={{ height: { base: 48, sm: 60, lg: 76 } }}
    >
      <AppShell.Header>
        <Container size="md" className={classes.inner}>
          <div onClick={() => navigate('/home')} style={{ display: 'flex' }}>
            <img src={ShowizLogo} alt='Showiz' className={classes.headerIcon} />
          </div>
          <Group gap={20} visibleFrom="md">
            {items}
          </Group>
        </Container>
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
