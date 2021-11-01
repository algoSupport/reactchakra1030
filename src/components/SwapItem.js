import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import up from "../assets/up.png";
import down from "../assets/down.png";

export default function SwapItem({
  title,
  amount,
  avatarUrl,
  caption,
  direction
}) {
  return (
    <Flex border="2px solid white" borderRadius="md" flexDir="column">
      <Text fontSize="36px" fontWeight="600">
        {title}
      </Text>
      <Flex alignItems="center">
        <Text w="40%">{amount}</Text>
        <Image w="10%" src={avatarUrl} />
        <Text w="30%">{caption}</Text>
        {direction === "up" && <Image src={up} />}
        {direction === "down" && <Image src={down} />}
      </Flex>
    </Flex>
  );
}
