import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react"
import { FaRedo } from "react-icons/fa";

export default function Staking() {
	const [staking, setStaking] = useState(0);
	return (
		<Box bgColor="white" position="relative" color="black" alignItems="center">
			<Button position="absolute" boxSize="32px" right="0px" top="0px" borderRadius="none" bgColor="rgba(2, 170, 176, 1)" p={0}>
				<FaRedo />
			</Button>
			<Text fontSize="36px" fontWeight="700">Pre-Staking Program</Text>
		</Box>
	);
}