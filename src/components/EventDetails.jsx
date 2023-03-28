import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiCalendarDays, HiTrash, HiEye } from "react-icons/hi2";
import React from "react";
import Link from "next/link";

const EventDetails = () => {
  return (
    <Card>
      <CardHeader pb={2}>
        <Badge colorScheme="blue" mb={2}>
          En Attente
        </Badge>
        <Heading size="md">Anniversaire de Lamine Diamoutene</Heading>
      </CardHeader>

      <CardFooter pt={2}>
        <ButtonGroup>
          <Button
            w="full"
            colorScheme="red"
            leftIcon={<HiTrash size={18} />}
            size="sm"
          >
            Supprimer
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
      </CardFooter>
    </Card>
  );
};

export default EventDetails;
