import React from "react";
import BitcoinInfo from "./BitcoinInfo";
import PriceMovementChart from "./PriceMovementChart";

const Performance = () => {
  return (
    <div className="mt-[46px]">
      <BitcoinInfo />
      <PriceMovementChart />
    </div>
  );
};

export default Performance;
