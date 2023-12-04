import { BackgroundImage, Box, Button, Center, Flex, Image, Text, Card, Paper, Container, List, ThemeIcon, rem } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { User } from '../../../Interfaces/UserInterface';
interface MemberBannerProps {
  user: User | undefined
}
const MembershipBanner: React.FC<MemberBannerProps> = ({user}) => {
  const navigator = useNavigate();
  const MemberOffers = [
    "Special Member Discounts",
    "Rewards With Everybooking",
    "Service Fees Waiver Off!",
    "The Best Seats in the house"
  ]
  return (
    <Box maw={600}>
      <Text mr="lg" mb="sm" ta="start" size="32px" fw={900}>{user?.memberShipType ? "Your Membership gives You!" : "The Wizard has a gift for You!" }</Text>
      <Paper shadow="sm" p={0} radius="md" withBorder>
        <Flex w={"100%"} align="center" justify="center">
          <Image w="60%" src={"https://ik.imagekit.io/vclgut93d/DALL_E%202023-12-03%2023.27.53%20-%20Place%20the%20exact%20same%20cartoon%20wizard%20from%20the%20previous%20image%20in%20a%20scenario%20where%20he%20is%20watching%20a%20movie.%20The%20wizard%20should%20be%20in%20a%20comfortable%20and%20rela.png?updatedAt=1701674998172"} />
          <Container w="40%">
            <List
              spacing="xs"
              size="sm"
              center
              fw={500}
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              {MemberOffers.map((offer)=>(<List.Item mt="md">{offer}</List.Item>))}
              
            </List>
            <Center mt="xl" >
              {!user?.memberShipType && <Button variant="outline" onClick={()=>navigator("/signup?callback=/home")}>Become a member</Button>}
            </Center>
          </Container>
        </Flex>
      </Paper>
    </Box>
  )
}

export default MembershipBanner;