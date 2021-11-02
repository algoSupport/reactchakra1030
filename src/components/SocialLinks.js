import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import facebook from "../assets/facebook.png";
import medium from "../assets/medium.png";

export default function SocaialLinks() {
  return (
    <Flex alignItems="center" flexDirection="column" my="80px">
      <Text fontSize="5xl" fontWeight="700">
        Join The Community
      </Text>
      <Flex gridGap={2} mt="40px">
        <Image src={telegram} boxSize="70px" />
        <Image src={twitter} boxSize="70px" />
        <Image src={discord} boxSize="70px" />
        <Image src={facebook} boxSize="70px" />
        <Image src={medium} boxSize="70px" />
      </Flex>
    </Flex>
  );
}
