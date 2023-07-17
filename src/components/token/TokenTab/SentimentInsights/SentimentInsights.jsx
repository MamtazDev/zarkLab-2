import React from "react";
import MediaStats from "./MediaStats";
import TopInfluencers from "./TopInfluencers";

const SentimentInsights = () => {
  return (
    <div className="mt-[46px]">
      <div className="grid items-center grid-cols-1 lg:grid-cols-4 gap-[24px] mb-[14px]">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A]">
          DAILY SOCIAL MEDIA STATS
        </h3>
        <div className="col-span-2 bg-[#161617] rounded-[2px] h-[49px]"></div>
        <div className=" bg-[#161617] rounded-[2px] h-[49px]"></div>
      </div>
      <MediaStats />
      {/* <TopInfluencers /> */}
      <div className=" bg-[#161617] rounded-[2px] h-[95px]"></div>
    </div>
  );
};

export default SentimentInsights;
