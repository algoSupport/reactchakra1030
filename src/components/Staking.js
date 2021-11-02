import React, { useState } from "react";
import { Flex, Box, Button, Text, Spacer } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

export default function Staking() {
  const [staking, setStaking] = useState(0);
  return (
    <Flex
      bgColor="white"
      height="600px"
      width="lg"
      position="relative"
      color="black"
      alignItems="center"
      flexDirection="column"
      pt={10}
      m="auto"
      fontSize="2xl"
      fontWeight="700"
    >
      <Button
        colorScheme="teal"
        position="absolute"
        size="lg"
        right="0px"
        top="0px"
        borderRadius="none"
        bgColor="#02AAB0"
        p={0}
        onClick={() => {
          setStaking(0);
        }}
      >
        <FaRedo size="30px" />
      </Button>
      <Text mb={10}>
        {staking <= 1 && "Pre-Staking Program"}
        {staking > 1 && "Stake NFTGX"}
      </Text>
      {staking <= 1 && (
        <Flex w="70%" justifyContent="space-between">
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="md" color="blackAlpha.700">
              EST PAY
            </Text>
            <Text color="teal.500">~0.00~</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="md" color="blackAlpha.700">
              EST Reward / Block
            </Text>
            <Text color="teal.500">~0.00~</Text>
          </Flex>
        </Flex>
      )}
      <Box w="100%" border="1px solid black" my={4}></Box>
      {staking <= 1 && (
        <Flex
          my={5}
          w="70%"
          justifyContent="space-between"
          color="blackAlpha.700"
        >
          <Flex flexDirection="column" gridGap={5}>
            <Text>Staked</Text>
            <Text>Available</Text>
            <Text>Pending Rewards</Text>
            <Text>Total</Text>
          </Flex>
          <Flex flexDirection="column" gridGap={5}>
            <Text>0.00 NFTG</Text>
            <Text>0.00 NFTG</Text>
            <Text>0.00 NFTG</Text>
            <Text>0.00 NFTG</Text>
          </Flex>
        </Flex>
      )}
      {staking > 1 && (
        <Flex flexDirection="column" alignItems="center" my={5} gridGap={5}>
          <Text color="blackAlpha.700">Available: 0.00 NFTGX</Text>
          <Text color="blackAlpha.700">~0~</Text>
          <Button
            colorScheme="teal"
            variant="outline"
            color="teal.500"
            borderRadius="full"
            px={10}
          >
            Max
          </Button>
        </Flex>
      )}
      <Spacer />
      <Flex w="100%">
        {staking === 0 && (
          <Button
            w="100%"
            colorScheme="teal"
            borderRadius="none"
            color="white"
            fontSize="2xl"
            fontWeight="600"
            py="40px"
            bgColor="rgba(44, 122, 123, 1)"
            onClick={() => {
              setStaking(1);
            }}
          >
            Connect Wallet
          </Button>
        )}
        {staking === 1 && (
          <>
            <Button
              colorScheme="teal"
              w="50%"
              borderRadius="none"
              color="white"
              fontSize="2xl"
              fontWeight="600"
              py="40px"
              bgColor="#111827"
              onClick={() => {
                setStaking(3);
              }}
            >
              Unstake
            </Button>
            <Button
              colorScheme="teal"
              w="50%"
              borderRadius="none"
              color="white"
              fontSize="2xl"
              fontWeight="600"
              py="40px"
              bgColor="rgba(44, 122, 123, 1)"
              onClick={() => {
                setStaking(2);
              }}
            >
              Stake
            </Button>
          </>
        )}
        {staking === 2 && (
          <Button
            colorScheme="teal"
            w="100%"
            borderRadius="none"
            color="white"
            fontSize="2xl"
            fontWeight="600"
            py="40px"
            bgColor="rgba(44, 122, 123, 1)"
          >
            Stake 0 NFTG
          </Button>
        )}
        {staking === 3 && (
          <Button
            colorScheme="teal"
            w="100%"
            borderRadius="none"
            color="white"
            fontSize="2xl"
            fontWeight="600"
            py="40px"
            bgColor="#111827"
          >
            Unstake 0 NFTG
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
