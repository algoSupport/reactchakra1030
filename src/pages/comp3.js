import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Connect from "../components/Connect";
import portisio from "../assets/portis.io.png";
import metawallet from "../assets/metawallet.png";
import coinbase_circle from "../assets/coinbase_circle.png";
import portis from "../assets/portis.png";
import walletconnect from "../assets/walletconnect.png";

export default function Comp3() {
  return (
    <>
      <Connect type="Coinbase"></Connect>
      <Connect type="Connect"></Connect>
      <Flex
        m={5}
        pt={5}
        px={10}
        pb={10}
        bgColor="white"
        color="black"
        alignItems="center"
        borderRadius="2xl"
        flexDir="column"
        width="md"
        fontSize="lg"
        fontWeight="700"
      >
        <Image src={portisio} height="50px" />
        <Text textAlign="center" mt="100px" mb="30px">
          To continue on Delivery Coin, log in to Portis, your secure gateway to
          the blockchain.{" "}
        </Text>
        <Button
          w="100%"
          colorScheme="blackAlpha"
          borderRadius="xl"
          fontSize="lg"
          fontWeight="700"
          py="30px"
        >
          Continue
        </Button>
      </Flex>
      <Flex
        m={5}
        pt={5}
        px={10}
        pb={10}
        bgColor="blue.800"
        color="white"
        borderRadius="2xl"
        flexDir="column"
        width="md"
        fontSize="lg"
        fontWeight="700"
      >
        <Text fontSize="2xl">Connect Wallet</Text>
        <Flex justifyContent="space-between">
          <Flex
            variant="outline"
            as="button"
            flexDirection="column"
            alignItems="center"
            bgColor="whiteAlpha.300"
            border="2px solid white"
            borderRadius="2xl"
            width="180px"
            height="140px"
            pt={3}
            mt={5}
          >
            <Image src={metawallet} height="64px" />
            <Spacer />
            <Text fontWeight="600">MetaWallet</Text>
            <Text fontWeight="600">
              <u>Install</u>
            </Text>
          </Flex>
          <Flex
            variant="outline"
            as="button"
            flexDirection="column"
            alignItems="center"
            bgColor="whiteAlpha.300"
            border="2px solid white"
            borderRadius="2xl"
            width="180px"
            height="140px"
            pt={3}
            pb={5}
            mt={5}
          >
            <Image src={coinbase_circle} height="64px" />
            <Spacer />
            <Text fontWeight="600">Coinbase</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex
            variant="outline"
            as="button"
            flexDirection="column"
            alignItems="center"
            bgColor="whiteAlpha.300"
            border="2px solid white"
            borderRadius="2xl"
            width="180px"
            height="140px"
            pt={3}
            pb={5}
            mt={5}
          >
            <Image src={walletconnect} height="64px" />
            <Spacer />
            <Text fontWeight="600">WalletConnect</Text>
          </Flex>
          <Flex
            variant="outline"
            as="button"
            flexDirection="column"
            alignItems="center"
            bgColor="whiteAlpha.300"
            border="2px solid white"
            borderRadius="2xl"
            width="180px"
            height="140px"
            pt={3}
            pb={5}
            mt={5}
          >
            <Image src={portis} height="64px" />
            <Spacer />
            <Text fontWeight="600">portis</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
