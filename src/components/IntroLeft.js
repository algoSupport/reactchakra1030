import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import img from "../intro1.png";
import FancyButton from "./FancyButton";

export default function IntroLeft() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" mt={10}>
      <GridItem colSpan={2}>
        <Box
          bgGradient="linear(to-b, teal.700 0%, transparent 70%)"
          borderRadius="full"
        >
          <Image fit="cover" src={img} p={20}></Image>
        </Box>
      </GridItem>
      <GridItem colSpan={3}>
        <FancyButton text="Coming Soon" />
      </GridItem>
    </Grid>
  );
}
