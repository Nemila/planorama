import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import DeleteModal from "./DeleteModal";
import { toast } from "react-toastify";
import Image from "next/image";

const EventCard = ({ event }) => {
  const router = useRouter();

  const handleEventDelete = async () => {
    await axios.delete(`http://localhost:3000/api/event/${event.id}`);
    toast("Event deleted with success.");
    router.replace(router.asPath);
  };

  return (
    <>
      <div className="card compact min-w-[300px] max-w-md flex-1 bg-base-100 shadow-md">
        <figure className="h-32 w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            alt="banner"
            width={99999}
            height={99999}
            src={`https://heluvngkkydwiankayff.supabase.co/storage/v1/object/public/events/${event?.image}`}
          />
        </figure>
        <div className="card-body">
          <div
            className={`badge ${
              event.status === "ONGOING" && "badge-primary"
            } ${event.status === "FINISHED" && "badge-secondary"}`}
          >
            {event.status}
          </div>
          <h2 className="card-title line-clamp-1">{event.name}</h2>
          <p className="line-clamp-2">{event.description}</p>
          <div className="card-actions justify-end">
            <Link className="btn-primary btn" href={`/events/${event.id}`}>
              Details
            </Link>
            <label htmlFor="eventDeleteModal" className="btn">
              Delete
            </label>
          </div>
        </div>
      </div>

      <DeleteModal handleEventDelete={handleEventDelete} />
    </>
  );
};

export default EventCard;
