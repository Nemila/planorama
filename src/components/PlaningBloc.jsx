import {
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
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";

const PlaningBloc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

          <Button size="sm" colorScheme="red" leftIcon={<HiTrash size={18} />}>
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
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Nom de l&apos;evenement</FormLabel>
                <Input defaultValue="Titre de l'evenement" />
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
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Modifier</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlaningBloc;
