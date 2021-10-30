import React from "react";
import { Center, Container, Grid } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import NFT from "../components/NFT";
import IntroLeft from "../components/IntroLeft";
import { Heading, Text } from "@chakra-ui/react";

export default function Comp4() {
  return (
    <Container maxW="container.xl" mt={10}>
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
    </Container>
  );
}
