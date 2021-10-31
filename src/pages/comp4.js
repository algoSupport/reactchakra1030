import React from "react";
import {
  Center,
  Container,
  Grid,
  Flex,
  Spacer,
  Box,
  Heading
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import NFT from "../components/NFT";
import FancyButton from "../components/FancyButton";
import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";
import BuyNow from "../components/BuyNow";
import SocialLinks from "../components/SocialLinks";
import Info from "../components/Info";
import Footer from "../components/Footer";

export default function Comp4() {
  return (
    <Container maxW="container.xl" pt={10}>
      <Navigation />
      <Welcome />
      <Heading mt={20}>Top 721Pay Collections</Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} bgColor="teal.700" my={5}>
        <Center p={3}>RANK</Center>
        <Center>POOL</Center>
        <Center>POOL</Center>
        <Center>POOL</Center>
        <Center>POOL</Center>
      </Grid>
      <NFT
        imgUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        name="~NFT Pool Name~"
        ticker="~$NFT Pool Ticker~"
        nftCount="2.00"
        trade="20"
        liquidity="2.00"
        floorPrice="3.00"
        weeklyChange="1.00"
        chartUrl="https://www.coingecko.com/coins/1/sparkline"
      />
      <IntroLeft />
      <IntroRight />
      <Flex alignItems="center" mt={5}>
        <Spacer />
        <FancyButton text="Coming Soon" my="auto" />
      </Flex>
      <BuyNow />
      <SocialLinks />
      <Info />
      <Footer />
    </Container>
  );
}
