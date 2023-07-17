import React from "react";
import Transactions from "./Transactions";
import AmountBarChat from "./AmountBarChat";
import AmountProgressChart from "./AmountProgressChart";

const TradeActivity = () => {
  return (
    <div className="mt-[46px]">
      <div className="grid items-center grid-cols-1 gap-[26px] lg:grid-cols-3 mb-[13px]">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A] mb-4">
          DAILY TRADE ACTIVITY
        </h3>
        <div className="col-span-2 bg-[#161617] rounded-[2px] h-[49px]"></div>
      </div>
      <Transactions />
      <AmountBarChat />
      {/* <AmountProgressChart /> */}
      <div className="col-span-2 bg-[#161617] rounded-[2px] h-[95px]"></div>
    </div>
  );
};

export default TradeActivity;
