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
    <Flex
      border="2px solid white"
      borderRadius="xl"
      flexDir="column"
      mx="47px"
      p="20px"
    >
      <Text>{title}</Text>
      <Flex alignItems="center" mt="10px" w="80%" mx="auto">
        <Text w="40%" fontSize="lg">
          {amount}
        </Text>
        <Image w="10%" src={avatarUrl} mx={3} boxSize="" />
        <Text w="30%" fontSize="lg" mr={5}>
          {caption}
        </Text>
        {direction === "up" && <Image src={up} height="50px" />}
        {direction === "down" && <Image src={down} height="50px" />}
      </Flex>
    </Flex>
  );
}
