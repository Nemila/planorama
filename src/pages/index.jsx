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
import Link from "next/link";

export default function Home() {
  return (
    <Flex flex={1} alignItems="center">
      <VStack textAlign="center" maxWidth="xl" gap={4} mx="auto">
        <Heading>
          La solution ultime pour l&apos;organisation d&apos;événements
        </Heading>

        <Text fontSize="lg">
          De l&apos;idée à l&apos;exécution, nous avons tout prévu.
        </Text>

        <Button colorScheme="blue" as={Link} href="/events">
          Commencez
        </Button>
      </VStack>
    </Flex>
  );
}
