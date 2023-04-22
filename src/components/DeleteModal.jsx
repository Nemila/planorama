import React from "react";

const DeleteModal = ({ handleEventDelete }) => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete Event</h3>
          <p className="py-4">
            Are you sure you want to delete this event? This action cannot be
            undone.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn-danger btn">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn-error btn"
              onClick={handleEventDelete}
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
