import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { themeContext } from '@/Contexts/ContextVariables';
import { useContext } from 'react';
import Link from 'next/link';
type props = {
  route: string;
  content: string;
};
function NavLink(props: props) {
  return (
    <Link href={props.route}>
      <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        {props.content}
      </Box>
    </Link>
  );
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setOpen } = useContext(themeContext);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={'100vw'} position="fixed" top="0px">
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'85vw'}
          padding={'0px'}
          flexDirection={'row'}
        >
          <Box fontSize={'1.7rem'}>
            <NavLink route="/" content="QR System" />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={() => setOpen(true)}>Sign In</Button>
              <Button>Sign Up</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}