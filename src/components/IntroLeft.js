import {
  Box,
  Grid,
  GridItem,
  Image,
  Spacer,
  Flex,
  Text
} from "@chakra-ui/react";
import React from "react";
import intro from "../assets/intro1.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

import FancyButton from "./FancyButton";

export default function IntroLeft() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" mt={10}>
      <GridItem colSpan={2}>
        <Box
          bgGradient="linear(to-b, teal.700 0%, transparent 70%)"
          borderRadius="full"
          mr={10}
        >
          <Image fit="cover" src={intro} p={20}></Image>
        </Box>
      </GridItem>
      <GridItem colSpan={3} ml={10}>
        <Flex>
          <Spacer />
          <FancyButton text="Coming Soon" />
        </Flex>
        <Text fontSize="36px" fontWeight="700" mb={10}>
          NFT payment plugins for popular eCommerce platforms
        </Text>
        <Text fontSize="20px" fontWeight="700" align="center">
          A community-owned protocol for NFT payments on Ethereum
        </Text>
        <Text fontSize="20px" fontWeight="700" align="center">
          We’re rolling out a new version of our app. Coming Soon!
        </Text>
        <Text fontSize="20px" fontWeight="700" align="center">
          You will receive a direct deposit into your bank account every
          business day.
        </Text>
        <Text fontSize="20px" fontWeight="700" align="center">
          BitPay guarantees the exhange rate and manages the currency exchange
          when required.
        </Text>
        <Flex alignItems="center">
          <Image src={img1} p={1} />
          <Image src={img2} p={1} />
          <Image src={img3} p={1} />
          <Image src={img4} p={1} />
          <Image src={img5} p={1} />
          <Image src={img6} p={1} />
          <FancyButton text="Go To App" my="auto" />
        </Flex>
      </GridItem>
    </Grid>
  );
}
