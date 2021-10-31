import { Box, Button } from "@chakra-ui/react";
import React from "react";
import "../styles.css";

export default function FancyButton({ text }) {
  return (
    <Box
      as="button"
      bgGradient="linear(to-b, rgba(0, 255, 240, 1), rgba(112, 0, 255, 0.57))"
      borderRadius="xl"
      p={0.5}
      height="44px"
    >
      <Button color="teal.500" bgColor="rgb(5,11,28)" borderRadius="xl">
        {text}
      </Button>
    </Box>
  );
}
