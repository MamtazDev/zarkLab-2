import React from "react";
import TokenRiskExposure from "./TokenRiskExposure";
import WalletHolding from "./WalletHolding";
import AnomalyDetection from "./AnomalyDetection";
import BuySellMovement from "./BuySellMovement";

const FraudDetection = () => {
  return (
    <div>
      <TokenRiskExposure />
      <WalletHolding />
      <AnomalyDetection />
      <BuySellMovement />
    </div>
  );
};

export default FraudDetection;
