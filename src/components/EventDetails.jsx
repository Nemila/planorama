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
  Card,
  CardFooter,
  CardHeader,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";
import { HiCalendarDays, HiTrash } from "react-icons/hi2";

const EventDetails = ({ event }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const cancelRef = useRef();

  const handleEventDelete = async () => {
    try {
      const deletedEvent = await axios.delete(
        `http://locahost:3000/api/event/${event.id}`
      );
      console.log(deletedEvent);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
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
      </Card>

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

              <Button colorScheme="red" onClick={handleEventDelete} ml={3}>
                Effacer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default EventDetails;
