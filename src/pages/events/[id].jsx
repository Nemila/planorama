import PlaningBloc from "@/components/PlaningBloc";
import TaskBloc from "@/components/TaskBloc";
import prisma from "@/lib/prisma";
import {
  Badge,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import Events from ".";

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

  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(context.params.id),
    },
    include: {
      blocs: true,
    },
  });

  return {
    props: {
      session,
      event: JSON.parse(JSON.stringify(event)),
    },
  };
};

const EventPage = ({ session, event }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const startDate = new Date(event.startAt).toLocaleString();
  const endDate = new Date(event.endAt).toLocaleString();

  return (
    <Flex py={6}>
      <Container maxW="container.xl">
        <SimpleGrid columns={5} spacing={6}>
          <GridItem colSpan={3}>
            <VStack align="flex-start" spacing={2}>
              <Heading size="md">{event.name}</Heading>
              <Text>
                Status de l&apos;evenement: <Badge>{event.status}</Badge>
              </Text>

              <Text>Debut de l&apos;evenement: {startDate}</Text>

              <Text>Fin de l&apos;evenement: {endDate}</Text>

              <Text>
                {event.address} -{" "}
                <Link color="blue.200">Voir sur Google Map</Link>
              </Text>
            </VStack>

            <VStack align="flex-start" gap={2} mt={8}>
              <Heading size="md">Planing de votre evenement</Heading>
              <Divider />
              <VStack spacing={4}>
                <Button
                  w="full"
                  colorScheme="blue"
                  variant="outline"
                  onClick={onOpen}
                >
                  Ajouter un bloc
                </Button>
                {event.blocs.map((bloc) => (
                  <PlaningBloc key={bloc.id} bloc={bloc} />
                ))}
              </VStack>
            </VStack>
          </GridItem>

          <GridItem colSpan={2}>
            <VStack align="flex-start" spacing={4}>
              <Heading size="md">Liste des choses a faire</Heading>
              <Divider />
              <VStack spacing={4} divider={<Divider />}>
                <TaskBloc />
                <TaskBloc />
                <TaskBloc />
              </VStack>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Divider />
          <ModalHeader>
            <Heading size="md">Nouveau Bloc</Heading>
            <ModalCloseButton />
          </ModalHeader>

          <Divider />

          <ModalBody>
            <VStack>
              <HStack w="full">
                <FormControl>
                  <FormLabel>Debut</FormLabel>
                  <Input type="time" />
                </FormControl>

                <FormControl>
                  <FormLabel>Fin</FormLabel>
                  <Input type="time" />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Nom de l&apos;evenement</FormLabel>
                <Input type="text" placeholder="Nom de l'evenement" />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="Description de l'evenement"></Textarea>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Ajouter</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default EventPage;
