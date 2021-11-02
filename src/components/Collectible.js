import { Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function Collectible({ avatarUrl, name }) {
  return (
    <Flex alignItems="center" my="15px">
      <Image src={avatarUrl} borderRadius="full" boxSize="55px" />
      <Text ml={5}>{name}</Text>
    </Flex>
  );
}
