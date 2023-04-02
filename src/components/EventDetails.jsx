import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiCalendarDays, HiTrash } from "react-icons/hi2";

const EventDetails = ({ event }) => {
  return (
    <Card>
      <CardHeader pb={2}>
        <Badge colorScheme="blue" mb={2}>
          {event.status}
        </Badge>
        <Heading size="md" noOfLines={2}>
          {event.name}
        </Heading>
      </CardHeader>

      <CardFooter pt={2}>
        <ButtonGroup>
          <Button
            w="full"
            colorScheme="red"
            leftIcon={<HiTrash size={18} />}
            size="sm"
          >
            Effacer
          </Button>
          <Button
            href={`/events/${event.id}`}
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
