import React from "react";
import BitcoinInfo from "./BitcoinInfo";
import PriceMovementChart from "./PriceMovementChart";

const Performance = () => {
  return (
    <div className="mt-[44px]">
      <BitcoinInfo />
      <PriceMovementChart />
    </div>
  );
};

export default Performance;
