import React, { useContext } from "react";
import ehereumIcon from "../../../../../assets/icons/ethereumIcon.png";
import flokiIcon from "../../../../../assets/icons/flokiIcon.png";
import dogeCoinIcon from "../../../../../assets/icons/DogecoinIcon.png";
import binance from "../../../../../assets/icons/bibance.png";
import pape from "../../../../../assets/icons/pape.png";
import increaseArrow from "../../../../../assets/icons/increaseArrowGreen.png";
import { AuthContext } from "../../../../../contexts/AuthProvider";

const RecommendedTokens = () => {
  const { subscription, setActiveTab, setActiveTapPro } =
    useContext(AuthContext);

  const handleRouteChange = () => {
    if (subscription === "free") {
      setActiveTab("performance");
    }
    if (subscription === "pro") {
      setActiveTapPro("priceInsights");
    }
  };
  return (
    <div className="bg-[#111212] rounded-[6px] p-[20px]">
      <p className="text-[14px] text-[#B1B1B1] font-[600] mb-[13px]">
        Recommended Tokens
      </p>
      <div>
        <p className="text-[11px] font-[400] text-[#B1B1B1] pb-[9px] border-b border-[#212123]">
          People who searched Bitcoin also searched
        </p>

        <div className="pt-[20px] h-full flex flex-col gap-[14px]">
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={ehereumIcon} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Ehereum</p>
            </div>

            <button
              className="flex gap-[4px] items-center text-[10px] text-[#14F092]"
              onClick={handleRouteChange}
            >
              View More{" "}
              <img className="object-contain" src={increaseArrow} alt="" />
            </button>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={flokiIcon} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Floki</p>
            </div>
            <button
              className="flex gap-[4px] items-center text-[10px] text-[#14F092]"
              onClick={handleRouteChange}
            >
              View More{" "}
              <img className="object-contain" src={increaseArrow} alt="" />
            </button>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={dogeCoinIcon} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Dogecoin</p>
            </div>
            <button
              className="flex gap-[4px] items-center text-[10px] text-[#14F092]"
              onClick={handleRouteChange}
            >
              View More{" "}
              <img className="object-contain" src={increaseArrow} alt="" />
            </button>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={binance} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">Binance</p>
            </div>
            <button
              className="flex gap-[4px] items-center text-[10px] text-[#14F092]"
              onClick={handleRouteChange}
            >
              View More{" "}
              <img className="object-contain" src={increaseArrow} alt="" />
            </button>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-[10px]">
              {" "}
              <img src={pape} alt="" className="object-contain" />
              <p className="text-[14px] font-[600]">pape</p>
            </div>
            <button
              className="flex gap-[4px] items-center text-[10px] text-[#14F092]"
              onClick={handleRouteChange}
            >
              View More{" "}
              <img className="object-contain" src={increaseArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedTokens;
