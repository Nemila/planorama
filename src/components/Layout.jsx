import { ChakraProvider, extendTheme, Flex, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import useLoading from "@/hooks/useLoading";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  styles: {
    global: {
      body: {
        fontFamily: poppins.style.fontFamily,
      },
    },
  },
});

const Layout = ({ children, session }) => {
  const { isLoading } = useLoading();
  return (
    <>
      <Head>
        <title>Planorama</title>
        <meta
          name="description"
          content="Meilleur site de gestion d'evenement"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Flex direction="column" minH="100svh" bg="gray.100">
            <Navbar />
            {isLoading && <Spinner alignSelf="center" mt={12} />}
            {!isLoading && children}
          </Flex>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
};

export default Layout;
