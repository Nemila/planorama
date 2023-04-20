import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";

const EventCard = ({ event }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const cancelRef = useRef();

  let color = "gray";
  if (event.status === "WAITING") {
    color = "gray";
  }
  if (event.status === "ONGOING") {
    color = "red";
  }
  if (event.status === "FINISHED") {
    color = "green";
  }

  const handleEventDelete = async () => {
    await axios.delete(`http://localhost:3000/api/event/${event.id}`);
    window.location.reload();
  };

  return (
    <>
      <Flex
        minW="xs"
        flex={1}
        p={4}
        gap={2}
        bg="white"
        rounded="md"
        border="1px"
        borderColor="gray.300"
        _hover={{
          shadow: "md",
        }}
        direction="column"
        alignItems="flex-start"
        transition="200ms ease all"
      >
        <Badge colorScheme={color} variant="outline">
          {event.status}
        </Badge>

        <Text fontSize="sm" noOfLines={1}>
          {event.name}
        </Text>

        <ButtonGroup>
          <Button w="full" colorScheme="red" size="sm" onClick={onOpen}>
            Delete
          </Button>

          <Button
            href={`/events/${event.id}`}
            as={Link}
            w="full"
            colorScheme="blue"
            size="sm"
          >
            Details
          </Button>
        </ButtonGroup>
      </Flex>
      {/* <Card>
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
              onClick={onOpen}
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
      </Card> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Suppression d&apos;event
            </AlertDialogHeader>

            <AlertDialogBody>
              Voulez vous vraiment effacer cet event? Tous les blocs et taches
              qui y sont relies seront effaces.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Annuler
              </Button>

              <Button
                ref={cancelRef}
                colorScheme="red"
                onClick={() => {
                  onClose();
                  handleEventDelete();
                }}
                ml={3}
              >
                Effacer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default EventCard;
