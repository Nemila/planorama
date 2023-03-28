import { ChakraProvider, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children, session }) => {
  return (
    <>
      <Head>
        <title>Planorama</title>
        <meta
          name="description"
          content="Meilleur site de gestion d'evenement"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <SessionProvider session={session}>
          <Flex direction="column" minH="100svh">
            <Navbar />
            {children}
          </Flex>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
};

export default Layout;
