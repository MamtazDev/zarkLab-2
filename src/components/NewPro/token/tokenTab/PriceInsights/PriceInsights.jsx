import React from "react";
import CoinBasicInfo from "./CoinBasicInfo";
import PriceMovement from "./PriceMovement";
import LatestTransactions from "./LatestTransactions";
import TradeActivities from "./TradeActivities";

const PriceInsights = () => {
  return (
    <div className="mt-[44px]">
      <CoinBasicInfo />
      <PriceMovement />
      <LatestTransactions />
      <TradeActivities />
    </div>
  );
};

export default PriceInsights;
