import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import DeleteModal from "./DeleteModal";
import moment from "moment/moment";
import { HiCalendar, HiChevronDown, HiMapPin, HiTrash } from "react-icons/hi2";

const EventCard = ({ event }) => {
  const { mutate } = useSWRConfig();

  const startDate = moment(event.startAt);
  const updatedAt = [
    moment(event.updatedAt).year(),
    moment(event.updatedAt).month(),
    moment(event.updatedAt).date(),
  ];

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
        <figure className="h-32 overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            alt="banner"
            width={99999}
            height={99999}
            src={`https://vwpobyxervyuezweoaju.supabase.co/storage/v1/object/public/events/${event?.image}`}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title line-clamp-1">{event.name}</h2>

          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <HiCalendar className="text-lg" />
              <p className="text-xs">{startDate.format("LL")}</p>
            </div>

            <div className="flex items-center gap-1">
              <HiMapPin className="text-lg" />
              <p className="text-xs">{event.location}</p>
            </div>
          </div>

          <p className="my-2 line-clamp-2">{event.description}</p>

          <p className="text-xs">Last update {moment(updatedAt).fromNow()}</p>

          <div className="card-actions justify-end">
            <div className="btn-group">
              <Link className="btn" href={`/events/${event.id}`}>
                Edit
              </Link>
              <label
                htmlFor={`deleteEventModal-${event.id}`}
                className="btn-outline btn-square btn"
              >
                <HiTrash className="text-xl" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal handleEventDelete={handleEventDelete} eventId={event.id} />
    </>
  );
};

export default EventCard;
