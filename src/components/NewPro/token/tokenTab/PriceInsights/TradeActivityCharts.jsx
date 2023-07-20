import React, { useState } from "react";
import AreaCharts from "./AreaCharts";

const TradeActivityCharts = ({ sortedData, activeLine }) => {
  const [activeButton, setActiveButton] = useState("buy");
  const [activeButton2, setActiveButton2] = useState("buy");
  return (
    <div className="mt-[24px] grid grid-cols-2 gap-[25px]">
      <div className="rounded-[6px] bg-[#111212]">
        <div className="px-[21px] pt-[12px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1] mb-[10px]">
            Active Wallets
          </p>
          <p className="text-[24px] font-[600]">156,134,763</p>
        </div>
        <AreaCharts sortedData={sortedData} activeLine={activeLine} />
      </div>
      <div className="rounded-[6px] bg-[#111212]">
        <div className="px-[21px] pt-[12px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1] mb-[10px]">
            New Wallets
          </p>
          <p className="text-[24px] font-[600]">156,134,763</p>
        </div>
        <AreaCharts sortedData={sortedData} activeLine={activeLine} />
      </div>
      <div className="rounded-[6px] bg-[#111212]">
        <div className="px-[21px] pt-[12px]">
          <div className="mb-[10px] flex justify-between">
            <p className="text-[14px] font-[600] text-[#B1B1B1] ">
              Transactions
            </p>
            <div className="flex gap-[11px]">
              <button
                className={`w-[70px] rounded-[4px]  text-[12px] font-[600] ${
                  activeButton === "buy"
                    ? "border border-[#14F092]"
                    : "border border-[#2B2B2E] bg-[#171818]"
                }`}
                onClick={() => setActiveButton("buy")}
              >
                Buy
              </button>
              <button
                className={`w-[70px] rounded-[4px]  text-[12px] font-[600] ${
                  activeButton === "sell"
                    ? "border border-[#14F092]"
                    : "border border-[#2B2B2E] bg-[#171818]"
                }`}
                onClick={() => setActiveButton("sell")}
              >
                Sell
              </button>
            </div>
          </div>
          <p className="text-[24px] font-[600]">156,134,763</p>
        </div>
        <AreaCharts sortedData={sortedData} activeLine={activeLine} />
      </div>
      <div className="rounded-[6px] bg-[#111212]">
        <div className="px-[21px] pt-[12px]">
          <div className="mb-[10px] flex justify-between">
            <p className="text-[14px] font-[600] text-[#B1B1B1] ">Amount</p>
            <div className="flex gap-[11px]">
              <button
                className={`w-[70px] rounded-[4px]  text-[12px] font-[600] ${
                  activeButton2 === "buy"
                    ? "border border-[#14F092]"
                    : "border border-[#2B2B2E] bg-[#171818]"
                }`}
                onClick={() => setActiveButton2("buy")}
              >
                Buy
              </button>
              <button
                className={`w-[70px] rounded-[4px]  text-[12px] font-[600] ${
                  activeButton2 === "sell"
                    ? "border border-[#14F092]"
                    : "border border-[#2B2B2E] bg-[#171818]"
                }`}
                onClick={() => setActiveButton2("sell")}
              >
                Sell
              </button>
            </div>
          </div>
          <p className="text-[24px] font-[600]">156,134,763</p>
        </div>
        <AreaCharts sortedData={sortedData} activeLine={activeLine} />
      </div>
    </div>
  );
};

export default TradeActivityCharts;
