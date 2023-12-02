import { AppShell, Container, Button, CloseButton, Flex, Stack, NavLink } from '@mantine/core';
import { IconBrandGoogleFilled, IconChevronRight, IconGauge } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

export function BaseLayout(props: React.PropsWithChildren<any>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  

  return (
    <AppShell
    header={{ height: { base: 48, sm: 60, lg: 76 } }}
    >
      <AppShell.Header>
        <Container px={0} size="40rem">
          <IconBrandGoogleFilled />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        {props.children} 
      </AppShell.Main>
    </AppShell>
  );                                       
}

export default BaseLayout;