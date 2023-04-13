import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box p={8} bg="black" textColor="white">
      <Container maxW="container.xl">
        <Text fontSize="sm" textAlign="center">
          Planorama - Events planing and management - contactPlanorama@gmail.com
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
