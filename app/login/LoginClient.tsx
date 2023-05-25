'use client';
import React from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import logo from '@/app/components/Logo.svg';

const LoginClient = () => {
  const handleLogin = () => {
    // Handle login logic
  };

  const handleGoogleLogin = () => {
    // Handle login with Google logic
  };

  return (
    <Flex minH='100vh' align='center' justify='center' bg='gray.50' p={4}>
      <Box
        bg='white'
        p={8}
        borderRadius='md'
        boxShadow='lg'
        maxW='400px'
        w='100%'
      >
        <Flex direction='column' align='center' mb={8}>
          <Image src={logo} alt='Logo' h='80px' mb={4} />
          <Heading as='h2' size='xl' textAlign='center' mb={4}>
            Welcome!
          </Heading>
          <Text fontSize='sm' color='gray.500'>
            Log in to access your account
          </Text>
        </Flex>
        <Stack spacing={4}>
          <Input
            type='email'
            placeholder='Email'
            required
            size='lg'
            borderRadius='md'
            bg='gray.100'
            _hover={{ bg: 'gray.200' }}
          />
          <Input
            type='password'
            placeholder='Password'
            required
            size='lg'
            borderRadius='md'
            bg='gray.100'
            _hover={{ bg: 'gray.200' }}
          />
          <Button
            colorScheme='facebook'
            _hover={{ bg: 'facebook.300' }}
            size='lg'
            borderRadius='md'
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Divider />
          <Button
            variant={'outline'}
            leftIcon={<FcGoogle />}
            size='lg'
            borderRadius='md'
            onClick={handleGoogleLogin}
            fontSize={{ base: '15px', md: '17px', lg: '18px' }}
          >
            Sign In with Google
          </Button>
          <Button
            variant={'outline'}
            leftIcon={<FaGithub />}
            size='lg'
            borderRadius='md'
            onClick={handleGoogleLogin}
            fontSize={{ base: '15px', md: '17px', lg: '18px' }}
          >
            Sign In with Github
          </Button>
          <Text textAlign='center' mt={4}>
            Don&apos;t have an account?{' '}
            <Link color='facebook.600' href='/signup'>
              Sign Up
            </Link>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginClient;
