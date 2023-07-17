import React from "react";
import decreaseArrowRed from "../../../../assets/icons/decreaseArrowRed.png";
import increaseArrowGreen from "../../../../assets/icons/increaseArrowGreen.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Bitcoin",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Market Average",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Industry Average",
    uv: 2000,
    amt: 2290,
  },
];

const colors = ["#14F092", "#59F5FF", "#FFC459"];

const AmountBarChat = () => {
  return (
    <div className="mt-[30px] mb-[23px] grid grid-cols-1 lg:grid-cols-3 gap-[26px]">
      <div className="bg-[#111212] rounded-[6px] p-[15px] flex flex-col justify-between h-[240px]">
        <div className=" flex justify-between p-[15px] ">
          <div className="flex flex-col justify-between gap-[15px]">
            <p className="text-[14px] font-[600] text-[#B1B1B1]">Buy Amount</p>
            <p className="text-[26px] font-[600]">$1,123,172</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="text-[8px] font-[300] text-[#B1B1B1]">Day Change</p>
            <p className="text-[12px] font-[400] text-[#14F092] flex gap-[4px] px-[12px] py-[3px] rounded-[20px] bg-[#212123]">
              <img src={increaseArrowGreen} alt="" className="object-contain" />{" "}
              2.1%
            </p>
          </div>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />

              <Bar dataKey="uv" fill="#82ca9d">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#111212] rounded-[6px] p-[15px] flex flex-col justify-between">
        <div className=" flex justify-between p-[15px] ">
          <div className="flex flex-col justify-between gap-[15px]">
            <p className="text-[14px] font-[600] text-[#B1B1B1]">Sell Amount</p>
            <p className="text-[26px] font-[600]">$1,230,987</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="text-[8px] font-[300] text-[#B1B1B1]">Day Change</p>
            <p className="text-[12px] font-[400] text-[#F03C14] flex gap-[4px] px-[12px] py-[3px] rounded-[20px] bg-[#212123]">
              <img src={decreaseArrowRed} alt="" className="object-contain" />{" "}
              5.3%
            </p>
          </div>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />

              <Bar dataKey="uv" fill="#82ca9d">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#111212] rounded-[6px] p-[15px] flex flex-col justify-between">
        <div className=" flex justify-between p-[15px] ">
          <div className="flex flex-col justify-between gap-[15px]">
            <p className="text-[14px] font-[600] text-[#B1B1B1]">
              Active Wallet
            </p>
            <p className="text-[26px] font-[600]">18,392</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="text-[8px] font-[300] text-[#B1B1B1]">Day Change</p>
            <p className="text-[12px] font-[400] text-[#14F092] flex gap-[4px] px-[12px] py-[3px] rounded-[20px] bg-[#212123]">
              <img src={increaseArrowGreen} alt="" className="object-contain" />{" "}
              12.1%
            </p>
          </div>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />

              <Bar dataKey="uv" fill="#82ca9d">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AmountBarChat;
