import React, { useState } from "react";
import ChartModal from "../../../../../utils/modal/ChartModal";
import TransectionAreaChart from "./TransactionAreaChart";

import zoomInIcon from "../../../../../assets/icons/zoomInBlackIcon.png";

const ThirdColumn = ({ sortedData, activeLine }) => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="py-[16px] bg-[#111212] rounded-[6px] h-[282px]">
        <div className="flex justify-between items-center px-[16px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">
            {" "}
            Sell Transactions
          </p>
          <img
            src={zoomInIcon}
            alt=""
            className="object-contain"
            onClick={() => {
              setNumber("156,134,763");
              setName("Sell Transactions");
              setShowModal(true);
            }}
          />
        </div>
        <p className="text-[26px] font-[600] my-[7px] px-[16px]">156,134,763</p>

        <div className="pr-[16px]">
          <TransectionAreaChart
            sortedData={sortedData}
            activeLine={activeLine}
          />
        </div>
      </div>
      <div className="py-[16px] bg-[#111212] rounded-[6px] h-[282px]">
        <div className="flex justify-between items-center px-[16px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">Sell Amount</p>
          <img
            src={zoomInIcon}
            alt=""
            className="object-contain"
            onClick={() => {
              setNumber("$1,123,172");
              setName("Sell Amount");
              setShowModal(true);
            }}
          />
        </div>
        <p className="text-[26px] font-[600] my-[7px] px-[16px]">$1,123,172</p>

        <div className="pr-[16px]">
          <TransectionAreaChart
            sortedData={sortedData}
            activeLine={activeLine}
          />
        </div>
      </div>
      {showModal ? (
        <ChartModal
          showModal={showModal}
          setShowModal={setShowModal}
          sortedData={sortedData}
          activeLine={activeLine}
          number={number}
          name={name}
        />
      ) : null}
    </div>
  );
};

export default ThirdColumn;
