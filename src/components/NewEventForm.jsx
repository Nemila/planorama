import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const NewEventForm = () => {
  const router = useRouter();
  // const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // date validation
    const today = new Date().getTime();
    const startAt = new Date(data.startAt).getTime();
    const endAt = new Date(data.endAt).getTime();
    const isDateError = startAt < today || endAt < today || startAt >= endAt;
    if (isDateError) {
      return toast("Invalid date range.", {
        type: "error",
      });
    }

    const res = await axios.post("http://localhost:3000/api/addEvent", data);
    if (res.data) {
      reset();
      toast("Event created with success.");
      router.replace(router.asPath);
    }
  };

  return (
    <form
      className="grid max-w-md grid-cols-2 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          className="input-bordered input"
          placeholder="Type here..."
          {...register("name", { required: true })}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">From</span>
        </label>
        <input
          type="datetime-local"
          className="input-bordered input"
          placeholder="Type here..."
          {...register("startAt", { required: true })}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">To</span>
        </label>
        <input
          type="datetime-local"
          className="input-bordered input"
          placeholder="Type here..."
          {...register("endAt", { required: true })}
        />
      </div>

      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          className="input-bordered input"
          placeholder="Type here..."
          {...register("location", { required: true })}
        />
      </div>

      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          {...register("description", { required: true })}
          className="textarea-bordered textarea h-24"
          placeholder="Something about the event..."
        ></textarea>
      </div>

      <button
        type="submit"
        className={`btn-primary btn col-span-2 w-full ${
          isSubmitting && "loading"
        }`}
      >
        Create Event
      </button>
    </form>
  );
};

export default NewEventForm;
