import { Box, Container, Heading } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import React from "react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const NewEventPage = ({ user }) => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Heading>Creation d&apos;un nouvelle evenement</Heading>
      </Container>
    </Box>
  );
};

export default NewEventPage;
