import React from "react";

const AmountProgressChart = () => {
  return (
    <div className="mt-[35px] grid grid-cols-3 gap-[26px]">
      <div className="p-[18px] bg-[#111212]">
        <p className="text-[14px] font-[600] text-[#B1B1B1]">
          Profile Distribution by Buy Amount
        </p>
        <div className="flex w-full h-[46px] text-black text-[14px] font-[600] mt-[8px]">
          <div
            style={{ width: "8%" }}
            className="bg-[#005D6C] rounded-l-[4px] flex justify-center items-center"
          >
            8%
          </div>
          <div
            style={{ width: "12%" }}
            className="bg-[#E8FFB1] flex justify-center items-center"
          >
            12%
          </div>
          <div
            style={{ width: "23%" }}
            className="bg-[#51DACF] flex justify-center items-center"
          >
            23%
          </div>
          <div
            style={{ width: "57%" }}
            className="bg-[#D255D1] rounded-r-[4px] flex justify-center items-center"
          >
            57%
          </div>
        </div>

        <div className="w-full flex gap-[10px] mt-[18px]">
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#005D6C]"></div>
            <p className="text-[10px] font-[400] ">Whales</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#E8FFB1]"></div>
            <p className="text-[10px] font-[400] ">Corporations</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#51DACF]"></div>
            <p className="text-[10px] font-[400] ">Users</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#D255D1]"></div>
            <p className="text-[10px] font-[400] ">Day Traders</p>
          </div>
        </div>
      </div>

      <div className="p-[18px] bg-[#111212]">
        <p className="text-[14px] font-[600] text-[#B1B1B1]">
          Profile Distribution by Sell Amount
        </p>
        <div className="flex w-full h-[46px] text-black text-[14px] font-[600] mt-[8px]">
          <div
            style={{ width: "8%" }}
            className="bg-[#005D6C] rounded-l-[4px] flex justify-center items-center"
          >
            8%
          </div>
          <div
            style={{ width: "12%" }}
            className="bg-[#E8FFB1] flex justify-center items-center"
          >
            12%
          </div>
          <div
            style={{ width: "23%" }}
            className="bg-[#51DACF] flex justify-center items-center"
          >
            23%
          </div>
          <div
            style={{ width: "57%" }}
            className="bg-[#D255D1] rounded-r-[4px] flex justify-center items-center"
          >
            57%
          </div>
        </div>

        <div className="w-full flex gap-[10px] mt-[18px]">
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#005D6C]"></div>
            <p className="text-[10px] font-[400] ">Whales</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#E8FFB1]"></div>
            <p className="text-[10px] font-[400] ">Corporations</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#51DACF]"></div>
            <p className="text-[10px] font-[400] ">Users</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#D255D1]"></div>
            <p className="text-[10px] font-[400] ">Day Traders</p>
          </div>
        </div>
      </div>

      <div className="p-[18px] bg-[#111212]">
        <p className="text-[14px] font-[600] text-[#B1B1B1]">
          Profile Distribution by Active Wallet
        </p>
        <div className="flex w-full h-[46px] text-black text-[14px] font-[600] mt-[8px]">
          <div
            style={{ width: "8%" }}
            className="bg-[#005D6C] rounded-l-[4px] flex justify-center items-center"
          >
            8%
          </div>
          <div
            style={{ width: "12%" }}
            className="bg-[#E8FFB1] flex justify-center items-center"
          >
            12%
          </div>
          <div
            style={{ width: "23%" }}
            className="bg-[#51DACF] flex justify-center items-center"
          >
            23%
          </div>
          <div
            style={{ width: "57%" }}
            className="bg-[#D255D1] rounded-r-[4px] flex justify-center items-center"
          >
            57%
          </div>
        </div>

        <div className="w-full flex gap-[10px] mt-[18px]">
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#005D6C]"></div>
            <p className="text-[10px] font-[400] ">Whales</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#E8FFB1]"></div>
            <p className="text-[10px] font-[400] ">Corporations</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#51DACF]"></div>
            <p className="text-[10px] font-[400] ">Users</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] bg-[#D255D1]"></div>
            <p className="text-[10px] font-[400] ">Day Traders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountProgressChart;
