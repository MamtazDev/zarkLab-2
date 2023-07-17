import React from "react";
import ehereumIcon from "../../../../assets/icons/ethereumIcon.png";
import flokiIcon from "../../../../assets/icons/flokiIcon.png";
import dogeCoinIcon from "../../../../assets/icons/DogecoinIcon.png";
import binance from "../../../../assets/icons/bibance.png";
import pape from "../../../../assets/icons/pape.png";
import increaseIcon from "../../../../assets/icons/increaseArrowGreen.png";
import { Link } from "react-router-dom";

const RecommendedTokens = () => {
  return (
    <div className="bg-[#111212] rounded-[6px] p-[20px]">
      <p className="text-[14px] text-[#B1B1B1] font-[600] mb-[13px]">
        Recommended Tokens
      </p>
      <div>
        <p className="text-[11px] font-[400] text-[#B1B1B1] pb-[36px] border-b border-[#212123]">
          People who searched Bitcoin also bought
        </p>

        <div className="py-[22px] h-full flex flex-col gap-[30px]">
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={ehereumIcon} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Ehereum</p>
            </div>
            <Link
              className="text-[10px] text-[#14F092] font-[600] flex items-center gap-[4px]"
              to="#"
            >
              View more <img src={increaseIcon} alt="" />
            </Link>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={flokiIcon} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Floki</p>
            </div>
            <Link
              className="text-[10px] text-[#14F092] font-[600] flex items-center gap-[4px]"
              to="#"
            >
              View more <img src={increaseIcon} alt="" />
            </Link>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={dogeCoinIcon} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Dogecoin</p>
            </div>
            <Link
              className="text-[10px] text-[#14F092] font-[600] flex items-center gap-[4px]"
              to="#"
            >
              View more <img src={increaseIcon} alt="" />
            </Link>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={binance} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Binance</p>
            </div>
            <Link
              className="text-[10px] text-[#14F092] font-[600] flex items-center gap-[4px]"
              to="#"
            >
              View more <img src={increaseIcon} alt="" />
            </Link>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={pape} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Pepe</p>
            </div>
            <Link
              className="text-[10px] text-[#14F092] font-[600] flex items-center gap-[4px]"
              to="#"
            >
              View more <img src={increaseIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedTokens;
