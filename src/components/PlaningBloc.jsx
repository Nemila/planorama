import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";

const PlaningBloc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <VStack p={6} spacing={3} rounded="md" bg="gray.900" align="flex-start">
        <Heading size="md">Titre du bloc</Heading>
        <Heading size="lg">17:00 - 18h00</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum labore
          obcaecati at! Tempore vitae quasi commodi ducimus omnis, nihil sequi
          sit maiores quidem nostrum consequuntur est laudantium libero natus
          maxime?
        </Text>

        <ButtonGroup>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<HiPencilSquare size={18} />}
            onClick={onOpen}
          >
            Modifier ce bloc
          </Button>

          <Button
            size="sm"
            colorScheme="red"
            leftIcon={<HiTrash size={18} />}
            onClick={onOpenAlert}
          >
            Supprimer ce bloc
          </Button>
        </ButtonGroup>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Divider />
          <ModalHeader>
            <Heading size="sm">Modification</Heading>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <SimpleGrid>
              <FormControl>
                <FormLabel>Heure de debut</FormLabel>
                <Input type="time" />
              </FormControl>

              <FormControl>
                <FormLabel>Heure de fin</FormLabel>
                <Input type="time" />
              </FormControl>

              <FormControl>
                <FormLabel>Nom de l&apos;evenement</FormLabel>
                <Input defaultValue="Titre de l'evenement" type="text" />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum labore obcaecati at! Tempore vitae quasi commodi ducimus
                  omnis, nihil sequi sit maiores quidem nostrum consequuntur est
                  laudantium libero natus maxime?
                </Textarea>
              </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Modifier</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog
        isOpen={isOpenAlert}
        leastDestructiveRef={cancelRef}
        onClose={onCloseAlert}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Suppression d&apos;event
            </AlertDialogHeader>

            <AlertDialogBody>
              Etes vous sure de vouloir supprimer cet evenement?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseAlert}>
                Annuler
              </Button>
              <Button colorScheme="red" onClick={onCloseAlert} ml={3}>
                Supprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default PlaningBloc;
