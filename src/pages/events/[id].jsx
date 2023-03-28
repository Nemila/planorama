import PlaningBloc from "@/components/PlaningBloc";
import TaskBloc from "@/components/TaskBloc";
import {
  Badge,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const EventPage = () => {
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
                <PlaningBloc />
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
    </Flex>
  );
};

export default EventPage;
