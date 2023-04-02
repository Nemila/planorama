import EventDetails from "@/components/EventDetails";
import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import prisma from "@/lib/prisma";


export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const events = await prisma.event.findMany({
    where: {
      userId: user.id,
    },
  });

  return {
    props: {
      session,
      events: JSON.parse(JSON.stringify(events)),
    },
  };
};

const Events = ({ session, events }) => {
  return (
    <Box py={4}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={4}>
          {events.map((event) => (
            <GridItem key={event.id}>
              <EventDetails event={event} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Events;
