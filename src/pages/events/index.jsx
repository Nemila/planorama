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
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap-reverse items-end gap-8">
        <div className="flex-1">
          <h2 className="mb-4 text-2xl font-semibold">List of events</h2>
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
