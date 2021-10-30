import React from "react";
import { NFT } from "../components/NFT";

const Sample1 = () => {
  return (
    <NFT
      imgUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
      name="Chakra NFT"
      ticker="CNFT"
      nftCount="2.00"
      trade="20"
      liquidity="2.00"
      floorPrice="3.00"
      weeklyChange="1.00"
      chartUrl="https://www.coingecko.com/coins/1/sparkline"
    />
  );
};

export default Sample1;
