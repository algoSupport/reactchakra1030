import React, { useState } from "react";
import { Flex, Box, Button, Text, Spacer } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

export default function Staking() {
  const [staking, setStaking] = useState(0);
  return (
    <Flex
      bgColor="white"
      height="750px"
      width="720px"
      position="relative"
      color="black"
      alignItems="center"
      flexDirection="column"
      pt={10}
      m="auto"
    >
      <Button
        colorScheme="teal"
        position="absolute"
        boxSize="80px"
        right="0px"
        top="0px"
        borderRadius="none"
        bgColor="#02AAB0"
        p={0}
        onClick={() => {
          setStaking(0);
        }}
      >
        <FaRedo size="50px" />
      </Button>
      <Text fontSize="36px" fontWeight="700" mb={10}>
        {staking <= 1 && "Pre-Staking Program"}
        {staking > 1 && "Stake NFTGX"}
      </Text>
      {staking <= 1 && (
        <Flex w="70%" justifyContent="space-between">
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="20px" fontWeight="700" color="blackAlpha.700">
              EST PAY
            </Text>
            <Text fontSize="48px" fontWeight="600" color="teal.500">
              ~0.00~
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="20px" fontWeight="700" color="blackAlpha.700">
              EST Reward / Block
            </Text>
            <Text fontSize="48px" fontWeight="600" color="teal.500">
              ~0.00~
            </Text>
          </Flex>
        </Flex>
      )}
      <Box w="100%" border="1px solid black" my={4}></Box>
      {staking <= 1 && (
        <Flex
          my={10}
          w="70%"
          justifyContent="space-between"
          color="blackAlpha.700"
        >
          <Flex flexDirection="column" gridGap={5}>
            <Text fontSize="30px" fontWeight="700">
              Staked
            </Text>
            <Text fontSize="30px" fontWeight="700">
              Available
            </Text>
            <Text fontSize="30px" fontWeight="700">
              Pending Rewards
            </Text>
            <Text fontSize="30px" fontWeight="700">
              Total
            </Text>
          </Flex>
          <Flex flexDirection="column" gridGap={5}>
            <Text fontSize="30px" fontWeight="700">
              0.00 NFTG
            </Text>
            <Text fontSize="30px" fontWeight="700">
              0.00 NFTG
            </Text>
            <Text fontSize="30px" fontWeight="700">
              0.00 NFTG
            </Text>
            <Text fontSize="30px" fontWeight="700">
              0.00 NFTG
            </Text>
          </Flex>
        </Flex>
      )}
      {staking > 1 && (
        <Flex flexDirection="column" alignItems="center" my={10} gridGap={5}>
          <Text color="blackAlpha.700" fontSize="30px" fontWeight="700">
            Available: 0.00 NFTGX
          </Text>
          <Text color="blackAlpha.700" fontSize="64px" fontWeight="600">
            ~0~
          </Text>
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
            colorScheme="teal"
            w="100%"
            borderRadius="none"
            color="white"
            fontSize="36px"
            fontWeight="600"
            py="50px"
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
              fontSize="36px"
              fontWeight="600"
              py="50px"
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
              fontSize="36px"
              fontWeight="600"
              py="50px"
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
            fontSize="36px"
            fontWeight="600"
            py="50px"
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
            fontSize="36px"
            fontWeight="600"
            py="50px"
            bgColor="#111827"
          >
            Unstake 0 NFTG
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
