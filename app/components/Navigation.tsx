'use client';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
  Stack,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={4}>
      <Flex justify='space-between' align='center'>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label='Menu'
          variant='ghost'
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
        />
        <Heading size='lg'>FinanceBuddy</Heading>
        <IconButton
          onClick={toggleColorMode}
          aria-label='Toggle color mode'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link href='/'>Dashboard</Link>
              <Link href='/accounts'>Accounts</Link>
              <Link href='/budgets'>Budgets</Link>
              <Link href='/goals'>Goals</Link>
              <Link href='/transactions'>Transactions</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navigation;
