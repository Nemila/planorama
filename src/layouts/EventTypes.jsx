import {
  Box,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiMicrophone } from "react-icons/hi2";

const eventTypes = [
  {
    icon: <HiMicrophone size={24} />,
    label: "Conference",
  },
  {
    icon: <HiMicrophone size={24} />,
    label: "Trade shows & exhibitions",
  },
  {
    icon: <HiMicrophone size={24} />,
    label: "Workshops & training events",
  },
  {
    icon: <HiMicrophone size={24} />,
    label: "VIP & leadership events",
  },
  {
    icon: <HiMicrophone size={24} />,
    label: "Roundtables & summits",
  },
  {
    icon: <HiMicrophone size={24} />,
    label: "Networking events",
  },
];

const EventTypes = () => {
  return (
    <Box px={6} py={12}>
      <Container maxW="container.xl">
        <VStack gap={6}>
          <Box maxW="2xl" textAlign="center">
            <Heading size="lg" mb={4}>
              Any event, every event
            </Heading>
            <Text fontSize="md">
              Whether you run one event or hundreds, planorama helps you create
              engaging, impactful events. In-person, virtual, hybrid, and
              webinars — we&apos;ve got you covered.
            </Text>
          </Box>

          <SimpleGrid gap={8} columns={3}>
            {eventTypes.map((eventType) => (
              <GridItem key={eventType.label}>
                <HStack key={eventType.label} color="linkedin.500">
                  {eventType.icon}
                  <Heading color="black" size="md">
                    {eventType.label}
                  </Heading>
                </HStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default EventTypes;
