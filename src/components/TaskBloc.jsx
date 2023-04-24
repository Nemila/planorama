import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TaskBloc = () => {
  return (
    <Flex direction="column" gap={4}>
      <Heading size="sm" noOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Heading>

      <VStack align="flex-start">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" checked className="checkbox" />
            <span className="label-text">Remember me</span>
          </label>
        </div>
      </VStack>

      <HStack>
        <Button variant="ghost" size="sm">
          Ajouter un todo
        </Button>

        <Button variant="ghost" size="sm">
          Effacer un todo
        </Button>

        <Button variant="ghost" size="sm">
          Modifier un todo
        </Button>
      </HStack>
    </Flex>
  );
};

export default TaskBloc;
