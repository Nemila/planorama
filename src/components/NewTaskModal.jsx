import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";

const NewTaskModal = ({ eventId }) => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:3000/api/addTask", {
      ...data,
      eventId,
    });
    if (response.data) {
      reset();
      console.log(response.data);
      router.reload(router.asPath);
    }
  };

  return (
    <>
      <input type="checkbox" id="newTaskModal" className="modal-toggle" />

      <label
        className="modal modal-bottom sm:modal-middle"
        htmlFor="newTaskModal"
      >
        <label className="modal-box relative bg-base-200" htmlFor="">
          <label
            htmlFor="newTaskModal"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>

          <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">
              <span className="label-text">What&apos; the task?</span>
            </label>

            <div className="input-group">
              <input
                type="text"
                className="input w-full"
                placeholder="Type here..."
                {...register("label", { required: true })}
              />
              <button htmlFor="newTaskModal" className="btn" type="submit">
                <HiPlus className="text-2xl" />
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default NewTaskModal;
