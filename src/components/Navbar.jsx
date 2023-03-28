import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
  }

  return (
    <Box p={3} bg="gray.900">
      <Container maxW="container.xl">
        <Flex align="center">
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<HiSparkles size={18} />}
            variant="ghost"
            as={Link}
            href="/"
          >
            Planorama
          </Button>

          <HStack>
            {session ? (
              <>
                <Button
                  size="sm"
                  colorScheme="blue"
                  variant="ghost"
                  as={Link}
                  href="/events"
                >
                  Evenements
                </Button>
                <Button
                  size="sm"
                  colorScheme="blue"
                  variant="ghost"
                  as={Link}
                  href="/events/add"
                >
                  Creer un event
                </Button>
                <Button
                  size="sm"
                  colorScheme="blue"
                  variant="ghost"
                  onClick={signOut}
                >
                  Se deconnecter
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                colorScheme="blue"
                variant="ghost"
                onClick={signIn}
              >
                Rejoindre
              </Button>
            )}
          </HStack>

          <Spacer />

          {session && (
            <Button href="/profile" as={Link} variant="link" gap={4}>
              <Text fontSize="sm">{session.user.email}</Text>
              <Avatar
                src={session.user.image}
                name={session.user.name}
                w={8}
                h={8}
              />
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
