import useLoading from "@/hooks/useLoading";
import { ChakraProvider, extendTheme, Flex, Spinner } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Navbar from "./Navbar";

// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, session }) => {
  const { isLoading } = useLoading();
  return (
    <>
      <Head>
        <title>Planorama</title>
        <meta
          name="description"
          content="Plan your next event with ease. Our event management website offers a complete solution for organizing, promoting, and executing successful events. From corporate conferences to weddings and birthdays, our platform provides all the tools you need to create an unforgettable experience for your attendees. Start planning today and take the stress out of event planning!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChakraProvider>
        <SessionProvider session={session}>
          <Flex direction="column" minH="100svh" bg="gray.100">
            <Navbar />
            <ToastContainer />
            {isLoading && <Spinner alignSelf="center" mt={12} />}
            {!isLoading && children}
          </Flex>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
};

export default Layout;
