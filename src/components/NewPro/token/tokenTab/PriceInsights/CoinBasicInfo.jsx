import React, { useState } from "react";
import BitcoinIcon from "../../../../../assets/icons/BitcoinIcon.png";
import plusIcon from "../../../../../assets/icons/plusIcon.png";
import increaseArrow from "../../../../../assets/icons/increaseArrowIcon.png";
import dangerIcon from "../../../../../assets/icons/dangerIcon.png";
import infoIcon from "../../../../../assets/icons/infoIconLittle.png";
import buyCryptoIcon from "../../../../../assets/icons/buyCryptoIcon.png";
import increaseGreenArrow from "../../../../../assets/icons/increaseGreenIconMini.png";
import link from "../../../../../assets/icons/linkIcon.png";
import Github from "../../../../../assets/icons/githubMiniIcon.png";
import facebook from "../../../../../assets/icons/facebookMiniIcon.png";
import twitter from "../../../../../assets/icons/twittwrMiniIcon.png";
import paper from "../../../../../assets/icons/paperIcon.png";

const CoinBasicInfo = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-[23px]">
      {/* left section */}
      <div className="w-full lg:max-w-[380px]">
        {/* upper left */}
        <div className="flex  flex-wrap lg:flex-nowrap ml-[15px] justify-between mb-[22px] ">
          <div className="flex">
            <img src={BitcoinIcon} alt="" className="object-contain" />
            <div className="flex flex-col justify-between ">
              <div className="flex gap-[10px] items-center">
                <p className="text-[18px] font-[600]">Bitcoin</p>
                <p className="bg-[#14F092] rounded-[4px] px-[10px] py-[3px] text-[12px] font-[600] text-[#0D0D0D]">
                  BTC
                </p>
              </div>
              <p className="text-[30px] font-[600] mt-[10px]">$30,876.56</p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] ">
            <p className="flex gap-[4px] text-[12px] justify-center font-[600] customBorder rounded-[4px] w-[121px] py-[5px] ">
              <img src={increaseArrow} alt="" className="object-contain" />{" "}
              Trade Now
            </p>
            <p className="bg-[#212123] ml-auto flex items-center justify-center gap-[4px] w-[64px] text-center rounded-[20px] text-[12px] text-[#14F092]">
              <img src={increaseGreenArrow} alt="" />
              11%
            </p>
          </div>
        </div>
        {/* lower left */}
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="rounded-[4px] bg-[#111212] px-[15px] py-[6px] lg:max-w-[107px]">
            <p className="text-[14px] font-[400] text-[#B1B1B1]">Market Cap</p>
            <p className="text-[16px]  font-[600]">
              Rank<span className="text-[#14F092]">#5</span>
            </p>
          </div>
          <div className="rounded-[4px] bg-[#111212] px-[15px] py-[6px] ">
            <p className="text-[14px] font-[400] text-[#B1B1B1]">
              Token Category
            </p>
            <p className="text-[16px]  font-[600]">Metaverse</p>
          </div>
          <div className="rounded-[4px] bg-[#111212] px-[15px] py-[6px]  lg:max-w-[121px]">
            <p className="text-[14px] font-[400] text-[#B1B1B1]">Holders</p>
            <p className="text-[16px]  font-[600]">18,555,214</p>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="w-full lg:w-[460px]  bg-[#111212] rounded-[5px]">
        <div className=" px-[17px]  py-[13px] h-full">
          <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row  h-full ">
            <div className="flex flex-row lg:flex-col justify-between pr-[12px]">
              <div>
                <p className=" text-[14px] font-[400] text-[#B1B1B1] flex gap-[4px] mb-[10px]">
                  Buy/Sell Pressure{" "}
                  <div className="tooltip cursor-pointer">
                    <img src={infoIcon} alt="" className="object-contain" />
                    <p className="tooltiptext rounded-[6px] border border-[#666] px-[10px] py-[8px] w-[216px] text-[12px] font-[400] top-0 left-4 bg-[#212123]">
                      Anomaly is detected when there is a sudden spike in buy or
                      sell action
                    </p>
                  </div>
                </p>
                <p className="text-[16px] font-[600] flex gap-[6px]">
                  <img src={buyCryptoIcon} alt="" className="object-contain" />{" "}
                  High Buy
                </p>
              </div>
              <div>
                <p className="tooltip text-[14px] font-[400] text-[#B1B1B1] flex gap-[10px] mb-[10px]">
                  Risk Exposure{" "}
                  <div className="tooltip cursor-pointer">
                    <img src={infoIcon} alt="" className="object-contain" />
                    <p className="tooltiptext rounded-[6px] border border-[#666] px-[8.8px] py-[8px] w-[216px] text-[12px] font-[400] top-0 left-4 bg-[#212123]">
                      Anomaly is detected when there is a sudden spike in buy or
                      sell action
                    </p>
                  </div>
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

            <div className="flex flex-row lg:flex-col justify-between lg:border-[#212123] lg:border-x-2 pl-[8px] pr-[14px]">
              <div>
                <p className="text-[14px] font-[400] text-[#B1B1B1]  mb-[6px]">
                  Social Interest
                </p>
                <p className="text-[16px] font-[600] ">Average</p>
              </div>
              <div>
                <p className="text-[14px] font-[400] text-[#B1B1B1] mb-[6px]">
                  Whale Traders
                </p>
                <p className="text-[16px] font-[600] ">
                  $8.143 m{" "}
                  <span className="text-[12px] font-[500]">Bought</span>
                </p>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col justify-between pl-[8px]">
              <div>
                <p className="text-[14px] font-[400] text-[#B1B1B1]  mb-[6px]">
                  Anomaly
                </p>
                <p className="text-[16px] font-[600] ">
                  8.02 k{" "}
                  <span className="text-[12px] font-[500]">Transactions</span>
                </p>
              </div>
              <div>
                <p className="text-[14px] font-[400] text-[#B1B1B1] ">
                  Anomaly Signal
                </p>
                <p className="text-[16px] font-[600] ">
                  $2,405 m <span className="text-[12px] font-[500]">Sold</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right last section */}
      <div className="my-auto pl-[8px]">
        <div className="mb-[19px]">
          <p className="text-[12px] font-[400] text-[#B1B1B1] mb-[9px]">
            Official Link
          </p>
          <div className="flex gap-[9px]">
            <button className="text-[10px] font-[400] flex items-center gap-[4px] text-[#8A8A8A] px-[8px] py-[3px] border border-[#2B2C2F] rounded-[3px]">
              <img src={link} alt="" /> Website
            </button>
            <button className="text-[10px] font-[400] flex items-center gap-[4px] text-[#8A8A8A] px-[8px] py-[3px] border border-[#2B2C2F] rounded-[3px]">
              <img src={paper} alt="" /> Whitepaper
            </button>
            <button className="text-[10px] font-[400] flex items-center gap-[4px] text-[#8A8A8A] px-[8px] py-[3px] border border-[#2B2C2F] rounded-[3px]">
              <img src={Github} alt="" /> Github
            </button>
          </div>
        </div>
        <div>
          <p className="text-[12px] font-[400] text-[#B1B1B1] mb-[12px]">
            Socials
          </p>
          <div className="flex gap-[9px]">
            <button className="text-[10px] font-[400] flex items-center gap-[4px] text-[#8A8A8A] px-[8px] py-[3px] border border-[#2B2C2F] rounded-[3px]">
              <img src={twitter} alt="" /> Twitter
            </button>
            <button className="text-[10px] font-[400] flex items-center gap-[4px] text-[#8A8A8A] px-[8px] py-[3px] border border-[#2B2C2F] rounded-[3px]">
              <img src={facebook} alt="" /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinBasicInfo;
