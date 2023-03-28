import EventDetails from "@/components/EventDetails";
import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const Events = ({ session }) => {
  return (
    <Box py={4}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={4}>
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
