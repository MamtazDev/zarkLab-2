import React from "react";
import decreaseArrowRed from "../../../../assets/icons/decreaseArrowRed.png";
import increaseArrowGreen from "../../../../assets/icons/increaseArrowGreen.png";

const Transactions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[26px]">
      <div className="bg-[#111212] rounded-[6px] flex justify-between p-[20px] ">
        <div className="flex flex-col justify-between gap-[15px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">
            Buy Transactions
          </p>
          <p className="text-[26px] font-[600]">156,134,763</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="text-[8px] font-[300] text-[#B1B1B1]">Day Change</p>
          <p className="text-[12px] font-[400] text-[#F03C14] flex gap-[4px] px-[12px] py-[3px] rounded-[20px] bg-[#212123]">
            <img src={decreaseArrowRed} alt="" className="object-contain" />{" "}
            0.5%
          </p>
        </div>
      </div>

      <div className="bg-[#111212] rounded-[6px] flex justify-between p-[20px] ">
        <div className="flex flex-col justify-between gap-[15px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">
            Sell Transactions
          </p>
          <p className="text-[26px] font-[600]">126,432,751</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="text-[8px] font-[300] text-[#B1B1B1]">Day Change</p>
          <p className="text-[12px] font-[400] text-[#F03C14] flex gap-[4px] px-[12px] py-[3px] rounded-[20px] bg-[#212123]">
            <img src={decreaseArrowRed} alt="" className="object-contain" />{" "}
            1.5%
          </p>
        </div>
      </div>

      <div className="bg-[#111212] rounded-[6px] flex justify-between p-[20px] ">
        <div className="flex flex-col justify-between gap-[15px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">New Wallets</p>
          <p className="text-[26px] font-[600]">1,264</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="text-[8px] font-[300] text-[#B1B1B1]">Day Change</p>
          <p className="text-[12px] font-[400] text-[#14F092] flex gap-[4px] px-[12px] py-[3px] rounded-[20px] bg-[#212123]">
            <img src={increaseArrowGreen} alt="" className="object-contain" />{" "}
            1.1%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
