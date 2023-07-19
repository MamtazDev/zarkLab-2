import React from "react";
import "./tokenTab.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../features/Premuim/Token/common/tokenCommonSlice";

const TabToken = () => {
  const { activeTab } = useSelector((state) => state.tokenCommen);
  const dispatch = useDispatch();
  return (
    <div className="overflow-y-scroll no-scrollbar w-full flex gap-4 lg:gap-0   mt-[32px] border-b-[2px] border-[#212123] text-[14px] font-[600] text-[#666666]">
      <p
        className={`w-full text-center pb-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTab === "priceInsights" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => dispatch(setActiveTab("priceInsights"))}
      >
        Price Insights
      </p>
      <p
        className={`w-full text-center pb-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTab === "socialSearch" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => dispatch(setActiveTab("socialSearch"))}
      >
        Social Search
      </p>
      <p
        className={`w-full text-center pb-[12px] tab cursor-pointer whitespace-nowrap ${
          activeTab === "fraudDetection" && "border-b-[2px] border-[#14F092]"
        } `}
        onClick={() => dispatch(setActiveTab("fraudDetection"))}
      >
        Fraud Detection
      </p>
    </div>
  );
};

export default TabToken;
