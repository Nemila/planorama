import React from "react";
import { HiPlus } from "react-icons/hi2";

const NewTaskModal = () => {
  return (
    <>
      <input type="checkbox" id="newTaskModal" className="modal-toggle" />

      <label
        className="modal modal-bottom sm:modal-middle"
        htmlFor="newTaskModal"
      >
        <label className="modal-box bg-base-200" htmlFor="">
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text">What&apos; the task?</span>
            </label>

            <div className="input-group">
              <input
                type="text"
                className="input w-full"
                placeholder="Type here..."
              />
              <button className="btn">
                <HiPlus className="text-2xl" />
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default NewTaskModal;
