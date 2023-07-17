import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const PriceMovementChart = () => {
  const data = [
    {
      name: "Jan",
      absent: 0,
      amt: 2400,
    },
    {
      name: "Feb",
      absent: 40,
      amt: 2210,
    },
    {
      name: "Mar",
      absent: 15,
      amt: 2290,
    },
    {
      name: "Apr",
      absent: 47,
      amt: 2000,
    },
    {
      name: "may",
      absent: 21,
      amt: 2181,
    },
    {
      name: "Jun",
      absent: 20,
      amt: 2500,
    },
    {
      name: "Jul",
      absent: 55,
      amt: 2100,
    },
    {
      name: "Aug",
      absent: 25,
      amt: 2100,
    },
    {
      name: "Sep",
      absent: 55,
      amt: 2100,
    },
    {
      name: "Oct",
      absent: 35,
      amt: 2100,
    },
    {
      name: "Nov",
      absent: 55,
      amt: 2100,
    },
    {
      name: "Dec",
      absent: 0,
      amt: 2100,
    },
  ];
  const [activeLine, setActiveLine] = useState(["token", "benchmark"]);
  const [activeTime, setActiveTime] = useState("1y");

  const [sortedData, setSortedData] = useState(data);

  const handleActiveLIne = (info) => {
    if (activeLine.includes(info)) {
      const data = activeLine.filter((i) => i !== info);
      setActiveLine(data);
    } else {
      setActiveLine([...activeLine, info]);
    }
  };
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
  return (
    <div className="mt-[60px]">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-10">
        <h3 className="text-[16px] text-[#8A8A8A] font-[600] ">
          PRICE MOVEMENT
        </h3>
        <div className="flex flex-wrap gap-[9px] items-center">
          <button
            onClick={() => handleActiveLIne("token")}
            className={`${
              activeLine.includes("token") &&
              "border border-[#14F092] bg-[#0d0d0d] font-[600]"
            } bg-[#202123] rounded-[4px] py-[9px] px-[16px]  text-[9px] font-[400] `}
          >
            Token
          </button>

          <button
            onClick={() => handleActiveLIne("benchmark")}
            className={`${
              activeLine.includes("benchmark") && "  bg-[#0d0d0d] font-[600] "
            } bg-[#202123]  text-[9px] font-[400] text-[#CDCDCD]  rounded-[4px] py-[10px] px-[16px]`}
          >
            Industry Benchmark
          </button>
        </div>
      </div>
      <div className="p-[30px] bg-[#111212] rounded-[6px] h-[320px] overflow-hidden">
        <div className="mb-[20px] flex justify-between px-[30px]">
          <h4 className="">Token Price (USD)</h4>
          <div className="flex gap-[10px] items-center">
            <button
              className={`text-[12px] font-[400]  text-[#666666] ${
                activeTime === "24h" && "border-b border-[#14F092] text-white"
              } `}
              onClick={() => {
                setActiveTime("24h");
                setSortedData(dataHour);
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
                setSortedData(dataWeek);
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
                setSortedData(dataMonth);
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
                setSortedData(data);
              }}
            >
              1y
            </button>
            <button className="text-[12px] font-[400] text-[#666666] ">
              All
            </button>
          </div>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={140}>
            <AreaChart data={data}>
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
              <XAxis dataKey="name" tickLine={false} />
              <YAxis tickLine={false} axisLine={false} />

              <Tooltip content={<CustomTooltip />} />
              <Area
                type="linear"
                dataKey="absent"
                stroke="#14f092"
                strokeWidth={2}
                fillOpacity={0.2}
                fill="url(#colorabsent)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PriceMovementChart;
