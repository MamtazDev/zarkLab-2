import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const QuickSearch = () => {
  const { subscription } = useContext(AuthContext);
  return (
    <div className="text-[#B0B0B0] mb-[25px]">
      {subscription === "free" ? (
        <div className="bg-[#161617] rounded-[2px] h-[39px] mb-[14px]"></div>
      ) : (
        <p className="mb-[8px] text-[12px] font-[400] text-[#B0B0B0]">
          Quick Search
        </p>
      )}

      <div className="flex gap-[16px] text-[12px] font-[400] overflow-y-scroll no-scrollbar">
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          Ethereum(ETH)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          Tether(USDT)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          Binance(BNB)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          XRP(XRP)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          Cardano(ADA)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          Dogecoin(DOGE)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          Solana(SOL)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[125px] px-[16px] py-[10px] text-center">
          TRON(TRx)
        </button>
      </div>
    </div>
  );
};

export default QuickSearch;
