import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
  LineChart,
  Legend,
  Line,
} from "recharts";
import littleDownArrow from "../../../../../assets/icons/littleDownArrow.png";

const data = [
  {
    name: "Jan",
    Price: 0,
    RSI: 0,
    amt: 2400,
  },
  {
    name: "Feb",
    Price: 30,
    RSI: 40,
    amt: 2210,
  },
  {
    name: "Mar",
    Price: 50,
    RSI: 15,
    amt: 2290,
  },
  {
    name: "Apr",
    Price: 13,
    RSI: 47,
    amt: 2000,
  },
  {
    name: "May",
    Price: 30,
    RSI: 21,
    amt: 2181,
  },
  {
    name: "Jun",
    Price: 60,
    RSI: 20,
    amt: 2500,
  },
  {
    name: "Jul",
    Price: 20,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "Aug",
    Price: 50,
    RSI: 25,
    amt: 2100,
  },
  {
    name: "Sep",
    Price: 60,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "Oct",
    Price: 10,
    RSI: 35,
    amt: 2100,
  },
  {
    name: "Nov",
    Price: 50,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "Dec",
    Price: 13,
    RSI: 0,
    amt: 2100,
  },
];

const dataMonth = [
  {
    name: "Day 1",
    Price: 0,
    RSI: 0,
    amt: 2400,
  },
  {
    name: "Day 2",
    Price: 30,
    RSI: 40,
    amt: 2210,
  },
  {
    name: "Day 3",
    Price: 50,
    RSI: 15,
    amt: 2290,
  },
  {
    name: "Day 4",
    Price: 13,
    RSI: 47,
    amt: 2000,
  },
  {
    name: "Day 5",
    Price: 30,
    RSI: 21,
    amt: 2181,
  },
  {
    name: "Day 6",
    Price: 60,
    RSI: 20,
    amt: 2500,
  },
  {
    name: "Day 7",
    Price: 20,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "Day 8",
    Price: 50,
    RSI: 25,
    amt: 2100,
  },
  {
    name: "Day 9",
    Price: 60,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "Day 10",
    Price: 10,
    RSI: 35,
    amt: 2100,
  },
  {
    name: "Day 11",
    Price: 50,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "Day 12",
    Price: 13,
    RSI: 0,
    amt: 2100,
  },
  {
    name: "Day 13",
    Price: 40,
    RSI: 20,
    amt: 2100,
  },
  {
    name: "Day 14",
    Price: 25,
    RSI: 30,
    amt: 2100,
  },
  {
    name: "Day 15",
    Price: 35,
    RSI: 25,
    amt: 2100,
  },
  {
    name: "Day 16",
    Price: 15,
    RSI: 10,
    amt: 2100,
  },
  {
    name: "Day 17",
    Price: 45,
    RSI: 50,
    amt: 2100,
  },
  {
    name: "Day 18",
    Price: 20,
    RSI: 15,
    amt: 2100,
  },
  {
    name: "Day 19",
    Price: 30,
    RSI: 35,
    amt: 2100,
  },
  {
    name: "Day 20",
    Price: 50,
    RSI: 20,
    amt: 2100,
  },
  {
    name: "Day 21",
    Price: 55,
    RSI: 10,
    amt: 2100,
  },
  {
    name: "Day 22",
    Price: 25,
    RSI: 30,
    amt: 2100,
  },
  {
    name: "Day 23",
    Price: 40,
    RSI: 45,
    amt: 2100,
  },
  {
    name: "Day 24",
    Price: 15,
    RSI: 20,
    amt: 2100,
  },
  {
    name: "Day 25",
    Price: 10,
    RSI: 5,
    amt: 2100,
  },
  {
    name: "Day 26",
    Price: 35,
    RSI: 40,
    amt: 2100,
  },
  {
    name: "Day 27",
    Price: 20,
    RSI: 25,
    amt: 2100,
  },
  {
    name: "Day 28",
    Price: 30,
    RSI: 35,
    amt: 2100,
  },
  {
    name: "Day 29",
    Price: 50,
    RSI: 20,
    amt: 2100,
  },
  {
    name: "Day 30",
    Price: 55,
    RSI: 10,
    amt: 2100,
  },
];

const dataWeek = [
  {
    name: "Mon",
    Price: 0,
    RSI: 0,
    amt: 2400,
  },
  {
    name: "Tue",
    Price: 30,
    RSI: 40,
    amt: 2210,
  },
  {
    name: "Wed",
    Price: 50,
    RSI: 15,
    amt: 2290,
  },
  {
    name: "Thu",
    Price: 13,
    RSI: 47,
    amt: 2000,
  },
  {
    name: "Fri",
    Price: 30,
    RSI: 21,
    amt: 2181,
  },
  {
    name: "Sat",
    Price: 60,
    RSI: 20,
    amt: 2500,
  },
  {
    name: "Sun",
    Price: 20,
    RSI: 55,
    amt: 2100,
  },
];

const dataHour = [
  {
    name: "1h",
    Price: 0,
    RSI: 0,
    amt: 2400,
  },
  {
    name: "2h",
    Price: 30,
    RSI: 40,
    amt: 2210,
  },
  {
    name: "3h",
    Price: 50,
    RSI: 15,
    amt: 2290,
  },
  {
    name: "4h",
    Price: 13,
    RSI: 47,
    amt: 2000,
  },
  {
    name: "5h",
    Price: 30,
    RSI: 21,
    amt: 2181,
  },
  {
    name: "6h",
    Price: 60,
    RSI: 20,
    amt: 2500,
  },
  {
    name: "7h",
    Price: 20,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "8h",
    Price: 50,
    RSI: 25,
    amt: 2100,
  },
  {
    name: "9h",
    Price: 60,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "10h",
    Price: 10,
    RSI: 35,
    amt: 2100,
  },
  {
    name: "11h",
    Price: 50,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "12h",
    Price: 13,
    RSI: 0,
    amt: 2100,
  },
  {
    name: "13h",
    Price: 0,
    RSI: 0,
    amt: 2400,
  },
  {
    name: "14h",
    Price: 30,
    RSI: 40,
    amt: 2210,
  },
  {
    name: "15h",
    Price: 50,
    RSI: 15,
    amt: 2290,
  },
  {
    name: "16h",
    Price: 13,
    RSI: 47,
    amt: 2000,
  },
  {
    name: "17h",
    Price: 30,
    RSI: 21,
    amt: 2181,
  },
  {
    name: "18h",
    Price: 60,
    RSI: 20,
    amt: 2500,
  },
  {
    name: "19h",
    Price: 20,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "20h",
    Price: 50,
    RSI: 25,
    amt: 2100,
  },
  {
    name: "21h",
    Price: 60,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "22h",
    Price: 10,
    RSI: 35,
    amt: 2100,
  },
  {
    name: "23h",
    Price: 50,
    RSI: 55,
    amt: 2100,
  },
  {
    name: "24h",
    Price: 13,
    RSI: 0,
    amt: 2100,
  },
];

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

const PriceMovementChart = () => {
  const [activeLine, setActiveLine] = useState(["token"]);
  const [activeTime, setActiveTime] = useState("1y");

  const [searchData, setSearchData] = useState([
    { name: "mohicoin" },
    { name: "cryptocoin" },
    { name: "bitcoin" },
  ]);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (data) => {
    if (searchText) {
      return data.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    } else {
      return true;
    }
  };

  const [sortedData, setSortedData] = useState(data);

  const handleActiveLIne = (info) => {
    if (activeLine.includes(info)) {
      const data = activeLine.filter((i) => i !== info);
      setActiveLine(data);
    } else {
      setActiveLine([...activeLine, info]);
    }
  };

  return (
    <div className="mt-[31px]">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-[24px]">
        <h3 className="text-[16px] text-[#8A8A8A] font-[600] ">
          PRICE MOVEMENT
        </h3>
        <div className="flex flex-wrap gap-[9px] items-center">
          <button
            onClick={() => handleActiveLIne("token")}
            className={`${
              activeLine.includes("token")
                ? "border border-[#14F092] bg-[#0d0d0d] font-[600] rounded-[4px] py-[5px] px-[25px]  text-[9px]"
                : "bg-[#202123] border border-transparent rounded-[4px] py-[5px] px-[25px]  text-[9px] font-[600]"
            }  `}
          >
            Token
          </button>
          <div className="relative">
            <input
              className="searchBenchmark outline-none inputFocus  border border-transparent  flex items-center gap-[7px] text-[10px] font-[400] text-[#CDCDCD] bg-[#202123] rounded-[4px] py-[5px] px-[16px]"
              type="search"
              placeholder="Search Benchmark"
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <div className="bg-[#202123] px-[16px] text-[10px] font-[400] text-[#CDCDCD] absolute w-full">
                {searchData.filter(handleSearch).map((i) => (
                  <p>{i.name}</p>
                ))}
              </div>
            )}
          </div>
          {/* Add Benchmark{" "} */}
          {/* <img src={littleDownArrow} alt="" className="object-contain" /> */}
          {/* </input> */}
          <button
            onClick={() => handleActiveLIne("benchmark")}
            className={`${
              activeLine.includes("benchmark")
                ? "border border-[#FFC459] bg-[#0d0d0d] font-[600] text-[9px] py-[5px] px-[16px] rounded-[4px]"
                : "border border-transparent bg-[#202123] font-[600] text-[9px] py-[5px] px-[16px] rounded-[4px]"
            } `}
          >
            Industry Benchmark
            {/* <img src={littleDownArrow} alt="" className="object-contain" /> */}
          </button>
        </div>
      </div>
      <div className="py-[30px] bg-[#111212] rounded-[6px]">
        <div className="mb-[20px] flex justify-between px-[30px]">
          <h4 className="">Token Price</h4>
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
            <button
              className={`text-[12px] font-[400] text-[#666666]   ${
                activeTime === "all" && "border-b border-[#14F092] text-white"
              } `}
              onClick={() => {
                setActiveTime("all");
                setSortedData(data);
              }}
            >
              All
            </button>
          </div>
        </div>

        <div className="mb-8">
          <ResponsiveContainer width="100%" height={240}>
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
              </defs>
              <XAxis dataKey="name" tick={null} />
              <YAxis tickLine={false} axisLine={false} />

              <Tooltip content={<CustomTooltip />} />
              {activeLine.includes("benchmark") && (
                <Area
                  type="linear"
                  dataKey="Price"
                  stroke="#ffc459"
                  strokeWidth={1}
                  fillOpacity={0.3}
                  fill="url(#colorpresent)"
                  connectNulls={false}
                />
              )}
              {activeLine.includes("token") && (
                <Area
                  type="linear"
                  connectNulls={false}
                  dataKey="RSI"
                  stroke="#14f092"
                  strokeWidth={1}
                  fillOpacity={0.3}
                  fill="url(#colorabsent)"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={sortedData}>
              <defs>
                <linearGradient id="colorabsent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14f092" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#14f092" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorpresent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffc459" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ffc459" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              {activeLine.includes("token") && (
                <Line
                  type="monotone"
                  dataKey="RSI"
                  stroke="#14f092"
                  strokeWidth={2}
                  fillOpacity={1}
                  dot={false}
                  fill="url(#colorabsent)"
                />
              )}
              {activeLine.includes("benchmark") && (
                <Line
                  type="monotone"
                  dataKey="Price"
                  stroke="#ffc459"
                  strokeWidth={2}
                  fillOpacity={1}
                  dot={false}
                  fill="url(#colorpresent)"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PriceMovementChart;
