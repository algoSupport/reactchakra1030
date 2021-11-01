import React from "react";
import Frame from "./Frame";
import SwapItem from "./SwapItem";

export default function Swap() {
  return (
    <Frame>
      <SwapItem
        title="FROM"
        amount="0"
        avatarUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        caption="DeliveryGXNFT"
        direction="down"
      />
      <SwapItem
        title="FROM"
        amount="0"
        avatarUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        caption="DeliveryGXNFT"
        direction="down"
      />
    </Frame>
  );
}
