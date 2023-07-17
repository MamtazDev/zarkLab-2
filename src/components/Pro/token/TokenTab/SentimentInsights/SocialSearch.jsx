import React, { useState } from "react";
import MediaStats from "./MediaStats";
import TopInfluencers from "./TopInfluencers";

const SocialSearch = () => {
  const [active, setActive] = useState("1w");
  return (
    <div className="mt-[46px]">
      <div className="flex  flex-col lg:flex-row gap-4 justify-between items-center mt-[23px] mb-[13px]">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A] ">
          SOCIAL MEDIA STATS
        </h3>
        <div className="flex gap-[10px] items-center">
          <button
            className={`text-[12px] font-[400] ${
              active === "24h" ? "text-white" : "text-[#666]"
            } ${active === "24h" && "border-b border-[#14F092] "}`}
            onClick={() => setActive("24h")}
          >
            24h
          </button>
          <button
            className={`text-[12px] font-[400] ${
              active === "1w" ? "text-white" : "text-[#666]"
            } ${active === "1w" && "border-b border-[#14F092] "}`}
            onClick={() => setActive("1w")}
          >
            1w
          </button>
          <button
            className={`text-[12px] font-[400] ${
              active === "1m" ? "text-white" : "text-[#666]"
            } ${active === "1m" && "border-b border-[#14F092] "}`}
            onClick={() => setActive("1m")}
          >
            1m
          </button>
        </div>
      </div>
      <MediaStats />
      <TopInfluencers />
    </div>
  );
};

export default SocialSearch;
