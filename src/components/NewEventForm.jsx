import supabase from "@/lib/supabase";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 } from "uuid";

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

    // image upload
    const formData = new FormData();
    formData.append("file", data.image[0]);
    const fileName = data.name.toLowerCase().split(" ").join("_") + v4();
    const { data: imageData, error } = await supabase.storage
      .from("events")
      .upload(fileName, formData, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log(error);
    }
    console.log(imageData.path);

    const res = await axios.post("http://localhost:3000/api/addEvent", {
      ...data,
      image: imageData.path,
    });

    if (res.data) {
      reset();
      toast("Event created with success.");
      router.replace(router.asPath);
    }
  };

  return (
    <form
      className="grid max-w-md grid-cols-2 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="col-span-2 text-2xl font-semibold">Create an event</h2>
      
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

      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text">Pick an image</span>
        </label>
        <input
          type="file"
          className="file-input-bordered file-input"
          {...register("image")}
        />
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

{
  /* <img src="[supabase_url]/storage/v1/object/public/[bucket name]/[path to your image]" /> */
}
