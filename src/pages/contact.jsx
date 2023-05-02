import React from "react";

const Contact = () => {
  return (
    <main className="flex flex-grow items-center justify-center">
      <form className="w-full max-w-md p-4">
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
            />
          </div>

          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="textarea"
              placeholder="Type here..."
            ></textarea>
          </div>

          <button className="btn-primary btn w-full">Send message</button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
