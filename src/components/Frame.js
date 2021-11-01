import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export default function Frame({ children }) {
  return (
    <Flex
      flexDirection="column"
      borderRadium="lg"
      position="relative"
      maxW="200px"
      bgColor="#4A5568"
      borderRadius="lg"
    >
      <Button
        colorScheme="gray"
        size="sm"
        position="absolute"
        top="10px"
        right="10px"
      >
        X
      </Button>
      {children}
    </Flex>
  );
}
