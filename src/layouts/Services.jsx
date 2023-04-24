import React from "react";

const Services = () => {
  return (
    <section className="bg-primary p-8">
      <div className="container mx-auto flex min-h-[325px] flex-col items-center justify-center gap-8">
        <div className="prose mx-auto max-w-md space-y-2 text-center">
          <h2 className="text-white">Services we provide</h2>

          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sed totam.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="min-w-sm card card-compact max-w-md bg-base-100 text-base-content">
            <div className="card-body">
              <h2 className="card-title">Event planning tools</h2>
              <p>
                Make planning your next event a breeze with our customizable
                event planning tools! From checklists to budget trackers, we
                have everything you need to stay organized and on track.
              </p>
            </div>
          </div>

          <div className="min-w-sm card card-compact max-w-md bg-base-100 text-base-content">
            <div className="card-body">
              <h2 className="card-title">Registration and Ticketing</h2>
              <p>
                Sell tickets and manage attendees with ease using our
                registration and ticketing services. Plus, our marketing tools
                will help you reach a wider audience and boost ticket sales!
              </p>
            </div>
          </div>

          <div className="min-w-sm card card-compact max-w-md bg-base-100 text-base-content">
            <div className="card-body">
              <h2 className="card-title">Event Marketing</h2>
              <p>
                Promote your event like a pro with our built-in marketing tools,
                including email marketing, social media integration, and
                customizable promotional materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
