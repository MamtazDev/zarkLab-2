import React from "react";
import MediaActivitices from "./MediaActivitices";
import Words from "./Words";

const MediaStats = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-[17px]">
      <div className="col-span-3">
        <MediaActivitices />
      </div>
      <Words />
    </div>
  );
};

export default MediaStats;
