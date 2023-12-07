import { IconBrandGoogleFilled, IconChevronRight, IconGauge } from '@tabler/icons-react';
import {CloseButton, Flex, Stack, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Navbar = () => {

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <Stack p="sm" gap="0">
    <Flex justify="flex-end">
      <CloseButton onClick={toggleDesktop} visibleFrom="sm"/>
      <CloseButton onClick={toggleMobile} hiddenFrom="sm"/>
    </Flex>
    <NavLink
      label="With right section"
      leftSection={<IconGauge size="1rem" stroke={1.5} />}
      rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
    />
    <NavLink
      label="With right section"
      leftSection={<IconGauge size="1rem" stroke={1.5} />}
      rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
    />
    <NavLink
      label="With right section"
      leftSection={<IconGauge size="1rem" stroke={1.5} />}
      rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
    />
  </Stack>
  )
}

export default Navbar;