import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Swap from "../components/Swap";
import SelectCollectibleFromList from "../components/SelectCollectibleFromList";

export default function Comp1() {
  return (
    <Container maxW="container.lg" pt={10}>
      <Flex flexDirection="column" gridGap={5}>
        <Swap />
        <SelectCollectibleFromList />
      </Flex>
    </Container>
  );
}
