import { Center } from '@mantine/core'
import { Text } from "@mantine/core"
import { Link } from "react-router-dom";
function index() {
  return (
    <Center>
      <Text size="lg">Under Construction! </Text>
      <Text> please step to the side to: </Text>
      <Link to="login" >
        Login Page
      </Link>
    </Center>
  )
}

export default index;