import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/sendgrid", data);
      if (isSubmitSuccessful) {
        toast("Thank you for contacting us!");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-grow items-center justify-center">
      <form className="w-full max-w-md p-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl">Send a message</h1>

        <div className="flex flex-col gap-2">
          <div className="form-control">
            <label htmlFor="fullname" className="label">
              <span className="label-text">Full name</span>
            </label>

            <input
              id="fullname"
              type="text"
              className="input"
              placeholder="Type here..."
              {...register("fullname", { required: true })}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">E-mail</span>
            </label>

            <input
              id="email"
              type="email"
              className="input"
              placeholder="Type here..."
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-control">
            <label htmlFor="subject" className="label">
              <span className="label-text">Subject</span>
            </label>

            <input
              id="subject"
              type="text"
              className="input"
              placeholder="Type here..."
              {...register("subject", { required: true })}
            />
          </div>

          <div className="form-control">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              className="textarea"
              placeholder="Type here..."
              {...register("message", { required: true })}
            ></textarea>
          </div>

          <button
            className={`btn-primary btn w-full ${isSubmitting && "loading"}`}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
