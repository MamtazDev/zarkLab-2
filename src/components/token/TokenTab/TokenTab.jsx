import React from "react";
import "./TokenTab.css";

const TokenTab = ({ activeTab, setActiveTab }) => {
  return (
    <div className="overflow-y-scroll no-scrollbar w-full flex gap-4 whitespace-nowrap  border-b-[2px] border-[#212123] text-[14px] font-[600] text-[#666666]">
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer ${
          activeTab === "performance" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTab("performance")}
      >
        Price Insights
      </p>
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer ${
          activeTab === "dailyTradeActivity" &&
          "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTab("dailyTradeActivity")}
      >
        Token Benchmarking
      </p>
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer ${
          activeTab === "sentimentInsights" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTab("sentimentInsights")}
      >
        Social Search
      </p>
      <p
        className={`w-full text-center py-[12px] tab cursor-pointer ${
          activeTab === "fraudDetectionFree" &&
          "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => setActiveTab("fraudDetectionFree")}
      >
        Fraud Detection
      </p>
    </div>
  );
};

export default TokenTab;
