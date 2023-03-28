import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiSparkles } from "react-icons/hi2";

const Navbar = () => {
  return (
    <Box p={4} bg="gray.900">
      <Container maxW="container.xl">
        <Flex>
          <Button
            leftIcon={<HiSparkles size={24} />}
            fontSize={18}
            variant="link"
          >
            Planorama
          </Button>

          <Spacer />

          <HStack>
            <Button variant="ghost" as={Link} href="/events">
              Evenements
            </Button>
            <Button variant="ghost">Profile</Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
