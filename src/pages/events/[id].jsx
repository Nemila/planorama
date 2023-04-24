import NewTaskModal from "@/components/NewTaskModal";
import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { HiCheck, HiMapPin, HiPlus } from "react-icons/hi2";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(context.params.id),
    },
    include: {
      blocs: true,
    },
  });

  return {
    props: {
      event: JSON.parse(JSON.stringify(event)),
    },
  };
};

const EventPage = ({ event }) => {
  const startDate = new Date(event.startAt).toLocaleString();
  const endDate = new Date(event.endAt).toLocaleString();

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-8 p-8">
        <div className="flex-1 space-y-4">
          <Image
            src={`https://heluvngkkydwiankayff.supabase.co/storage/v1/object/public/events/${event.image}`}
            className="w-full"
            width={999999}
            height={999999}
            title={event.name}
            alt={event.name}
          />

          <div className="prose">
            <h3>{event.name}</h3>

            <p className="flex items-center gap-2">
              <HiMapPin className="text-2xl" />
              {event.location}
            </p>

            {/* <p>
              <span>From: {startDate}</span> <br />
              <span>To: {endDate}</span>
            </p> */}

            <p>
              Event Status <span className="badge">{event.status}</span>
            </p>

            <p>{event.description}</p>
          </div>
        </div>

        <div className="min-w-sm space-y-6">
          <h3 className="text-xl font-semibold">Event Checklist</h3>

          <div>
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text">
                  Set goals and objectives for the conference
                </span>
                <input type="checkbox" className="checkbox-primary checkbox" />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text">
                  Identify target audience and create a marketing plan to reach
                  them
                </span>
                <input type="checkbox" className="checkbox-primary checkbox" />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text">
                  Identify target audience and create a marketing plan to reach
                  them
                </span>
                <input type="checkbox" className="checkbox-primary checkbox" />
              </label>
            </div>
          </div>

          <div className="btn-group">
            <label htmlFor="newTaskModal" className="btn gap-2">
              <HiPlus className="text-xl" />
              Create
            </label>
            <button className="btn-primary btn gap-2">
              <HiCheck className="text-xl" />
              Submit
            </button>
          </div>
        </div>
      </div>

      <NewTaskModal />
    </div>
    // <Flex py={6}>
    //   <Container maxW="container.xl">
    //     <SimpleGrid columns={5} spacing={6}>
    //       <GridItem colSpan={3}>
    //         <VStack align="flex-start" spacing={2}>
    //           <Heading size="md">{event.name}</Heading>
    //           <Text>
    //             Status de l&apos;evenement: <Badge>{event.status}</Badge>
    //           </Text>

    //           <Text>Debut de l&apos;evenement: {startDate}</Text>

    //           <Text>Fin de l&apos;evenement: {endDate}</Text>

    //           <Text>{event.address}</Text>
    //         </VStack>

    //         <VStack align="flex-start" gap={2} mt={8}>
    //           <Heading size="md">Planing de votre evenement</Heading>
    //           <Divider />
    //           <VStack spacing={4}>
    //             <Button
    //               w="full"
    //               colorScheme="blue"
    //               variant="outline"
    //               onClick={onOpen}
    //             >
    //               Ajouter un bloc
    //             </Button>
    //             {event.blocs.map((bloc) => (
    //               <PlaningBloc key={bloc.id} bloc={bloc} />
    //             ))}
    //           </VStack>
    //         </VStack>
    //       </GridItem>

    //       <GridItem colSpan={2}>
    //         <VStack align="flex-start" spacing={4}>
    //           <Heading size="md">Liste des choses a faire</Heading>
    //           <Divider />
    //           <VStack spacing={4} divider={<Divider />}>
    //             <TaskBloc />
    //             <TaskBloc />
    //             <TaskBloc />
    //           </VStack>
    //         </VStack>
    //       </GridItem>
    //     </SimpleGrid>
    //   </Container>

    //   <Modal isOpen={isOpen} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <Divider />
    //       <ModalHeader>
    //         <Heading size="md">Nouveau Bloc</Heading>
    //         <ModalCloseButton />
    //       </ModalHeader>

    //       <Divider />

    //       <ModalBody>
    //         <VStack>
    //           <HStack w="full">
    //             <FormControl>
    //               <FormLabel>Debut</FormLabel>
    //               <Input type="time" />
    //             </FormControl>

    //             <FormControl>
    //               <FormLabel>Fin</FormLabel>
    //               <Input type="time" />
    //             </FormControl>
    //           </HStack>

    //           <FormControl>
    //             <FormLabel>Nom de l&apos;evenement</FormLabel>
    //             <Input type="text" placeholder="Nom de l'evenement" />
    //           </FormControl>

    //           <FormControl>
    //             <FormLabel>Description</FormLabel>
    //             <Textarea placeholder="Description de l'evenement"></Textarea>
    //           </FormControl>
    //         </VStack>
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button colorScheme="blue">Ajouter</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    // </Flex>
  );
};

export default EventPage;
