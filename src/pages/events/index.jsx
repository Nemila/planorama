import EventCard from "@/components/EventCard";
import NewEventForm from "@/components/NewEventForm";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

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
      events: JSON.parse(JSON.stringify(events)),
    },
  };
};

const Events = ({ events }) => {
  return (
    // <Box py={4}>
    //   <Container maxW="container.xl">
    //     <Flex gap={4} flexWrap="wrap-reverse" align="flex-end">
    //       <Flex flex={2} flexWrap="wrap" gap={4}>
    //         <Text w="full" fontSize="xl" fontWeight="medium">
    //           Your events list
    //         </Text>

    //         {events.length > 0 ? (
    //           events.map((event) => <EventCard key={event.id} event={event} />)
    //         ) : (
    //           <Text>There is nothing here yet.</Text>
    //         )}
    //       </Flex>

    //       <NewEventForm />
    //     </Flex>
    //   </Container>
    // </Box>

    <div className="container mx-auto p-6">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl font-semibold">Your events list</h2>
          <div className="flex flex-wrap gap-4">
            {events.length > 0 ? (
              events.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <p>There is nothing here yet.</p>
            )}
          </div>
        </div>

        <NewEventForm />
      </div>
    </div>
  );
};

export default Events;
