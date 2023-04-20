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
import { HiSparkles, HiUser } from "react-icons/hi2";

const navLinks = [
  {
    label: "Solutions",
    link: "/solutions",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Support",
    link: "/support",
  },
  {
    label: "Resources",
    link: "/resources",
  },
];

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box px={4} py={6} textColor="black" bg="white">
      <Container maxW="container.xl">
        <Flex align="center" gap={8}>
          <Button
            leftIcon={<HiSparkles size={24} />}
            variant="link"
            textColor="inherit"
            as={Link}
            href="/"
            fontSize="lg"
            _hover={{
              textDecoration: "none",
              color: "linkedin.500",
            }}
          >
            Planorama
          </Button>

          <HStack gap={6}>
            {navLinks.map((navLink) => (
              <Button
                key={navLink.link}
                href={navLink.link}
                as={Link}
                variant="link"
                textColor="inherit"
                _hover={{
                  textDecoration: "none",
                  color: "linkedin.500",
                }}
              >
                {navLink.label}
              </Button>
            ))}
          </HStack>

          <Spacer />

          {session ? (
            <>
              <Button
                variant="link"
                textColor="inherit"
                _hover={{
                  textDecoration: "none",
                  color: "linkedin.500",
                }}
                as={Link}
                href="/events"
              >
                Events
              </Button>

              <Button
                textColor="inherit"
                href="/profile"
                variant="link"
                as={Link}
                gap={4}
                _hover={{
                  textDecoration: "none",
                  color: "linkedin.500",
                }}
              >
                <Text>Profile</Text>
              </Button>
              <Button
                variant="link"
                textColor="inherit"
                _hover={{
                  textDecoration: "none",
                  color: "linkedin.500",
                }}
                onClick={signOut}
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              _hover={{
                textDecoration: "none",
                color: "linkedin.500",
              }}
              variant="link"
              onClick={signIn}
              textColor="inherit"
              leftIcon={<HiUser size={24} />}
            >
              Log in
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
