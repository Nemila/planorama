import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { getProviders, getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { authOptions } from "../api/auth/[...nextauth]";

import { FaGoogle, FaGithub } from "react-icons/fa";

const SignIn = ({ providers }) => {
  const router = useRouter();
  const { error } = router.query;
  console.log(error);

  return (
    <Flex align="center" flex={1}>
      <Container maxW="sm" bg="gray.900" p={6} rounded="lg">
        <VStack spacing={4}>
          {providers &&
            Object.values(providers).map((provider) => (
              <Box key={provider.name} w="full">
                <Button
                  colorScheme="blue"
                  w="full"
                  onClick={() => signIn(provider.id)}
                >
                  Se connecter avec {provider.name}
                </Button>
              </Box>
            ))}

          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
        </VStack>
      </Container>
    </Flex>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: { destination: "/events" },
    };
  }

  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};

export default SignIn;
