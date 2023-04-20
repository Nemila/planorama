import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Input,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const NewEventForm = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const today = Date.now();
      const startAt = new Date(data.startAt).getTime();
      const endAt = new Date(data.endAt).getTime();

      if (startAt < today || endAt < today) {
        return toast({
          title: "An error occured.",
          description: "Start and end day can't be in the past.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }

      if (startAt >= endAt) {
        return toast({
          title: "An error occured.",
          description: "Start date can't be after the end date.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }

      const res = await axios.post("http://localhost:3000/api/addEvent", data);

      if (res.data) {
        toast({
          title: "New event created.",
          description: "Your event was successfully created.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        window.location.reload();
        reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SimpleGrid
      p={4}
      flex={1}
      gap={4}
      columns={2}
      as="form"
      bg="white"
      border="1px"
      borderColor="gray.300"
      rounded="md"
      minW="xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Type here..."
            {...register("name", { required: true })}
          />
          <FormHelperText>Provide the name of your event</FormHelperText>
        </FormControl>
      </GridItem>

      <GridItem>
        <FormControl>
          <FormLabel>Start Date</FormLabel>
          <Input
            type="datetime-local"
            {...register("startAt", { required: true })}
          />
        </FormControl>
      </GridItem>

      <GridItem>
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input
            type="datetime-local"
            {...register("endAt", { required: true })}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input
            type="text"
            placeholder="Type here..."
            {...register("address", { required: true })}
          />
          <FormHelperText>
            Where is the event going to take place?
          </FormHelperText>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Template</FormLabel>
          <Select>
            <option value="">Select</option>
            <option value="">Blank</option>
            <option value="">Birthday</option>
            <option value="">Conference</option>
          </Select>
          <FormHelperText>
            Templates come with predefined tasks that you can edit
          </FormHelperText>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <Button
          w="full"
          type="submit"
          colorScheme="blue"
          isLoading={isSubmitting}
        >
          Create Event
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default NewEventForm;
