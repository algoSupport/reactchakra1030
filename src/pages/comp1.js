import React from "react";
import Staking from "../components/Staking";
import { Container } from "@chakra-ui/react";

export default function Comp1() {
  return (
    <Container maxW="container.lg" pt={10}>
      <Staking />
    </Container>
  );
}
