import { AppShell, Container } from '@mantine/core';
import { IconBrandGoogleFilled } from '@tabler/icons-react';

export function CollapseDesktop(props: React.PropsWithChildren<any>) {


  return (
    <AppShell
    header={{ height: { base: 48, sm: 60, lg: 76 } }}
    padding={{ base: 30 }}
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

export default CollapseDesktop;