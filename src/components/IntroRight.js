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
import intro from "../assets/intro2.png";
import FancyButton from "./FancyButton";

export default function IntroRight() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" mt={100}>
      <GridItem colSpan={3} mr={10}>
        <Flex>
          <FancyButton text="Coming Soon" />
        </Flex>
        <Text fontSize="36px" fontWeight="700" mb={10}>
          Earn Yield for Payments by computer, tablet, & smartphone
        </Text>
        <Text fontSize="20px" fontWeight="700" align="center">
          You can now accept a payment from any country on Earth, with no risk
          of fraud. / Expand your business globally and reach new customers./
          Bank Direct Deposits You will receive a direct deposit into your bank
          account every business day. (make payments and earn yield.) / BitPay
          guarantees the exhange rate and manages the currency exchange when
          required.
        </Text>
        <Flex alignItems="center" mt={5}>
          <Spacer />
          <FancyButton text="Go To App" my="auto" />
        </Flex>
      </GridItem>

      <GridItem colSpan={2}>
        <Box
          bgGradient="linear(to-b, teal.700 0%, transparent 70%)"
          borderRadius="full"
          mr={10}
        >
          <Image fit="cover" src={intro} p={20}></Image>
        </Box>
      </GridItem>
    </Grid>
  );
}
