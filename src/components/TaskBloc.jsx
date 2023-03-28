import { Box, Button, Checkbox, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const TaskBloc = () => {
  return (
    <Flex direction="column" gap={4}>
      <Heading size="sm" noOfLines={2}>
        17h00 - 18h00: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Heading>

      <VStack align="flex-start">
        <Checkbox>Recuperer et arranger les chaises</Checkbox>
        <Checkbox>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Checkbox>
        <Checkbox>Acheter des bougies d&apos;anniversaire</Checkbox>
      </VStack>
    </Flex>
  );
};

export default TaskBloc;
