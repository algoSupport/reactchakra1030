import { Text, Flex, Heading, Button, Box, Spacer } from "@chakra-ui/react";
import React from "react";

export default function Welcome() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      gridGap={7}
      p={10}
    >
      <Heading>Welcome to 721Pay</Heading>
      <Box>
        <Text>A community-owned protocol for NFT payments on Ethereum</Text>
        <Text>We’re rolling out a new version of our app. Coming Soon!</Text>
      </Box>
      <Box>
        <Button mr={4} bgColor="gray.400" color="black">
          Tutorials
        </Button>
        <Button bgColor="gray.400" color="black">
          Docs
        </Button>
      </Box>
    </Flex>
  );
}
