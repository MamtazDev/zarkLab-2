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
import person1 from "../../../../../assets/images/person1.png";
import person2 from "../../../../../assets/icons/avatar2.png";
import person3 from "../../../../../assets/icons/avatar3.png";
import person4 from "../../../../../assets/icons/avatar4.png";
import person5 from "../../../../../assets/icons/avatar5.png";

import "./PriceMovement.css";

const data = [
  {
    name: "feb",
    Price: 40,
    RSI: 40,
    amt: 2400,
  },
  {
    name: "Feb",
    Price: 30,
    RSI: 40,

    amt: 2210,
  },
  {
    name: "Feb",
    Price: 40,
    RSI: 50,
    amt: 2250,
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

const PriceMovement = () => {
  const [activeLine, setActiveLine] = useState(["token", "category"]);
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
    <div className="mt-[33px] flex gap-[18px] flex-wrap xl:flex-nowrap">
      <div className="w-full xl:w-[860px]">
        <div className="flex flex-wrap gap-4 justify-between items-center mb-[21px]">
          <h3 className="text-[16px] text-[#8A8A8A] font-[600] ">
            PRICE MOVEMENT
          </h3>
          <div className="flex flex-wrap gap-[9px] items-center">
            <button
              onClick={() => handleActiveLIne("token")}
              className={`${
                activeLine.includes("token")
                  ? "border border-[#14F092] bg-[#0d0d0d] rounded-[4px] py-[5px] px-[25px]  text-[12px] font-[400]"
                  : "bg-[#202123] border border-transparent rounded-[4px] py-[5px] px-[25px]  text-[12px] font-[400]"
              }  `}
            >
              Token
            </button>
            <button
              onClick={() => handleActiveLIne("category")}
              className={`${
                activeLine.includes("category")
                  ? "border border-[#FFC459] bg-[#0d0d0d]  rounded-[4px] py-[5px] px-[25px]  text-[12px] font-[400]"
                  : "bg-[#202123] border border-transparent rounded-[4px] py-[5px] px-[25px]  text-[12px] font-[400] text-[#CDCDCD]"
              } `}
            >
              Category
            </button>
            <div className="relative">
              <input
                className="searchBenchmark outline-none inputFocus  border border-transparent  flex items-center gap-[7px] text-[12px] font-[400] text-[#CDCDCD] bg-[#202123] rounded-[4px] py-[5px] px-[16px]"
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
          </div>
        </div>
        <div className="pt-[10px] bg-[#111212] rounded-[6px] h-[355px]">
          <div className="mb-[20px] flex justify-between pl-[19px] pr-[60px]">
            <h4 className="">Token Price</h4>
            <div className="flex gap-[12px] items-center">
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

          <div className="pl-[19px] ">
            <ResponsiveContainer width="100%" height={210}>
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
                <YAxis axisLine={false} tickLine={false} orientation="right" />

                <Tooltip content={<CustomTooltip />} />
                {activeLine.includes("category") && (
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
          <div className="pl-[19px]">
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

                <YAxis axisLine={false} tickLine={false} orientation="right" />
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
                {activeLine.includes("category") && (
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

      <div className="w-full xl:w-[300px]">
        <div className=" topPersonsTable w-full mt-[-7px]">
          <table class="w-full">
            <thead>
              <tr className="">
                <th className="pl-[25px] py-[10px]">
                  <div className="text-start">
                    <p className="text-[15px] font-[600]">Top 5 Personas</p>
                    <p className="text-[13px] font-[400] text-[#B1B1B1]">
                      Persona
                    </p>
                  </div>
                </th>
                <th className="text-[13px] font-[400] text-[#B1B1B1] pr-[11px]">
                  Users|Volume
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-[25px] py-[10px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="w-[42px] h-[42px] rounded-full">
                      <img
                        src={person1}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-[15px] font-[600] ">Whales</p>
                  </div>
                </td>
                <td className="pr-[11px]">
                  <p className="bg-[#212123] text-center w-[95px] mx-auto px-[12px] text-[13px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                    13%|70%
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="pl-[25px] py-[10px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="w-[42px] h-[42px] rounded-full">
                      <img
                        src={person2}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-[15px] font-[600] ">Corporations</p>
                  </div>
                </td>
                <td className="pr-[11px]">
                  <p className="bg-[#212123] text-center w-[95px] mx-auto px-[12px] text-[13px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                    13%|70%
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="pl-[25px] py-[10px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="w-[42px] h-[42px] rounded-full">
                      <img
                        src={person3}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-[15px] font-[600] ">Day Traders</p>
                  </div>
                </td>
                <td className="pr-[11px]">
                  <p className="bg-[#212123] text-center w-[95px] mx-auto px-[12px] text-[13px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                    13%|70%
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="pl-[25px] py-[10px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="w-[42px] h-[42px] rounded-full">
                      <img
                        src={person4}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-[15px] font-[600] ">Users</p>
                  </div>
                </td>
                <td className="pr-[11px]">
                  <p className="bg-[#212123] text-center w-[95px] mx-auto px-[12px] text-[13px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                    13%|70%
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="pl-[25px] py-[10px]">
                  <div className="flex gap-[6px] items-center">
                    <div className="w-[42px] h-[42px] rounded-full">
                      <img
                        src={person5}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-[15px] font-[600] ">Team</p>
                  </div>
                </td>
                <td className="pr-[11px]">
                  <p className="bg-[#212123] text-center w-[95px] mx-auto px-[12px] text-[13px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                    13%|70%
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceMovement;
