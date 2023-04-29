import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import DeleteModal from "./DeleteModal";

const EventCard = ({ event }) => {
  const { mutate } = useSWRConfig();

  const handleEventDelete = async () => {
    try {
      await axios.delete(`/api/event/${event.id}`);
      mutate("/api/events");
      toast("Event deleted with success.");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div
        id={event.id}
        className="card compact min-w-[300px] max-w-md flex-1 bg-base-100 shadow-md"
      >
        <figure className="h-32 w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            alt="banner"
            width={99999}
            height={99999}
            src={`https://vwpobyxervyuezweoaju.supabase.co/storage/v1/object/public/events/${event?.image}`}
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
            <label htmlFor={`deleteEventModal-${event.id}`} className="btn">
              Delete
            </label>
          </div>
        </div>
      </div>

      <DeleteModal handleEventDelete={handleEventDelete} eventId={event.id} />
    </>
  );
};

export default EventCard;
