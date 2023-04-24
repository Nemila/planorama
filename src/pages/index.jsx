import EventTypes from "@/layouts/EventTypes";
import Hero from "@/layouts/Hero";
import Services from "@/layouts/Services";
import Video from "@/layouts/Video";

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Services />
      <EventTypes />
    </main>
  );
}
