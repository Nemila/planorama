// react fullcallendar
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

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

  const response = await prisma.event.findMany({
    where: {
      userId: user.id,
    },
    select: {
      name: true,
      startAt: true,
    },
  });

  const events = response.map((event) => ({
    title: event.name,
    date: event.startAt,
  }));
  return {
    props: {
      events: JSON.parse(JSON.stringify(events)),
    },
  };
};

const MyCalendar = ({ events }) => {
  return (
    <div className="mt-16 md:p-4">
      <div className="bg-white md:p-2">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          //   dateClick={handleDateClick}
          events={events}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
