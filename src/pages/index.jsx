import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="full" flex={1} alignItems="center">
      <VStack textAlign="center" maxWidth="xl" gap={4} mx="auto">
        <Heading>
          La solution ultime pour l&apos;organisation d&apos;événements
        </Heading>

        <Text fontSize="lg">
          De l&apos;idée à l&apos;exécution, nous avons tout prévu.
        </Text>
        <Button colorScheme="blue">Commencez</Button>
      </VStack>
    </Flex>
  );
}
