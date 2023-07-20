import React, { useState } from "react";
import avatar1 from "../../../../../assets/images/miniAvatar1.png";
import avatar2 from "../../../../../assets/images/miniAvatar2.png";
import avatar3 from "../../../../../assets/images/miniAvatar3.png";
import avatar4 from "../../../../../assets/images/miniAvatar4.png";
import avatar5 from "../../../../../assets/images/miniAvatar5.png";
import TradeActivityCharts from "./TradeActivityCharts";

const data = [
  {
    name: "Mon",
    absent: 0,
    present: 40,
    gg: 25,
    amt: 2400,
  },
  {
    name: "Tue",
    absent: 17,
    present: 30,
    gg: 20,
    amt: 2210,
  },
  {
    name: "Wed",
    absent: 15,
    present: 50,
    gg: 32,
    amt: 2290,
  },
  {
    name: "Thu",
    absent: 47,
    present: 13,
    gg: 15,
    amt: 2000,
  },
  {
    name: "Fri",
    absent: 21,
    present: 30,
    gg: 25,
    amt: 2181,
  },
  {
    name: "Sat",
    absent: 50,
    present: 40,
    gg: 35,
    amt: 2500,
  },
  {
    name: "Sun",
    absent: 55,
    present: 50,
    gg: 40,
    amt: 2100,
  },
];

const dataHour = [
  {
    name: 0,
    absent: 5,
    present: 25,
    gg: 18,
    amt: 2360,
  },
  {
    name: 1,
    absent: 8,
    present: 20,
    gg: 12,
    amt: 2205,
  },
  {
    name: 2,
    absent: 10,
    present: 30,
    gg: 23,
    amt: 2487,
  },
  {
    name: 3,
    absent: 15,
    present: 28,
    gg: 21,
    amt: 2122,
  },
  {
    name: 4,
    absent: 12,
    present: 22,
    gg: 17,
    amt: 1980,
  },
  {
    name: 5,
    absent: 6,
    present: 18,
    gg: 13,
    amt: 1855,
  },
  {
    name: 6,
    absent: 3,
    present: 20,
    gg: 15,
    amt: 2010,
  },
  {
    name: 7,
    absent: 9,
    present: 25,
    gg: 19,
    amt: 2295,
  },
  {
    name: 8,
    absent: 13,
    present: 32,
    gg: 25,
    amt: 2650,
  },
  {
    name: 9,
    absent: 18,
    present: 35,
    gg: 28,
    amt: 2790,
  },
  {
    name: 10,
    absent: 20,
    present: 40,
    gg: 30,
    amt: 2940,
  },
  {
    name: 11,
    absent: 15,
    present: 35,
    gg: 26,
    amt: 2750,
  },
  {
    name: 12,
    absent: 10,
    present: 30,
    gg: 22,
    amt: 2480,
  },
  {
    name: 13,
    absent: 8,
    present: 25,
    gg: 18,
    amt: 2350,
  },
  {
    name: 14,
    absent: 6,
    present: 20,
    gg: 14,
    amt: 2080,
  },
  {
    name: 15,
    absent: 5,
    present: 18,
    gg: 12,
    amt: 1970,
  },
  {
    name: 16,
    absent: 7,
    present: 22,
    gg: 15,
    amt: 2130,
  },
  {
    name: 17,
    absent: 12,
    present: 28,
    gg: 20,
    amt: 2290,
  },
  {
    name: 18,
    absent: 15,
    present: 32,
    gg: 23,
    amt: 2420,
  },
  {
    name: 19,
    absent: 18,
    present: 35,
    gg: 26,
    amt: 2570,
  },
  {
    name: 20,
    absent: 20,
    present: 40,
    gg: 28,
    amt: 2730,
  },
  {
    name: 21,
    absent: 16,
    present: 35,
    gg: 24,
    amt: 2590,
  },
  {
    name: 22,
    absent: 10,
    present: 30,
    gg: 19,
    amt: 2340,
  },
  {
    name: 23,
    absent: 7,
    present: 25,
    gg: 16,
    amt: 2170,
  },
];

const dataYear = [
  { name: "Jan", absent: 80, present: 930, gg: 480, amt: 67890 },
  { name: "Feb", absent: 100, present: 950, gg: 520, amt: 71230 },
  { name: "Mar", absent: 110, present: 880, gg: 530, amt: 69670 },
  { name: "Apr", absent: 90, present: 920, gg: 510, amt: 70450 },
  { name: "May", absent: 120, present: 940, gg: 550, amt: 72980 },
  { name: "Jun", absent: 140, present: 970, gg: 590, amt: 74560 },
  { name: "Jul", absent: 130, present: 950, gg: 570, amt: 73210 },
  { name: "Aug", absent: 100, present: 900, gg: 500, amt: 68890 },
  { name: "Sep", absent: 90, present: 890, gg: 480, amt: 66980 },
  { name: "Oct", absent: 110, present: 920, gg: 510, amt: 69340 },
  { name: "Nov", absent: 120, present: 950, gg: 530, amt: 70820 },
  { name: "Dec", absent: 100, present: 930, gg: 510, amt: 69230 },
];

const dataMonth = [
  { name: 1, absent: 5, present: 25, gg: 18, amt: 2360 },
  { name: 2, absent: 8, present: 20, gg: 12, amt: 2205 },
  { name: 3, absent: 10, present: 30, gg: 23, amt: 2487 },
  { name: 4, absent: 15, present: 28, gg: 21, amt: 2122 },
  { name: 5, absent: 12, present: 22, gg: 17, amt: 1980 },
  { name: 6, absent: 6, present: 18, gg: 13, amt: 1855 },
  { name: 7, absent: 3, present: 20, gg: 15, amt: 2010 },
  { name: 8, absent: 9, present: 25, gg: 19, amt: 2295 },
  { name: 9, absent: 13, present: 32, gg: 25, amt: 2650 },
  { name: 10, absent: 18, present: 35, gg: 28, amt: 2790 },
  { name: 11, absent: 20, present: 40, gg: 30, amt: 2940 },
  { name: 12, absent: 15, present: 35, gg: 26, amt: 2750 },
  { name: 13, absent: 10, present: 30, gg: 22, amt: 2480 },
  { name: 14, absent: 8, present: 25, gg: 18, amt: 2350 },
  { name: 15, absent: 6, present: 20, gg: 14, amt: 2080 },
  { name: 16, absent: 5, present: 18, gg: 12, amt: 1970 },
  { name: 17, absent: 7, present: 22, gg: 15, amt: 2130 },
  { name: 18, absent: 12, present: 28, gg: 20, amt: 2290 },
  { name: 19, absent: 15, present: 32, gg: 23, amt: 2420 },
  { name: 20, absent: 18, present: 35, gg: 26, amt: 2570 },
  { name: 21, absent: 20, present: 40, gg: 28, amt: 2730 },
  { name: 22, absent: 16, present: 35, gg: 24, amt: 2590 },
  { name: 23, absent: 10, present: 30, gg: 19, amt: 2340 },
  { name: 24, absent: 7, present: 25, gg: 16, amt: 2170 },
  { name: 25, absent: 5, present: 22, gg: 14, amt: 2020 },
  { name: 26, absent: 8, present: 27, gg: 17, amt: 2255 },
  { name: 27, absent: 12, present: 32, gg: 20, amt: 2480 },
  { name: 28, absent: 15, present: 35, gg: 23, amt: 2610 },
  { name: 29, absent: 17, present: 38, gg: 25, amt: 2750 },
  { name: 30, absent: 10, present: 30, gg: 19, amt: 2340 },
];

const TradeActivities = () => {
  const [activeLine, setActiveLine] = useState(["token", "category"]);
  const [activeTime, setActiveTime] = useState("1y");
  const [activeTrader, setActiveTrader] = useState("all");
  const [sortedData, setSortedData] = useState(data);

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

  const handleActiveLIne = (info) => {
    if (activeLine.includes(info)) {
      const data = activeLine.filter((i) => i !== info);
      setActiveLine(data);
    } else {
      setActiveLine([...activeLine, info]);
    }
  };
  return (
    <div className="mt-[38px]">
      <div className="flex flex-col md:flex-row gap-[21px] md:gap-0 items-center justify-between ">
        <h3 className="text-[16px] text-[#8A8A8A] font-[600] ">
          TRADE ACTIVITY
        </h3>
        <div className="flex items-center  flex-col md:flex-row gap-[21px]">
          <div className="flex flex-wrap gap-[9px] items-center justify-center">
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
                setSortedData(data);
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
                setSortedData(dataYear);
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
                setSortedData(dataYear);
              }}
            >
              All
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[27px] flex gap-[15px] items-center overflow-y-scroll no-scrollbar">
        <div>
          <button
            onClick={() => setActiveTrader("all")}
            className={`px-[15px] py-[9px] whitespace-nowrap rounded-[4px] text-[12px] font-[600] ${
              activeTrader === "all"
                ? " bg-[#0d0d0d] border border-[#14F092]"
                : "bg-[#161617] border border-transparent"
            }`}
          >
            All
          </button>
        </div>
        <div>
          <button
            className={`w-[117px] whitespace-nowrap  rounded-[4px] py-[6px] flex items-center justify-center gap-[6px] text-[12px] font-[400] ${
              activeTrader === "whales"
                ? "bg-[#0d0d0d] border border-[#14F092]"
                : "bg-[#161617] border border-transparent"
            }`}
            onClick={() => setActiveTrader("whales")}
          >
            <img src={avatar1} alt="" /> Whales
          </button>
        </div>
        <div>
          <button
            className={`w-[117px] whitespace-nowrap  rounded-[4px] py-[6px] flex items-center justify-center gap-[6px] text-[12px] font-[400] ${
              activeTrader === "businesses"
                ? "bg-[#0d0d0d] border border-[#14F092]"
                : "bg-[#161617] border border-transparent"
            }`}
            onClick={() => setActiveTrader("businesses")}
          >
            <img src={avatar2} alt="" /> Businesses
          </button>
        </div>
        <div>
          <button
            className={`w-[117px] whitespace-nowrap  rounded-[4px] py-[6px] flex items-center justify-center gap-[6px] text-[12px] font-[400] ${
              activeTrader === "dayTraders"
                ? "bg-[#0d0d0d] border border-[#14F092]"
                : "bg-[#161617] border border-transparent"
            }`}
            onClick={() => setActiveTrader("dayTraders")}
          >
            <img src={avatar3} alt="" /> Day Traders
          </button>
        </div>
        <div>
          <button
            className={`w-[117px] whitespace-nowrap rounded-[4px] py-[6px] flex items-center justify-center gap-[6px] text-[12px] font-[400] ${
              activeTrader === "explorers"
                ? "bg-[#0d0d0d] border border-[#14F092]"
                : "bg-[#161617] border border-transparent"
            }`}
            onClick={() => setActiveTrader("explorers")}
          >
            <img src={avatar4} alt="" />
            Explorers
          </button>
        </div>
        <div>
          <button
            className={`w-[117px] whitespace-nowrap  rounded-[4px] py-[6px] flex items-center justify-center gap-[6px] text-[12px] font-[400] ${
              activeTrader === "team"
                ? "bg-[#0d0d0d] border border-[#14F092]"
                : "bg-[#161617] border border-transparent"
            }`}
            onClick={() => setActiveTrader("team")}
          >
            <img src={avatar5} alt="" />
            Team
          </button>
        </div>
      </div>

      <TradeActivityCharts sortedData={sortedData} activeLine={activeLine} />
    </div>
  );
};

export default TradeActivities;
