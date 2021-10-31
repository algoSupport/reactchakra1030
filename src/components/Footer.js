import React from "react";
import { Flex, Box, Grid, Text, Link, Button, Spacer } from "@chakra-ui/react";
import bg from "../assets/bg.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      borderTop="3px solid rgba(44, 122, 123, 0.53)"
      flexDirection="column"
      mt="30px"
      pt="150px"
      bgImage={bg}
      bgSize="100%"
      bgPosition="top 25px left 0px"
      bgRepeat="no-repeat"
      alignItems="center"
      gridGap={5}
    >
      <Grid w="80%" templateColumns="repeat(4, 2fr)">
        <Flex flexDirection="column">
          <Text fontSize="24px" fontWeight="600" color="rgba(141, 141, 141, 1)">
            My Account
          </Text>
          <Link fontSize="20px" fontWeight="600">
            Dashboard
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Wallet
          </Link>
          <Link fontSize="20px" fontWeight="600">
            My Account
          </Link>
        </Flex>

        <Flex flexDirection="column">
          <Text fontSize="24px" fontWeight="600" color="rgba(141, 141, 141, 1)">
            PRODUCTS
          </Text>
          <Link fontSize="20px" fontWeight="600">
            Collectibles
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Personal
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Business
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Drops
          </Link>
        </Flex>

        <Flex flexDirection="column">
          <Text fontSize="24px" fontWeight="600" color="rgba(141, 141, 141, 1)">
            CONNECT
          </Text>
          <Link fontSize="20px" fontWeight="600">
            Join Us
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Partners
          </Link>
        </Flex>

        <Flex flexDirection="column">
          <Text fontSize="24px" fontWeight="600" color="rgba(141, 141, 141, 1)">
            DOCS
          </Text>
          <Link fontSize="20px" fontWeight="600">
            Github
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Telegram
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Medium
          </Link>
          <Link fontSize="20px" fontWeight="600">
            Learning Center
          </Link>
        </Flex>
      </Grid>
      <Flex
        borderTop="1px solid #D1D5DB"
        borderBottom="1px solid #D1D5DB"
        w="80%"
        justifyContent="center"
        p={5}
      >
        <Flex gridGap={3}>
          <Button
            bgColor="teal.500"
            leftIcon={<FaFacebook />}
            borderRadius="full"
          >
            Facebook
          </Button>
          <Button
            bgColor="teal.500"
            leftIcon={<FaTwitter />}
            borderRadius="full"
          >
            Twitter
          </Button>
          <Button
            bgColor="teal.500"
            leftIcon={<FaLinkedin />}
            borderRadius="full"
          >
            LinkedIn
          </Button>
          <Button
            bgColor="teal.500"
            leftIcon={<FaInstagram />}
            borderRadius="full"
          >
            Instagram
          </Button>
        </Flex>
      </Flex>
      <Flex gridGap="50px">
        <Link fontSize="20px" fontWeight="700">
          Telegram
        </Link>
        <Link fontSize="20px" fontWeight="700">
          Twitter
        </Link>
        <Link fontSize="20px" fontWeight="700">
          Medium
        </Link>
        <Link fontSize="20px" fontWeight="700">
          Discord
        </Link>
      </Flex>
      <Flex w="80%">
        <Text color="rgba(75, 85, 99, 1)" fontSize="12px">
          @Copyright - 2021 ethereum - Designed by
        </Text>
        <Link color="teal" fontSize="12px" pl={1}>
          Themeix
        </Link>
        <Spacer />
        <Text color="rgba(75, 85, 99, 1)" fontSize="12px">
          Privacy Policy | Term of Service
        </Text>
      </Flex>
    </Flex>
  );
}
