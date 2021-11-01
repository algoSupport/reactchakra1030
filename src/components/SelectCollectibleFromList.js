import { Input, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Collectible from "./Collectible";
import Frame from "./Frame";

export default function SelectCollectibleFromList() {
  return (
    <Frame p="50px">
      <Text fontSize="36px" fontWeight="600">
        SELECT COLLECTIBLE
      </Text>
      <Input my={5} placeholder="Search Projects" borderRadius="xl" />
      <Flex flexDirection="column" overflow="auto" height="500px">
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/1.svg"
          name="Red Panda"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/2.svg"
          name="Crypto Toads"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/3.svg"
          name="Crypto Punks"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/4.svg"
          name="UCrew"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/5.svg"
          name="Red Panda"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/6.svg"
          name="Crypto Toads"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/7.svg"
          name="Crypto Punks"
        />
        <Collectible
          avatarUrl="https://avatars.dicebear.com/api/human/8.svg"
          name="UCrew"
        />
      </Flex>
    </Frame>
  );
}
