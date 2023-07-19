import React, { useContext } from "react";
// import { AuthContext } from "../../../contexts/AuthProvider";

import EthereumMini from "../../../../assets/icons/coinMiniIcon/ethereumMini.png";
import BinanceMini from "../../../../assets/icons/coinMiniIcon/binanceMini.png";
import CardanoMini from "../../../../assets/icons/coinMiniIcon/cardanoMini.png";
import DogeMini from "../../../../assets/icons/coinMiniIcon/dogeMini.png";
import SolanaMini from "../../../../assets/icons/coinMiniIcon/solanaMini.png";
import TerherMini from "../../../../assets/icons/coinMiniIcon/terherMini.png";
import TronMini from "../../../../assets/icons/coinMiniIcon/tronMini.png";
import XrpMini from "../../../../assets/icons/coinMiniIcon/xrpMini.png";

const QuickSearch = () => {
  // const { subscription } = useContext(AuthContext);
  return (
    <div className="text-[#B0B0B0] mb-[19px]">
      {/* {subscription === "free" ? (
        <div className="bg-[#161617] rounded-[2px] h-[39px] mb-[14px]"></div>
      ) : (
        <p className="mb-[8px] text-[12px] font-[400] text-[#B0B0B0]">
          Quick Search
        </p>
      )} */}

      <p className="mb-[8px] text-[12px] font-[400] text-[#B0B0B0]">
        Quick Search
      </p>

      <div className="flex gap-[20px] xl:justify-normal lg:justify-between text-[12px] font-[400] overflow-y-scroll no-scrollbar">
        <button className="bg-[#111212] rounded-[4px] w-[129px] px-[10px] py-[10px] text-center flex items-center gap-[4px]">
          <img src={EthereumMini} alt="" /> Ethereum(ETH)
        </button>
        <button className="bg-[#111212] rounded-[4px]  px-[16px] py-[10px] text-center flex items-center gap-[4px]">
          <img src={TerherMini} alt="" /> Tether(USDT)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[129px] px-[16px] py-[10px] text-center flex items-center gap-[12px] justify-between">
          <img src={BinanceMini} alt="" /> Binance(BNB)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[129px] px-[16px] py-[10px] text-center flex items-center gap-[12px] ">
          <img src={XrpMini} alt="" /> XRP(XRP)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[129px] px-[16px] py-[10px] text-center flex items-center gap-[7px] justify-between">
          <img src={CardanoMini} alt="" /> Cardano(ADA)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[141px] px-[10px] py-[10px] text-center flex items-center gap-[4px] justify-between">
          <img src={DogeMini} alt="" /> Dogecoin(DOGE)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[129px] px-[16px] py-[10px] text-center flex items-center gap-[4px] justify-between">
          <img src={SolanaMini} alt="" /> Solana(SOL)
        </button>
        <button className="bg-[#111212] rounded-[4px] w-[129px] px-[16px] py-[10px] text-center flex items-center gap-[9px] ">
          <img src={TronMini} alt="" /> TRON(TRx)
        </button>
      </div>
    </div>
  );
};

export default QuickSearch;
