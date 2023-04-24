import useLoading from "@/hooks/useLoading";
import { Flex } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Navbar from "./Navbar";

// react-toastify
import Footer from "@/layouts/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";

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

      <SessionProvider session={session}>
        <div
          className="flex min-h-screen flex-col overflow-x-hidden bg-base-200"
          data-theme="light"
        >
          <Navbar />
          <ToastContainer />
          {isLoading && <Spinner />}
          {!isLoading && children}
        </div>

        <Footer />
      </SessionProvider>
    </>
  );
};

export default Layout;
