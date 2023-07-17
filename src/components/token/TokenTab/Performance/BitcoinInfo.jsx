import React, { useState } from "react";
import BitcoinIcon from "../../../../assets/icons/BitcoinIcon.png";
import plusIcon from "../../../../assets/icons/plusIcon.png";
import increaseArrow from "../../../../assets/icons/increaseArrowIcon.png";
import dangerIcon from "../../../../assets/icons/dangerIcon.png";
import buyCrptoIcon from "../../../../assets/icons/buyCryptoIcon.png";
import infoIcon from "../../../../assets/icons/infoIconLittle.png";
import "./BitcoinInfo.css";

const BitcoinInfo = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-[18px]">
      {/* left section */}
      <div className="w-full lg:max-w-[380px]">
        <div className="flex flex-wrap gap-3 gap-lg-0 lg:flex-nowrap  justify-between mb-[32px] ">
          <div className="flex">
            <img src={BitcoinIcon} alt="" className="object-contain" />
            <div className="flex flex-col justify-between ">
              <div className="flex gap-[10px] items-center">
                <p className="text-[18px] font-[600]">Bitcoin</p>
                <p className="bg-[#14F092] rounded-[4px] px-[10px] py-[3px] text-[12px] font-[600] text-[#0D0D0D]">
                  BTC
                </p>
              </div>
              <p className="text-[30px] font-[600]">$30,876</p>
            </div>
          </div>
          <div className="flex flex-col  gap-4 justify-between">
            <p
              className={`flex gap-[4px] cursor-pointer text-[12px] justify-center font-[600] ${
                followed && "bg-[#14f092]"
              } ${
                !followed && "border border-[#747474]"
              } rounded-[4px] w-[121px] ${followed ? "py-[6px]" : "py-[5px]"}`}
              onClick={() => setFollowed(!followed)}
            >
              {" "}
              {!followed && (
                <img src={plusIcon} alt="" className="object-contain" />
              )}
              {followed ? "Followed" : " Follow"}
            </p>
            <p className="flex gap-[4px] text-[12px] justify-center font-[600] customBorder rounded-[4px] w-[121px] py-[5px] ">
              <img src={increaseArrow} alt="" className="object-contain" />{" "}
              Trade Now
            </p>
          </div>
        </div>
        {/* lower left */}
        <div className="flex flex-col lg:flex-row gap-[10px]">
          <div className="rounded-[4px] bg-[#111212] px-[15px] py-[6px] max-w-[107px]">
            <p className="text-[14px] font-[400] text-[#B1B1B1]">Market Cap</p>
            <p className="text-[16px]  font-[600]">
              Rank<span className="text-[#14F092]">#5</span>
            </p>
          </div>
          <div className="rounded-[4px] bg-[#111212] px-[15px] py-[6px] ">
            <p className="text-[14px] font-[400] text-[#B1B1B1]">
              Market Segment
            </p>
            <p className="text-[16px]  font-[600]">Metaverse</p>
          </div>
          <div className="rounded-[4px] bg-[#111212] px-[15px] py-[6px]  max-w-[121px]">
            <p className="text-[14px] font-[400] text-[#B1B1B1]">Followers</p>
            <p className="text-[16px]  font-[600]">18,555,214</p>
          </div>
        </div>
      </div>

      {/* right section */}

      <div className="w-full bg-[#111212] rounded-[5px]  px-[12px] py-[17px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 gap-lg-0">
          <div>
            <div className="flex w-full flex-col justify-between gap-[23px]">
              <div>
                <p className="text-[14px] font-[400] text-[#B1B1B1] flex gap-[10px] mb-[10px]">
                  Buy/ Sell Pressure
                  <img src={infoIcon} alt="" className="object-contain" />
                </p>
                <p className="text-[16px] font-[600] flex gap-[6px]">
                  {" "}
                  <img
                    src={buyCrptoIcon}
                    alt=""
                    className="object-contain"
                  />{" "}
                  High Buy
                </p>
              </div>
              <div>
                <p className="text-[14px] font-[400] text-[#B1B1B1] flex gap-[10px] mb-[10px]">
                  Risk Exposure{" "}
                  <img src={infoIcon} alt="" className="object-contain" />
                </p>
                <p className="text-[16px] font-[600] flex gap-[6px]">
                  {" "}
                  <img
                    src={dangerIcon}
                    alt=""
                    className="object-contain"
                  />{" "}
                  High
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:border-l-2 lg:border-[#212123] lg:pl-[16px]">
            <div className="bg-[#161617] rounded-[2px] h-[137px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BitcoinInfo;
