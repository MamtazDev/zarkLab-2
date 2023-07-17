import React from "react";
import PopularWords from "./PopularWords";
import RecommendedTokens from "./RecommendedTokens";

const Words = () => {
  return (
    <div className="h-[358px] col-span-3 xl:col-span-1 ">
      {/* <PopularWords /> */}
      <RecommendedTokens />
    </div>
  );
};

export default Words;
