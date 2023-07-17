import React, { useState } from "react";
import "./FraudDetectionFree.css";
import danger from "../../../../assets/icons/dangerIcon.png";
import greenArrow from "../../../../assets/icons/increaseArrowGreen.png";
import redArrow from "../../../../assets/icons/decreaseArrowRed.png";
import WalletHolding from "./WalletHolding";

const FraudDetectionFree = () => {
  const [activeTime, setActiveTime] = useState("1y");

  const [sortedData, setSortedData] = useState(1);
  return (
    <div>
      <div className="mt-[39px] mb-[25px] flex flex-wrap gap-2 justify-between px-1 lg:px-[30px]">
        <h6 className="text-[#8A8A8A] text-[16px]">
          TOKEN RISK EXPOSURE FROM TEAM
        </h6>
        <div className="flex gap-[10px] items-center">
          <button
            className={`text-[12px] font-[400]  text-[#666666] ${
              activeTime === "24h" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("24h");
              setSortedData(dataHour);
            }}
          >
            24h
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]  ${
              activeTime === "1w" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("1w");
              setSortedData(dataWeek);
            }}
          >
            1w
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]  ${
              activeTime === "1m" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("1m");
              setSortedData(dataMonth);
            }}
          >
            1m
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]   ${
              activeTime === "1y" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("1y");
              setSortedData(data);
            }}
          >
            1y
          </button>
          <button className="text-[12px] font-[400] text-[#666666] ">
            All
          </button>
        </div>
      </div>
      <div className="mb-[17px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[21px]">
        <div className="counting_box">
          <h5 className="mb-[20px]">Risk Score</h5>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src={danger} alt="" />
              <h6>67 (High)</h6>
            </div>
            <div className="signal">
              <img src={greenArrow} alt="" />
              <p className="text-[#14F092] mb-0">1.1%</p>
            </div>
          </div>
        </div>
        <div className="counting_box">
          <h5 className="mb-[20px]">Founders Holding Token (%)</h5>
          <div className="flex justify-between items-center">
            <h6>56%</h6>

            <div className="signal">
              <img src={redArrow} alt="" />
              <p className="text-[#F03C14] mb-0">0.5%</p>
            </div>
          </div>
        </div>

        <div className="counting_box">
          <h5 className="mb-[20px]">Founders Holding Token (USD)</h5>
          <div className="flex justify-between items-center">
            <h6>$95,642,452</h6>

            <div className="signal">
              <img src={redArrow} alt="" />
              <p className="text-[#F03C14] mb-0">0.5%</p>
            </div>
          </div>
        </div>
        <div className="counting_box">
          <h5 className="mb-[20px]">Number of Wallets Holding Token</h5>
          <div className="flex justify-between items-center">
            <h6>156,134,763</h6>

            <div className="signal">
              <img src={redArrow} alt="" />
              <p className="text-[#F03C14] mb-0">0.5%</p>
            </div>
          </div>
        </div>
      </div>

      <WalletHolding />
    </div>
  );
};

export default FraudDetectionFree;
