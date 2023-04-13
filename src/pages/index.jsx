import EventTypes from "@/layouts/EventTypes";
import Footer from "@/layouts/Footer";
import Hero from "@/layouts/Hero";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />
      <EventTypes />
      <Footer />
    </Box>
  );
}
