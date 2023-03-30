import PlaningBloc from "@/components/PlaningBloc";
import TaskBloc from "@/components/TaskBloc";
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

const EventPage = ({ user }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <Flex py={6}>
      <Container maxW="container.xl">
        <SimpleGrid columns={5} spacing={6}>
          <GridItem colSpan={3}>
            <VStack align="flex-start" spacing={2}>
              <Heading size="md">Anniversaire de Lamine Diamoutene</Heading>
              <Text>
                Status de l&apos;evenement: <Badge>En Attente</Badge>
              </Text>

              <Text>
                Debut de l&apos;evenement: Samedi le 12 fevrier 2023 a 17h00
              </Text>

              <Text>
                Fin de l&apos;evenement: Samedi le 12 fevrier 2023 a 22h00
              </Text>

              <Text>
                Address: Bamako, Sirako Cite BMS -{" "}
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

                <PlaningBloc />
                <PlaningBloc />
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
