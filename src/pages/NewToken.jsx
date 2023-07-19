import React from "react";
import TokenHeader from "../components/NewPro/token/Header/TokenHeader.jsx";
import QuickSearch from "../components/NewPro/token/QuickSearch/QuickSearch.jsx";
import TabToken from "../components/NewPro/token/tokenTab/TabToken.jsx";
import { useSelector } from "react-redux";
import PriceInsights from "../components/NewPro/token/tokenTab/PriceInsights/PriceInsights.jsx";
import SocialSearch from "../components/NewPro/token/tokenTab/SocialSearch/SocialSearch.jsx";
import FraudDetection from "../components/NewPro/token/tokenTab/FraudDetection/FraudDetection.jsx";

const NewToken = () => {
  const { activeTab } = useSelector((state) => state.tokenCommen);
  return (
    <>
      <div className="px-[34px] border-b border-b-[#2B2C2F]">
        <TokenHeader />
        <QuickSearch />
      </div>
      <div className="px-[34px]">
        <TabToken />
        {activeTab === "priceInsights" && <PriceInsights />}
        {activeTab === "socialSearch" && <SocialSearch />}
        {activeTab === "fraudDetection" && <FraudDetection />}
      </div>
    </>
  );
};

export default NewToken;
