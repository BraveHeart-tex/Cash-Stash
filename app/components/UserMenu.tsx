'use client';
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

interface IUserMenuProps {}

const UserMenu = ({}: IUserMenuProps) => {
  const userName = 'Bora Karaca';
  const userAvatar = 'https://avatars.githubusercontent.com/u/1024025?v=4';
  const handleLogout = () => {};
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
        bg={'transparent'}
      >
        <Avatar
          src={userAvatar}
          name={userName}
          bg={useColorModeValue('gray.200', 'gray.700')}
          color={useColorModeValue('gray.600', 'gray.200')}
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar
            src={userAvatar}
            name={userName}
            bg={useColorModeValue('gray.200', 'gray.700')}
            color={useColorModeValue('gray.600', 'gray.200')}
            size={'xl'}
          />
        </Center>
        <br />
        <Center>
          <p>{userName}</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
