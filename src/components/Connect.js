import { Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import Switch from "./Switch";
import WalletItem from "./WalletItem";
import coinbase from "../assets/coinbase.png";
import gnosis from "../assets/gnosis.png";
import infinity from "../assets/infinity.png";
import encrypted from "../assets/encrypted.png";

export default function Connect({ type }) {
  const [method, setMethod] = useState(0);
  const toast = useToast();
  return (
    <Flex
      bgColor="white"
      color="black"
      pt={5}
      px={10}
      alignItems="center"
      borderRadius="2xl"
      flexDir="column"
      width="md"
      fontSize="lg"
      fontWeight="700"
      minHeight="400px"
      m={5}
    >
      <Switch
        caption1="QR Code"
        caption2="Desktop"
        onChange={(e) => {
          setMethod(e);
        }}
      />
      {method === 0 && (
        <>
          <Text color="#8D8D8D" textAlign="center" mt={5}>
            Scan QR Code with a {type} Compatible Wallet
          </Text>
          <Image src="https://i.ibb.co/3RzjxYx/qr.png" px={10} py={5} />
          <Button
            color="blackAlpha.500"
            fontSize="2xl"
            mb={5}
            onClick={() => {
              toast({
                title: "Copied To Clipboard",
                status: "success",
                duration: 9000,
                isClosable: true
              });
            }}
          >
            Copy To Clipboard
          </Button>
        </>
      )}
      {method === 1 && type === "Coinbase" && (
        <>
          <Text color="#8D8D8D" textAlign="center" mt={5}>
            Try Coinbase Wallet extension
          </Text>
          <WalletItem
            name="Coinbase Wallet"
            logo={coinbase}
            onClick={() => {
              toast({
                title: "Coinbase Wallet",
                status: "warning",
                duration: 9000,
                isClosable: true
              });
            }}
          />
        </>
      )}

      {method === 1 && type === "Connect" && (
        <>
          <Text color="#8D8D8D" textAlign="center" mt={5}>
            Try Coinbase Wallet extension
          </Text>
          <WalletItem
            name="Gnosis Safe Multisig"
            logo={gnosis}
            onClick={() => {
              toast({
                title: "Gnosis Safe Multisig",
                status: "warning",
                duration: 9000,
                isClosable: true
              });
            }}
          />
          <WalletItem
            name="Infinity Wallet"
            logo={infinity}
            onClick={() => {
              toast({
                title: "Infinity Wallet",
                status: "warning",
                duration: 9000,
                isClosable: true
              });
            }}
          />
          <WalletItem
            name="Encrypted Ink"
            logo={encrypted}
            onClick={() => {
              toast({
                title: "Encrypted Ink",
                status: "warning",
                duration: 9000,
                isClosable: true
              });
            }}
          />
        </>
      )}
    </Flex>
  );
}
