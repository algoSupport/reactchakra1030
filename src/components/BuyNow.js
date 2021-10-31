import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import payImg from "../assets/pay.png";

export default function ButNow() {
  return (
    <Flex p={10} bgColor="rgba(44, 122, 123, 0.25)">
      <Box w="50%">
        <Text fontSize="36px" fontWeight="700" mb={5}>
          Try a Buy Now button Demo
        </Text>
        <Text fontSize="20px" fontWeight="700" px={5} py={2}>
          Paste simple HTML code into your website
        </Text>
        <Text fontSize="20px" fontWeight="700" px={5} py={2}>
          BitPay hosts a shopping cart and collects info
        </Text>
        <Text fontSize="20px" fontWeight="700" px={5} py={2}>
          Collect a payment from ANY country
        </Text>
      </Box>
      <Flex w="50%" alignItems="center" justifyContent="center">
        <Image src={payImg} maxH="125px" />
      </Flex>
    </Flex>
  );
}
