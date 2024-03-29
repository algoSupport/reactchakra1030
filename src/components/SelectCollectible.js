import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import Frame from "./Frame";

export default function SelectCollectible() {
  return (
    <Frame p="50px">
      <Text>SELECT COLLECTIBLE</Text>
      <Input my={5} placeholder="Search Projects" borderRadius="xl" />
      <Text fontSize="lg">Your Current Wallet Has No Matching NFT</Text>
      <Button
        bgColor="teal.500"
        color="white"
        fontSize="2xl"
        fontWeight="700"
        py="34px"
        mt="50px"
      >
        SELECT
      </Button>
    </Frame>
  );
}
