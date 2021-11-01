import { Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function Collectible({ avatarUrl, name }) {
  return (
    <Flex alignItems="center" my="15px">
      <Image src={avatarUrl} borderRadius="full" boxSize="85px" />
      <Text fontSize="36px" fontWeight="600" ml={5}>
        {name}
      </Text>
    </Flex>
  );
}
