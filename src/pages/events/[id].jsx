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
          <figure className="max-w-xl">
            <Image
              src={`https://vwpobyxervyuezweoaju.supabase.co/storage/v1/object/public/events/${data.image}`}
              className=""
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

          <label htmlFor="newTaskModal" className="btn-primary btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clip-rule="evenodd"
              />
            </svg>
            New Tasks
          </label>
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
