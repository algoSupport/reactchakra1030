import React from "react";
import Frame from "./Frame";
import SwapItem from "./SwapItem";
import up from "../assets/up.png";
import down from "../assets/down.png";
import { Button, Flex, Image } from "@chakra-ui/react";

export default function Swap() {
  return (
    <Frame pt="70px">
      <SwapItem
        title="FROM"
        amount="0"
        avatarUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        caption="DeliveryGXNFT"
        direction="down"
      />
      <Flex mx="auto" my={5}>
        <Image src={up} height="50px" />
        <Image src={down} height="50px" />
      </Flex>
      <SwapItem
        title="To"
        amount="0"
        avatarUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        caption="MIANFT"
        direction="down"
      />
      <Button
        w="100%"
        bgColor="teal.500"
        fontSize="2xl"
        fontWeight="700"
        color="white"
        borderRadius="2xl"
        mt="50px"
        py="45px"
      >
        SWAP
      </Button>
    </Frame>
  );
}
