import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <Flex p={4} justifyContent="center" bg="linkedin.500">
      <Flex
        maxW="lg"
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        textColor="white"
        gap={4}
      >
        <Heading>Your go-to platform for event management.</Heading>

        <Text fontSize="lg">
          From planning to execution, we&apos;ve got you covered.
        </Text>

        <Button as={Link} href="/events" size="lg" textColor="linkedin.500">
          Explore the platform
        </Button>
      </Flex>

      <Box>
        <Image
          sx={{
            objectFit: "contains",
            w: "100%",
          }}
          src="/illustration.svg"
          alt="planner illus"
          width={450}
          height={900}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
