import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiCalendarDays, HiCog6Tooth, HiEye } from "react-icons/hi2";
import React from "react";
import Link from "next/link";

const EventDetails = () => {
  return (
    <VStack gap={2} alignItems="start" p={4} bg="gray.700" rounded="md">
      <Badge colorScheme="blue">En Attente</Badge>
      <Heading size="md">Anniversaire de Lamine Diamoutene</Heading>
      <Text>Date: 02/12/2005</Text>

      <ButtonGroup>
        <Button
          w="full"
          colorScheme="blue"
          leftIcon={<HiCog6Tooth size={18} />}
          size="sm"
        >
          Modifier
        </Button>
        <Button
          href="/events/1"
          as={Link}
          w="full"
          colorScheme="blue"
          leftIcon={<HiCalendarDays size={18} />}
          size="sm"
        >
          Planifier
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default EventDetails;
