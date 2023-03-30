import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { useForm } from "react-hook-form";

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

const NewEventPage = ({ session }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box py={6}>
      <Container maxW="container.md">
        <Heading size="md">Creation d&apos;un nouvelle evenement</Heading>
        <Divider my={4} />

        <SimpleGrid
          gap={6}
          columns={2}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Quel est l&apos;evenement?</FormLabel>
              <Input
                placeholder="Ecrivez ici..."
                {...register("name", { required: true })}
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel>Debut de l&apos;evenement</FormLabel>
              <Input
                type="datetime-local"
                {...register("startDate", { required: true })}
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel>Fin de l&apos;evenement</FormLabel>
              <Input
                type="datetime-local"
                {...register("endDate", { required: true })}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Ou se passera l&apos;evenement?</FormLabel>
              <Input
                type="text"
                placeholder="Ecrivez-ici..."
                {...register("address", { required: true })}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Button colorScheme="blue" w="full" type="submit">
              Creer
            </Button>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default NewEventPage;
