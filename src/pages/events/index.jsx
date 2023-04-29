import EventCard from "@/components/EventCard";
import NewEventForm from "@/components/NewEventForm";
import { getServerSession } from "next-auth";
import useSWR from "swr";
import { authOptions } from "../api/auth/[...nextauth]";
import Spinner from "@/components/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Events = ({ session }) => {
  const { data, error, isLoading } = useSWR("/api/events", fetcher);

  if (error) return <div className="p-4">Oops something went wrong</div>;
  if (isLoading) return <Spinner />;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap-reverse items-end gap-8">
        <div className="flex-1">
          <h2 className="mb-4 text-2xl font-semibold">List of events</h2>
          <div className="flex flex-wrap gap-4">
            {data.length > 0 ? (
              data.map((event) => <EventCard key={event.id} event={event} />)
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

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

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

export default Events;
