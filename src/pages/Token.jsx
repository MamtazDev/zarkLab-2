import React, { useContext, useState } from "react";
import TokenHeader from "../components/token/Header/TokenHeader";
import QuickSearch from "../components/token/QuickSearch/QuickSearch";
import TokenTab from "../components/token/TokenTab/TokenTab";
import Performance from "../components/token/TokenTab/Performance/Performance";
import TradeActivity from "../components/token/TokenTab/TradeActivity/TradeActivity";
import SentimentInsights from "../components/token/TokenTab/SentimentInsights/SentimentInsights";
import PriceInsights from "../components/Pro/token/TokenTab/Performance/PriceInsights";
import TokenBenchmarking from "../components/Pro/token/TokenTab/TradeActivity/TokenBenchmarking";
import TokenTabPro from "../components/Pro/token/TokenTab/TokenTabPro";
import { AuthContext } from "../contexts/AuthProvider";
import SocialSearch from "../components/Pro/token/TokenTab/SentimentInsights/SocialSearch";
import FraudDetection from "../components/Pro/token/TokenTab/FraudDetection/FraudDetection";
import FraudDetectionFree from "../components/token/TokenTab/FeaudDetection/FraudDetectionFree";

const Token = () => {
  const {
    subscription,
    activeTab,
    setActiveTab,
    activeTabPro,
    setActiveTapPro,
  } = useContext(AuthContext);

  return (
    <section className="p-[24px]">
      <TokenHeader />
      <QuickSearch />
      {subscription === "free" && (
        <TokenTab activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {subscription === "pro" && (
        <TokenTabPro
          activeTabPro={activeTabPro}
          setActiveTapPro={setActiveTapPro}
        />
      )}

      {activeTab === "performance" && subscription === "free" && (
        <Performance />
      )}
      {activeTabPro === "priceInsights" && subscription === "pro" && (
        <PriceInsights />
      )}

      {activeTab === "dailyTradeActivity" && subscription === "free" && (
        <TradeActivity />
      )}
      {activeTabPro === "tokenBenchmarking" && subscription === "pro" && (
        <TokenBenchmarking />
      )}

      {activeTab === "sentimentInsights" && subscription === "free" && (
        <SentimentInsights />
      )}

      {activeTabPro === "socialSearch" && subscription === "pro" && (
        <SocialSearch />
      )}

      {activeTabPro === "fraudDetection" && subscription === "pro" && (
        <FraudDetection />
      )}

      {activeTab === "fraudDetectionFree" && subscription === "free" && (
        <FraudDetectionFree />
      )}
    </section>
  );
};

export default Token;
