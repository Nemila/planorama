import {
  HiCake,
  HiGift,
  HiPresentationChartBar,
  HiUsers,
} from "react-icons/hi2";

const EventTypes = () => {
  return (
    <section className="bg-base-100 p-8">
      <div className="container mx-auto flex min-h-[325px] flex-col items-center justify-center gap-8">
        <div className="prose mx-auto max-w-md text-center">
          <h2>All kind of events</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sed totam.
          </p>
        </div>

        <div className="flex gap-6 text-primary">
          <div className="flex flex-col items-center gap-2 text-center">
            <HiGift className="text-3xl" />
            <p className="text-xs">Birthday</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <HiCake className="text-3xl" />
            <p className="text-xs">Wedding</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <HiUsers className="text-3xl" />
            <p className="text-xs">Conference</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <HiPresentationChartBar className="text-3xl" />
            <p className="text-xs">Meeting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
