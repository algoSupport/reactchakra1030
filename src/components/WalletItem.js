import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export default function WalletItem({ name, logo, onClick }) {
  return (
    <Flex alignItems="center" w="80%" pt={5} onClick={onClick} cursor="pointer">
      <Text>{name}</Text>
      <Spacer />
      <Image src={logo} boxSize="48px" boxShadow="md" />
      <ExternalLinkIcon boxSize="24px" mx={2} />
    </Flex>
  );
}
