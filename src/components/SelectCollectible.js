import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import Frame from "./Frame";

export default function SelectCollectible() {
  return (
    <Frame p="50px">
      <Text fontSize="36px" fontWeight="600">
        SELECT COLLECTIBLE
      </Text>
      <Input my={5} placeholder="Search Projects" borderRadius="xl" />
      <Text fontSize="24px" fontWeight="600">
        Your Current Wallet Has No Matching NFT
      </Text>
      <Button
        bgColor="teal.500"
        color="white"
        fontSize="36px"
        fontWeight="700"
        py="34px"
        mt="50px"
      >
        SELECT
      </Button>
    </Frame>
  );
}
