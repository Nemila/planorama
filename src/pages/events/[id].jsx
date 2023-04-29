import NewTaskModal from "@/components/NewTaskModal";
import Spinner from "@/components/Spinner";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { HiCheck, HiMapPin, HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EventPage = ({ session }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/event/${id}`, fetcher);

  if (error) return <div className="p-4">Oops something went wrong</div>;
  if (isLoading) return <Spinner />;

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-8 p-8">
        <div className="flex-1 space-y-4">
          <figure className="group h-56 w-full overflow-hidden">
            <Image
              src={`https://vwpobyxervyuezweoaju.supabase.co/storage/v1/object/public/events/${data.image}`}
              className="h-full w-full object-cover object-center transition-transform group-hover:scale-125"
              width={999999}
              height={999999}
              title={data.name}
              alt={data.name}
              priority
            />
          </figure>

          <div className="prose">
            <h3>{data.name}</h3>

            <p className="flex items-center gap-2">
              <HiMapPin className="text-2xl" />
              {data.location}
            </p>

            <p>
              Event Status <span className="badge">{data.status}</span>
            </p>

            <p>{data.description}</p>
          </div>
        </div>

        <div className="min-w-sm w-full max-w-md space-y-6">
          <h3 className="text-xl font-semibold">Event Checklist</h3>

          <div>
            {data.tasks.length > 0 ? (
              data.tasks.map((task) => (
                <div className="form-control" key={task.id}>
                  <label className="label cursor-pointer gap-4">
                    <span className="label-text">{task.label}</span>
                    <input
                      defaultChecked={task.isCompleted}
                      type="checkbox"
                      className="checkbox-primary checkbox"
                    />
                  </label>
                </div>
              ))
            ) : (
              <p>No task created yet.</p>
            )}
          </div>

          <div className="btn-group">
            <label htmlFor="newTaskModal" className="btn gap-2">
              <HiPlus className="text-xl" />
              Create
            </label>
            <button className="btn-primary btn gap-2">
              <HiCheck className="text-xl" />
              Submit
            </button>
          </div>
        </div>
      </div>

      <NewTaskModal eventId={data.id} />
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

export default EventPage;
