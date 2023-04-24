import React from "react";

const DeleteModal = ({ handleEventDelete }) => {
  return (
    <>
      <input type="checkbox" id="eventDeleteModal" className="modal-toggle" />

      <label
        className="modal modal-bottom sm:modal-middle"
        htmlFor="eventDeleteModal"
      >
        <label className="modal-box" htmlFor="">
          <h3 className="text-lg font-bold">Delete Event</h3>
          <p className="py-4">
            Are you sure you want to delete this event? This action cannot be
            undone.
          </p>
          <div className="modal-action">
            <label htmlFor="eventDeleteModal" className="btn-danger btn">
              Cancel
            </label>

            <label
              htmlFor="eventDeleteModal"
              className="btn-error btn"
              onClick={handleEventDelete}
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteModal;
