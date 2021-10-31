import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

export default function Info() {
  return (
    <Flex gridGap={3} justifyContent="space-between">
      <ItemInfo
        caption="TOKEN VALUE"
        content="$00.00"
        description="TOKEN VALUE"
      />
      <ItemInfo caption="MARKET" content="$00.00" description="MARKET CAP" />
      <ItemInfo
        caption="LIQUIDITY"
        content="$00.00M"
        description="TOTAL LIQUIDITY"
      />
      <ItemInfo
        caption="SUPPLY"
        content="00.00M"
        description="CIRCULATING SUPPLY"
      />
    </Flex>
  );
}

function ItemInfo({ caption, content, description }) {
  return (
    <Box borderWidth="1px" borderColor="#171923" borderRadius="12px" p="24px">
      <Text fontSize="14px" fontWeight="500">
        {caption}
      </Text>
      <Text fontSize="48px" fontWeight="700">
        {content}
      </Text>
      <Text fontSize="24px" fontWeight="600" color="rgba(141, 141, 141, 1)">
        {description}
      </Text>
    </Box>
  );
}
