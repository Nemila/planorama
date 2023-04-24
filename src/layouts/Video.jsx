const Video = () => {
  return (
    <section className="bg-base-100 p-8">
      <div className="container mx-auto flex min-h-[325px] flex-col items-center justify-center gap-8 md:flex-row">
        <div className="mockup-window w-full max-w-2xl border bg-base-300">
          <iframe
            className="aspect-video h-full w-full"
            src="https://www.youtube.com/embed/4A5rj8S2-oI?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="prose mx-auto max-w-md space-y-2 text-center md:text-left">
          <h2>From planing to excution</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem
            et cumque enim ex quas perspiciatis eligendi fugiat, qui pariatur
            eveniet quibusdam hic vitae nam optio sint nulla tenetur fuga?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;
