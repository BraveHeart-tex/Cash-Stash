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
import Logo from '@/app/components/Logo.svg';
import { FaGithub } from 'react-icons/fa';
import { CldUploadWidget } from 'next-cloudinary';

const SignUpClient = () => {
  const handleSignUp = () => {
    // Handle SignUp logic
  };

  const handleGoogleLogin = () => {
    // Handle login with Google logic
  };

  return (
    <Flex minH='100vh' align='center' justify='center' bg='gray.100' p={4}>
      <Box
        bg='white'
        p={8}
        borderRadius='md'
        boxShadow='lg'
        maxW='400px'
        w='100%'
      >
        <Flex direction='column' align='center' mb={8}>
          <Image src={Logo} alt='Logo' h='80px' mb={4} />
          <Heading as='h2' size='xl' textAlign='center' mb={4}>
            Create an Account
          </Heading>
          <Text fontSize='sm' color='gray.500'>
            Get started by creating a new account
          </Text>
        </Flex>
        <Stack spacing={4}>
          <Input
            type='text'
            placeholder='Full Name'
            required
            size='lg'
            borderRadius='md'
            bg='gray.100'
            _hover={{ bg: 'gray.200' }}
          />
          <Input
            type='email'
            placeholder='Email'
            size='lg'
            borderRadius='md'
            bg='gray.100'
            _hover={{ bg: 'gray.200' }}
          />
          <Input
            type='password'
            placeholder='Password'
            size='lg'
            borderRadius='md'
            bg='gray.100'
            _hover={{ bg: 'gray.200' }}
          />
          <Input
            type='password'
            placeholder='Confirm Password'
            size='lg'
            borderRadius='md'
            bg='gray.100'
            _hover={{ bg: 'gray.200' }}
          />
          <Box
            bg={'blue.400'}
            transition={'all .3s ease'}
            _hover={{ bg: 'blue.500' }}
            color={'white'}
            rounded={'md'}
            p={2}
            cursor={'pointer'}
            textAlign={'center'}
          >
            <CldUploadWidget uploadPreset='ck2nb1my'>
              {({ open }) => {
                function handleOnClick(e: any) {
                  e.preventDefault();
                  open();
                }
                return (
                  <button className='button' onClick={handleOnClick}>
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </Box>
          <Button
            size='lg'
            colorScheme='facebook'
            _hover={{ bg: 'facebook.300' }}
            borderRadius='md'
            onClick={handleSignUp}
          >
            Sign Up
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
            Sign Up with Google
          </Button>
          <Button
            variant={'outline'}
            leftIcon={<FaGithub />}
            size='lg'
            borderRadius='md'
            onClick={handleGoogleLogin}
            fontSize={{ base: '15px', md: '17px', lg: '18px' }}
          >
            Sign Up with Github
          </Button>
          <Text textAlign='center' mt={4}>
            Already have an account?{' '}
            <Link color='facebook.600' href='/login'>
              Log In
            </Link>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SignUpClient;
