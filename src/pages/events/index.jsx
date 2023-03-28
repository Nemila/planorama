import EventDetails from "@/components/EventDetails";
import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import React from "react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const Events = ({ user }) => {
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
