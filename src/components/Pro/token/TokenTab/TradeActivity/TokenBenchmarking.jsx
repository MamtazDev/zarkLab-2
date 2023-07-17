import React, { useState } from "react";
import littleDownArrow from "../../../../../assets/icons/littleDownArrow.png";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import ThirdColumn from "./ThirdColumn";

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

const TokenBenchmarking = () => {
  const [sortedData, setSortedData] = useState(data);
  const [activeLine, setActiveLine] = useState([
    "token",
    "benchmark",
    "industry",
  ]);
  const [activeTime, setActiveTime] = useState("1w");

  const handleActiveLIne = (info) => {
    if (activeLine.includes(info)) {
      const data = activeLine.filter((i) => i !== info);
      setActiveLine(data);
    } else {
      setActiveLine([...activeLine, info]);
    }
  };

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
  return (
    <div className="mt-[46px]">
      <div className="flex gap-4 flex-col lg:flex-row justify-between items-center mb-4">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A] ">
          TRADE ACTIVITY
        </h3>
        <div className="flex  flex-col lg:flex-row   gap-[30px] items-center">
          <div className="flex gap-[9px]">
            <button
              className={`${
                activeLine.includes("token") && "border border-[#14F092]"
              } rounded-[4px] py-[6px] px-[16px]  text-[10px] font-[600]`}
              onClick={() => handleActiveLIne("token")}
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
            {/* Add ETH Benchmark{" "} */}
            {/* <img src={littleDownArrow} alt="" className="object-contain" /> */}
            {/* </input> */}
            <button
              className={`${
                activeLine.includes("industry") && "border border-[#FFC459]"
              } flex items-center gap-[7px] text-[9px] font-[400] text-[#CDCDCD]  rounded-[4px] py-[6px] px-[6px] md:px-[16px]`}
              onClick={() => handleActiveLIne("industry")}
            >
              Industry Benchmark{" "}
              {/* <img src={littleDownArrow} alt="" className="object-contain" /> */}
            </button>
          </div>
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
      {/* <Transactions />
      <AmountBarChat />
      <AmountProgressChart /> */}
      <div className="grid grid-cols-1 lg:grid-cols- xl:grid-cols-3 gap-[25px]">
        <FirstColumn
          sortedData={sortedData}
          activeLine={activeLine}
          handleActiveLIne={handleActiveLIne}
        />
        <SecondColumn
          sortedData={sortedData}
          activeLine={activeLine}
          handleActiveLIne={handleActiveLIne}
        />
        <ThirdColumn
          sortedData={sortedData}
          activeLine={activeLine}
          handleActiveLIne={handleActiveLIne}
        />
      </div>
    </div>
  );
};

export default TokenBenchmarking;
