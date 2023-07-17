import React, { useState } from "react";
import TransectionAreaChart from "../../components/Pro/token/TokenTab/TradeActivity/TransactionAreaChart";
import zoomOut from "../../assets/icons/zoomOut.png";
import "./ChartModal.css";

const ChartModal = ({
  setShowModal,
  sortedData,
  activeLine,
  number,
  name,
  handleActiveLIne,
}) => {
  const [activeTime, setActiveTime] = useState("1w");
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[400px]  lg:w-[946px] my-6 mx-auto ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#111212] outline-none focus:outline-none">
            {/*header*/}

            <div className="pt-[40px] lg:pt-[33px] relative ">
              <div className="flex items-center justify-between mb-[10px] pl-[30px] lg:pl-[67px] pr-[56px]">
                <p className="lg:text-[24px] font-[600] text-[#B1B1B1]">
                  {name}
                </p>
                <img
                  src={zoomOut}
                  alt=""
                  onClick={() => setShowModal(false)}
                  className="absolute top-[15px] right-[15px] cursor-pointer"
                />
                <div className="flex gap-[11px] items-center">
                  <button
                    className={`lg:text-[20px] font-[400]  text-[#666666] ${
                      activeTime === "24h" &&
                      "border-b border-[#14F092] text-white"
                    } `}
                    onClick={() => {
                      setActiveTime("24h");
                      // setSortedData(dataHour);
                    }}
                  >
                    24h
                  </button>
                  <button
                    className={`lg:text-[20px] font-[400] text-[#666666]  ${
                      activeTime === "1w" &&
                      "border-b border-[#14F092] text-white"
                    } `}
                    onClick={() => {
                      setActiveTime("1w");
                      // setSortedData(data);
                    }}
                  >
                    1w
                  </button>
                  <button
                    className={`lg:text-[20px] font-[400] text-[#666666]  ${
                      activeTime === "1m" &&
                      "border-b border-[#14F092] text-white"
                    } `}
                    onClick={() => {
                      setActiveTime("1m");
                      // setSortedData(dataMonth);
                    }}
                  >
                    1m
                  </button>
                  <button
                    className={`lg:text-[20px] font-[400] text-[#666666]   ${
                      activeTime === "1y" &&
                      "border-b border-[#14F092] text-white"
                    } `}
                    onClick={() => {
                      setActiveTime("1y");
                      // setSortedData(dataYear);
                    }}
                  >
                    1y
                  </button>
                  <button
                    className={`lg:text-[20px] font-[400] text-[#666666]   ${
                      activeTime === "all" &&
                      "border-b border-[#14F092] text-white"
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
              <div className="flex  flex-col lg:flex-row lg:items-center justify-between pl-[30px] lg:pl-[67px] pr-[56px] mb-5 lg:mb-0">
                <p className="lg:text-[48px] font-[600] mb-2 lg:mb-0">
                  {number}
                </p>
                <div className="flex gap-[9px]">
                  <button
                    className={`${
                      activeLine.includes("token") && "border border-[#14F092]"
                    } rounded-[4px] lg:py-[6px] px-[32px]  text-[10px] lg:text-[14px] font-[600]`}
                    onClick={() => handleActiveLIne("token")}
                  >
                    Token
                  </button>
                  <button
                    className={`flex items-center gap-[7px] text-[10px] lg:text-[14px] font-[400] text-[#CDCDCD] ${
                      activeLine.includes("benchmark") &&
                      "border border-[#59F5FF]"
                    } rounded-[4px] lg:py-[6px] px-[16px]`}
                    onClick={() => handleActiveLIne("benchmark")}
                  >
                    Add ETH Benchmark{" "}
                    {/* <img src={littleDownArrow} alt="" className="object-contain" /> */}
                  </button>
                  <button
                    className={`${
                      activeLine.includes("industry") &&
                      "border border-[#FFC459]"
                    } flex items-center gap-[7px] text-[10px] lg:text-[14px] font-[400] text-[#CDCDCD]  rounded-[4px] lg:py-[6px] py-[2px] px-[16px]`}
                    onClick={() => handleActiveLIne("industry")}
                  >
                    Industry Benchmark{" "}
                    {/* <img src={littleDownArrow} alt="" className="object-contain" /> */}
                  </button>
                </div>
              </div>
            </div>

            {/*body*/}
            <div className="relative  pr-[15px] w-full modalChart">
              <TransectionAreaChart
                sortedData={sortedData}
                activeLine={activeLine}
                hg={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ChartModal;
