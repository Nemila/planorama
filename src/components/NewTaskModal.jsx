import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";
import { useSWRConfig } from "swr";

const NewTaskModal = ({ eventId }) => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useSWRConfig();

  const onSubmit = async (data) => {
    try { 
      const response = await axios.post("/api/tasks", {
        ...data,
        eventId,
      });
      if (response.data) {
        reset();
        mutate(`/api/event/${eventId}`);
      }
    } catch (error) {
      console.log(error.response.data);
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

              <button className="btn" type="submit">
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
