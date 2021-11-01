import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export default function Frame(props) {
  return (
    <Flex
      flexDirection="column"
      borderRadius="2xl"
      position="relative"
      w="640px"
      bgColor="#4A5568"
      {...props}
    >
      <Button
        colorScheme="gray"
        size="sm"
        bgColor="white"
        color="black"
        position="absolute"
        top="10px"
        right="10px"
      >
        X
      </Button>
      {props.children}
    </Flex>
  );
}
