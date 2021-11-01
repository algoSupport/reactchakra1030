import React from "react";
import {
  Container,
  Flex,
  Text,
  Button,
  Input,
  Image,
  Spacer,
  Checkbox
} from "@chakra-ui/react";
import Swap from "../components/Swap";
import Collectible from "../components/Collectible";
import SelectCollectibleFromList from "../components/SelectCollectibleFromList";
import SelectCollectible from "../components/SelectCollectible";
import Frame from "../components/Frame";

export default function Comp1() {
  return (
    <Container maxW="container.lg" pt={10}>
      <Flex flexDirection="column" gridGap={5}>
        <Swap />
        <SelectCollectibleFromList />
        <SelectCollectible />
        <Frame p="50px">
          <Text fontSize="36px" fontWeight="600">
            TRANSACTION DETAILS
          </Text>
          <Text fontSize="24px" fontWeight="600" mt="50px">
            Processing transaction.....
          </Text>
        </Frame>
        <Frame p="50px">
          <Text fontSize="36px" fontWeight="600">
            TRANSACTION DETAILS
          </Text>
          <Text fontSize="24px" fontWeight="600" mt="50px">
            You Deposit
          </Text>
          <Text fontSize="24px" fontWeight="600" mt="50px">
            You Withdraw
          </Text>
          <Flex mx="auto" alignItems="center">
            <Text fontSize="36px" fontWeight="600">
              100
            </Text>
            <Text fontSize="18px" fontWeight="600" ml={5}>
              ~$XXXXX Tokens~
            </Text>
          </Flex>
          <Button
            bgColor="teal.500"
            color="white"
            fontSize="36px"
            fontWeight="700"
            py="34px"
            mt="50px"
          >
            CONFIRM
          </Button>
        </Frame>
        <Frame p="50px">
          <Text fontSize="36px" fontWeight="600">
            SELECT COLLECTIBLE
          </Text>
          <Input my={5} placeholder="Search Projects" borderRadius="xl" />
          <Flex>
            <Collectible
              avatarUrl="https://avatars.dicebear.com/api/human/1.svg"
              name="CryptoPunk"
            />
            <Spacer />
            <Checkbox size="lg" />
          </Flex>
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
      </Flex>
    </Container>
  );
}
