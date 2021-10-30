import {
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  useColorMode
} from "@chakra-ui/react";
import React from "react";

export default function NFT({
  imgUrl,
  name,
  ticker,
  nftCount,
  trade,
  liquidity,
  floorPrice,
  weeklyChange,
  chartUrl
}) {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="100%"
      borderWidth="2px"
      borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
      borderRadius="3xl"
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
      p="5"
    >
      <Text fontSize="2xl">
        {name}({ticker})
      </Text>
      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        <Image
          src={imgUrl}
          boxSize="80px"
          objectFit="cover"
          borderRadius="full"
          alt="Avatar"
        ></Image>
        <GridItem>
          <Text>NTF's IN POOL</Text>
          <Text
            borderWidth="0.1px"
            borderColor={colorMode === "light" ? "gray.400" : "gray.600"}
          >
            {nftCount}
          </Text>
        </GridItem>

        <GridItem>
          <Text>Trade ($PoolTik)</Text>
          <Text
            borderWidth="0.1px"
            borderColor={colorMode === "light" ? "gray.400" : "gray.600"}
          >
            {trade}
          </Text>
        </GridItem>

        <GridItem>
          <Text>LIQUIDITY</Text>
          <Text
            borderWidth="0.1px"
            borderColor={colorMode === "light" ? "gray.400" : "gray.600"}
          >
            {liquidity}
          </Text>
        </GridItem>

        <GridItem>
          <Text>FLOOR PRICE</Text>
          <Text
            borderWidth="0.1px"
            borderColor={colorMode === "light" ? "gray.400" : "gray.600"}
          >
            {floorPrice}
          </Text>
        </GridItem>

        <GridItem>
          <Text>7 Day Change</Text>
          <Text
            borderWidth="0.1px"
            borderColor={colorMode === "light" ? "gray.400" : "gray.600"}
          >
            {weeklyChange}
          </Text>
        </GridItem>

        <Image
          src={chartUrl}
          boxSize="80px"
          objectFit="cover"
          alt="Chart"
        ></Image>
      </Grid>
    </Box>
  );
}
