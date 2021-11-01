import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Frame from "../components/Frame";
import Swap from "../components/Swap";

export default function Comp1() {
  return (
    <Container maxW="container.lg" pt={10}>
      <Swap />
    </Container>
  );
}
