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
import { useRouter } from "next/router";
import { useRef } from "react";

const EventCard = ({ event }) => {
  const router = useRouter();
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
    router.replace(router.asPath);
  };

  return (
    <>
      <Flex
        minW="xs"
        flex={1}
        p={4}
        gap={3}
        bg="white"
        rounded="md"
        border="1px"
        borderColor="gray.300"
        alignItems="flex-start"
        direction="column"
      >
        <Badge colorScheme={color} variant="outline">
          {event.status}
        </Badge>

        <Text fontSize="lg" noOfLines={1}>
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
