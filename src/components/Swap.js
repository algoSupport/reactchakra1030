import React from "react";
import Frame from "./Frame";
import SwapItem from "./SwapItem";
import up from "../assets/up.png";
import down from "../assets/down.png";
import { Button, Flex, Image } from "@chakra-ui/react";

export default function Swap() {
  return (
    <Frame pt="100px">
      <SwapItem
        title="FROM"
        amount="0"
        avatarUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        caption="DeliveryGXNFT"
        direction="down"
      />
      <Flex mx="auto" my={5}>
        <Image src={up} height="70px" />
        <Image src={down} height="70px" />
      </Flex>
      <SwapItem
        title="To"
        amount="0"
        avatarUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        caption="MIANFT"
        direction="down"
      />
      <Button
        colorScheme="teal"
        w="100%"
        bgColor="teal.500"
        fontSize="48px"
        fontWeight="700"
        color="white"
        borderRadius="2xl"
        mt="50px"
        py="65px"
      >
        SWAP
      </Button>
    </Frame>
  );
}
