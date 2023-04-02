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
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const NewEventPage = ({}) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/events", data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
                {...register("startAt", { required: true })}
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel>Fin de l&apos;evenement</FormLabel>
              <Input
                type="datetime-local"
                {...register("endAt", { required: true })}
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
