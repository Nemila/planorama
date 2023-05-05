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
        
      </Head>

      <SessionProvider session={session}>
        <Navbar />
        <ToastContainer />
        {isLoading && <Spinner />}
        {!isLoading && children}

        <Footer />
      </SessionProvider>
    </>
  );
};

export default Layout;
