import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="price">
          <span>Token:</span> {payload[0]?.value}
        </p>
        <p className="rsi">
          <span>Category:</span> {payload[1]?.value}
        </p>
        <p className="rsi">
          <span>Benchmark:</span> {payload[2]?.value}
        </p>
      </div>
    );
  }
  return null;
};

const AreaCharts = ({ sortedData, activeLine, hg }) => {
  return (
    <div className="pl-[21px]">
      <ResponsiveContainer width="100%" height={hg ? hg : 230}>
        <AreaChart data={sortedData}>
          <defs>
            <linearGradient id="colorabsent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14f092" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#14f092" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorpresent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc459" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffc459" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorgg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#59f5ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#59f5ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickLine={false} orientation="right" />
          {/* <Tooltip /> */}
          {/* <CartesianGrid component={HorizontalGridCartesianGrid} />{" "} */}
          {/* Only horizontal grid lines */}
          {activeLine.includes("token") && (
            <Area
              type="linear"
              dataKey="absent"
              stroke="#14f092"
              strokeWidth={3}
              fillOpacity={0.2}
              fill="url(#colorabsent)"
              connectNulls
            />
          )}
          {activeLine.includes("category") && (
            <Area
              type="linear"
              dataKey="present"
              stroke="#ffc459"
              strokeWidth={3}
              fillOpacity={0.2}
              fill="url(#colorpresent)"
              connectNulls
            />
          )}
          {/* {activeLine.includes("benchmark") && ( */}
          <Area
            type="linear"
            dataKey="gg"
            stroke="#59f5ff"
            strokeWidth={3}
            fillOpacity={0.2}
            fill="url(#colorgg)"
            connectNulls
          />
          {/* )} */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
