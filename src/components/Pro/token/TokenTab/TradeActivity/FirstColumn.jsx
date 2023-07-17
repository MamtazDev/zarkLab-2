import React, { useState } from "react";
import zoomInIcon from "../../../../../assets/icons/zoomInBlackIcon.png";
import "./FitstColumn.css";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import person1 from "../../../../../assets/images/person1.png";
import person2 from "../../../../../assets/images/person2.png";
import person3 from "../../../../../assets/images/person3.png";
import person4 from "../../../../../assets/images/person4.png";
import person5 from "../../../../../assets/images/person5.png";
import ChartModal from "../../../../../utils/modal/ChartModal";

const FirstColumn = ({ sortedData, activeLine }) => {
  const [activity, setActivity] = useState("active");
  const [showModal, setShowModal] = useState(false);

  const data1 = [
    {
      name: "Mon",
      absent: 40,
      present: 10,
      gg: 5,
      amt: 2400,
    },
    {
      name: "Tue",
      absent: 11,
      present: 20,
      gg: 12,
      amt: 2210,
    },
    {
      name: "Wed",
      absent: 23,
      present: 36,
      gg: 21,
      amt: 2290,
    },
    {
      name: "Thu",
      absent: 17,
      present: 30,
      gg: 15,
      amt: 2000,
    },
    {
      name: "Fri",
      absent: 19,
      present: 35,
      gg: 29,
      amt: 2181,
    },
    {
      name: "Sat",
      absent: 6,
      present: 10,
      gg: 45,
      amt: 2500,
    },
    {
      name: "Sun",
      absent: 15,
      present: 20,
      gg: 36,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div className=" bg-[#111212] rounded-[6px] h-[209px]">
        <div className="w-full flex  gap-[14px] justify-between pt-[11px] px-[16px]">
          <button
            onClick={() => setActivity("active")}
            className={`text-center py-[4px] text-[14px] font-[600] border ${
              activity === "active" ? "border-[#14F092] " : "border-[#2B2B2E]"
            } rounded-[4px] w-full `}
          >
            Active Wallet
          </button>
          <button
            onClick={() => setActivity("new")}
            className={`w-full bg-[#171818] py-[4px] text-[14px] font-[600] rounded-[4px] text-center border ${
              activity === "new" ? "border-[#14F092] " : "border-[#2B2B2E]"
            }`}
          >
            New Wallet
          </button>
        </div>

        <div className="mt-[10px] mb-[7px] px-[16px]">
          <div className="flex justify-between items-center">
            <p className="text-[26px] font-[600]">18,392</p>
            <img
              src={zoomInIcon}
              alt=""
              className="object-contain"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>

        <div className="pr-[16px]">
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={activity === "active" ? sortedData : data1}>
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
              <YAxis axisLine={false} tickLine={false} />

              {/* <Tooltip /> */}
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
              {activeLine.includes("industry") && (
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
              {activeLine.includes("benchmark") && (
                <Area
                  type="linear"
                  dataKey="gg"
                  stroke="#59f5ff"
                  strokeWidth={3}
                  fillOpacity={0.2}
                  fill="url(#colorgg)"
                  connectNulls
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-[24px] topPersonsTable ">
        <table class=" w-full ">
          <thead>
            <tr className="">
              <th className="pl-[25px] py-[10px]">
                <div className="text-start">
                  <p className="text-[14px] font-[600]">Top 5 Personas</p>
                  <p className="text-[12px] font-[400] text-[#B1B1B1]">
                    Persona
                  </p>
                </div>
              </th>
              <th className="text-[12px] font-[400] text-[#B1B1B1]">
                Users|Volume
              </th>
              <th className="text-[12px] font-[400] text-[#B1B1B1] px-[11px]">
                xx
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-[25px] py-[5px]">
                <div className="flex gap-[6px] items-center">
                  <div className="w-[42px] h-[42px] rounded-full">
                    <img
                      src={person1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="text-[12px] font-[600] ">Whales</p>
                </div>
              </td>
              <td className="">
                <p className="bg-[#212123] text-center w-[75px] mx-auto px-[12px] text-[10px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                  13%|70%
                </p>
              </td>
              <td className="text-[10px] font-[400] text-center px-[25px]">
                210%
              </td>
            </tr>
            <tr className="">
              <td className="pl-[25px] py-[5px]">
                <div className="flex gap-[6px] items-center">
                  <div className="w-[42px] h-[42px] rounded-full">
                    <img
                      src={person2}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="text-[12px] font-[600] ">Corporations</p>
                </div>
              </td>
              <td className="">
                <p className="bg-[#212123] text-center w-[75px] mx-auto px-[12px] text-[10px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                  13%|70%
                </p>
              </td>
              <td className="text-[10px] font-[400] text-center">210%</td>
            </tr>
            <tr className="">
              <td className="pl-[25px] py-[5px]">
                <div className="flex gap-[6px] items-center">
                  <div className="w-[42px] h-[42px] rounded-full">
                    <img
                      src={person3}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="text-[12px] font-[600] ">Day Traders</p>
                </div>
              </td>
              <td className="">
                <p className="bg-[#212123] text-center w-[75px] mx-auto px-[12px] text-[10px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                  13%|70%
                </p>
              </td>
              <td className="text-[10px] font-[400] text-center">210%</td>
            </tr>
            <tr className="">
              <td className="pl-[25px] py-[5px]">
                <div className="flex gap-[6px] items-center">
                  <div className="w-[42px] h-[42px] rounded-full">
                    <img
                      src={person4}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="text-[12px] font-[600] ">Users</p>
                </div>
              </td>
              <td className="">
                <p className="bg-[#212123] text-center w-[75px] mx-auto px-[12px] text-[10px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                  13%|70%
                </p>
              </td>
              <td className="text-[10px] font-[400] text-center">210%</td>
            </tr>
            <tr className="">
              <td className="pl-[25px] py-[5px]">
                <div className="flex gap-[6px] items-center">
                  <div className="w-[42px] h-[42px] rounded-full">
                    <img
                      src={person5}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="text-[12px] font-[600] ">Team</p>
                </div>
              </td>
              <td className="">
                <p className="bg-[#212123] text-center w-[75px] mx-auto px-[12px] text-[10px] font-[600] text-[#14F092] py-[6px] rounded-[20px]">
                  13%|70%
                </p>
              </td>
              <td className="text-[10px] font-[400] text-center">210%</td>
            </tr>
          </tbody>
        </table>
      </div>
      {showModal ? (
        <ChartModal
          showModal={showModal}
          setShowModal={setShowModal}
          sortedData={sortedData}
          activeLine={activeLine}
          number={"18,392"}
          name={""}
        />
      ) : null}
    </div>
  );
};

export default FirstColumn;
