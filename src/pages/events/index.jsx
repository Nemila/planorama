import EventDetails from "@/components/EventDetails";
import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Events = () => {
  return (
    <Box py={4}>
      <Container maxW="container.xl">
        <SimpleGrid columns={4} gap={4}>
          <GridItem>
            <EventDetails />
          </GridItem>

          <GridItem>
            <EventDetails />
          </GridItem>

          <GridItem>
            <EventDetails />
          </GridItem>

          <GridItem>
            <EventDetails />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Events;
