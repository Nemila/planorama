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
    <Flex
      w="full"
      flex={1}
      alignItems="center"
      bgImage="https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      bgSize="cover"
      bgPosition="center"
    >
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
