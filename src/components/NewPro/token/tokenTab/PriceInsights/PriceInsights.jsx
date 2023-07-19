import React from "react";
import CoinBasicInfo from "./CoinBasicInfo";
import PriceMovement from "./PriceMovement";

const PriceInsights = () => {
  return (
    <div className="mt-[44px]">
      <CoinBasicInfo />
      <PriceMovement />
    </div>
  );
};

export default PriceInsights;
