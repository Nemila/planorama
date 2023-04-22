import EventTypes from "@/layouts/EventTypes";
import Footer from "@/layouts/Footer";
import Hero from "@/layouts/Hero";
import Services from "@/layouts/Services";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />
      <EventTypes />
      <Services />
      {/* <Footer /> */}
    </Box>
  );
}
