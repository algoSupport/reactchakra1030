import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Switch({ caption1, caption2, onChange }) {
  const [value, setValue] = useState(0);
  return (
    <Flex borderRadius="full" bgColor="blackAlpha.400" width="250px" p="7px">
      <Box
        as="button"
        w="50%"
        borderRadius="full"
        bgColor={value === 0 && "white"}
        p="5px"
        fontSize="lg"
        fontWeight="700"
        textAlign="center"
        onClick={() => {
          setValue(0);
          onChange(0);
        }}
      >
        {caption1}
      </Box>
      <Box
        as="button"
        fontSize="lg"
        fontWeight="700"
        bgColor={value === 1 && "white"}
        w="50%"
        borderRadius="full"
        p="5px"
        textAlign="center"
        onClick={() => {
          setValue(1);
          onChange(1);
        }}
      >
        {caption2}
      </Box>
    </Flex>
  );
}
