import React, { useState } from "react";
import dangerIcon from "../../../../../assets/icons/dangerIcon.png";
import decreaseArrow from "../../../../../assets/icons/decreaseArrowRed.png";
import increasedArrow from "../../../../../assets/icons/increaseArrowGreen.png";

const TokenRiskExposure = () => {
  const [activeTime, setActiveTime] = useState("1w");
  return (
    <div>
      <div className="flex  flex-col lg:flex-row gap-4 justify-between items-center mt-[23px] mb-[13px]">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A] ">
          TOKEN RISK EXPOSURE FROM TEAM
        </h3>
        <div className="flex gap-[10px] items-center">
          <button
            className={`text-[12px] font-[400]  text-[#666666] ${
              activeTime === "24h" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("24h");
              // setSortedData(dataHour);
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
              // setSortedData(data);
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
              // setSortedData(dataMonth);
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
              // setSortedData(dataYear);
            }}
          >
            1y
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]   ${
              activeTime === "all" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("all");
              // setSortedData(dataYear);
            }}
          >
            All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[22px]">
        <div className="p-[16px] rounded-[6px] bg-[#111212]">
          <p className="text-[14px] font-[600] text-[#B1B1B1] mb-[17px]">
            Risk Score
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[9px]">
              <img src={dangerIcon} alt="" />
              <p className="text-[26px] font-[600]">67 (High)</p>
            </div>
            <p className="flex items-center gap-[4px] px-[8px] bg-[#212123] rounded-[20px] text-[12px] font-[400] text-[#14F092]">
              {" "}
              <img src={increasedArrow} alt="" className="object-contain" />
              11%
            </p>
          </div>
        </div>

        <div className="p-[16px] rounded-[6px] bg-[#111212]">
          <p className="text-[14px] font-[600] text-[#B1B1B1] mb-[17px]">
            Founders Holding Token(%)
          </p>
          <div className="flex justify-between items-center">
            <p className="text-[26px] font-[600]">56%</p>

            <p className="flex items-center gap-[4px] px-[8px] bg-[#212123] rounded-[20px] text-[12px] font-[400] text-[#F03C14]">
              {" "}
              <img src={decreaseArrow} alt="" />
              0.5%
            </p>
          </div>
        </div>
        <div className="py-[16px] px-[10px] rounded-[6px] bg-[#111212]">
          <p className="text-[14px] font-[600] text-[#B1B1B1] mb-[17px]">
            Founders Holding Token(USD)
          </p>
          <div className="flex justify-between items-center">
            <p className="text-[26px] font-[600]">$95,642,452</p>

            <p className="flex items-center gap-[4px] px-[8px] bg-[#212123] rounded-[20px] text-[12px] font-[400] text-[#F03C14]">
              {" "}
              <img src={decreaseArrow} alt="" />
              0.5%
            </p>
          </div>
        </div>
        <div className="p-[16px] rounded-[6px] bg-[#111212]">
          <p className="text-[14px] font-[600] text-[#B1B1B1] mb-[17px]">
            Number of Wallets Holding Token
          </p>
          <div className="flex justify-between items-center">
            <p className="text-[26px] font-[600]">156,134,763</p>

            <p className="flex items-center gap-[4px] px-[8px] bg-[#212123] rounded-[20px] text-[12px] font-[400] text-[#F03C14]">
              {" "}
              <img src={decreaseArrow} alt="" />
              0.5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenRiskExposure;
