import React from "react";
import "./TokenTab.css";

const TokenTabPro = ({ activeTabPro, setActiveTapPro }) => {
  return (
    <div className="overflow-y-scroll no-scrollbar w-full flex gap-4   mt-[40px] border-b-[2px] border-[#212123] text-[14px] font-[600] text-[#666666]">
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTabPro === "priceInsights" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTapPro("priceInsights")}
      >
        Price Insights
      </p>
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTabPro === "tokenBenchmarking" &&
          "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTapPro("tokenBenchmarking")}
      >
        Token Benchmarking
      </p>
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTabPro === "socialSearch" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTapPro("socialSearch")}
      >
        Social Search
      </p>
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTabPro === "fraudDetection" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTapPro("fraudDetection")}
      >
        Fraud Detection
      </p>
    </div>
  );
};

export default TokenTabPro;
