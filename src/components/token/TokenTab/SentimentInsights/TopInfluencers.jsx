import React, { useState } from "react";

const TopInfluencers = () => {
  const [sorting, setSorting] = useState("followers");
  return (
    <div className="mt-[25px]">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A] mb-4">
          TOP INFLUENCERS
        </h3>
        <div className="flex gap-[16px]">
          <button
            onClick={() => setSorting("followers")}
            className={`${
              sorting === "followers"
                ? "text-white font-[600] border border-[#14F092]"
                : "text-[#B1B1B1] font-[400]"
            } w-[130px] bg-[#111212] rounded-[4px]  text-center py-[10px] text-[12px]  `}
          >
            By Followers
          </button>
          <button
            onClick={() => setSorting("likes")}
            className={`${
              sorting === "likes"
                ? "text-white font-[600] border border-[#14F092]"
                : "text-[#B1B1B1] font-[400]"
            } w-[130px] bg-[#111212] rounded-[4px]  text-center py-[10px] text-[12px]  `}
          >
            By Likes
          </button>
          <button
            onClick={() => setSorting("engagement")}
            className={`${
              sorting === "engagement"
                ? "text-white font-[600] border border-[#14F092]"
                : "text-[#B1B1B1] font-[400]"
            } w-[130px] bg-[#111212] rounded-[4px]  text-center py-[10px] text-[12px]  `}
          >
            By Engagement
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopInfluencers;
