import React, { useState } from "react";
import infoIcon from "../../../../../assets/icons/infoIconLittle.png";
import informationIcon from "../../../../../assets/icons/infoIconLittle.png";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="price">
          <span>Price:</span> {payload[0]?.value}
        </p>
        <p className="rsi">
          <span>RSI:</span> {payload[1]?.value}
        </p>
      </div>
    );
  }
  return null;
};

const BuySellMovement = ({ sortedData, activeLine }) => {
  const [info, setInfo] = useState(false);
  const [activeTime, setActiveTime] = useState("1w");
  const data = [
    {
      name: "Jan",
      Sell: 4000,
      Buy: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      Sell: 3000,
      Buy: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      Sell: 2000,
      Buy: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      Sell: 2780,
      Buy: 3908,
      amt: 2000,
    },
    {
      name: "May",
      Sell: 1890,
      Buy: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      Sell: 2390,
      Buy: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      Sell: 3490,
      Buy: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      Sell: 2490,
      Buy: 1300,
      amt: 2100,
    },
    {
      name: "Sep",
      Sell: 3490,
      Buy: 3100,
      amt: 2100,
    },
    {
      name: "Oct",
      Sell: 3190,
      Buy: 3300,
      amt: 2100,
    },
    {
      name: "Nov",
      Sell: 3590,
      Buy: 2300,
      amt: 2100,
    },
    {
      name: "Dec",
      Sell: 2354,
      Buy: 3300,
      amt: 2100,
    },
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="price">
            <span>Date:</span> 05 Mar 2023 | 02:53
          </p>
          <p className="price">
            <span>Buy:</span> {payload[0]?.value}
          </p>
          <p className="rsi">
            <span>Sell:</span> {payload[1]?.value}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="bg-[#111212] p-0 lg:p-[20px] mt-[15px]">
      <div className="flex flex-col lg:flex-row justify-between mb-[30px]">
        <h3 className="p-5 lg:p-0 text-[16px] font-[600] text-[#8A8A8A] flex items-center gap-[10px] relative">
          Buy/ Sell Movement{" "}
          <div className="tooltip cursor-pointer">
            <img
              src={informationIcon}
              alt=""
              className="object-contain mb-[20px]"
            />
            <p className="tooltiptext rounded-[6px] border border-[#666] px-[10px] py-[8px] w-[216px] text-[12px] font-[400] top-0 left-4 bg-[#212123]">
              Anomaly is detected when there is a sudden spike in buy or sell
              action
            </p>
          </div>
        </h3>
        <div className="flex gap-[10px] items-center">
          <button
            className={`text-[12px] font-[400]  text-[#666666] ${
              activeTime === "24h" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("24h");
              // setSortedData(dataHour);
            }}
          >
            24h
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]  ${
              activeTime === "1w" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("1w");
              // setSortedData(data);
            }}
          >
            1w
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]  ${
              activeTime === "1m" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("1m");
              // setSortedData(dataMonth);
            }}
          >
            1m
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]   ${
              activeTime === "1y" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("1y");
              // setSortedData(dataYear);
            }}
          >
            1y
          </button>
          <button
            className={`text-[12px] font-[400] text-[#666666]   ${
              activeTime === "all" && "border-b border-[#14F092] text-white"
            } `}
            onClick={() => {
              setActiveTime("all");
              // setSortedData(dataYear);
            }}
          >
            All
          </button>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorabsent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#59F5FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#59F5FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorpresent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14F092" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14F092" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine={false} />
            <YAxis yAxisId="left" axisLine={false} tickLine={false} />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
            />
            <Legend />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              yAxisId="left"
              dataKey="Sell"
              stroke="#59F5FF"
              strokeWidth={1}
              fillOpacity={0.2}
              fill="url(#colorabsent)"
              connectNulls
            />

            <Area
              type="linear"
              dataKey="Buy"
              yAxisId="right"
              stroke="#14F092"
              strokeWidth={1}
              fillOpacity={0.2}
              fill="url(#colorpresent)"
              connectNulls
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuySellMovement;
