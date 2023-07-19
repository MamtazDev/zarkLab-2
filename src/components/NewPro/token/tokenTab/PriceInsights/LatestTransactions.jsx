import React from "react";
import informationIcon from "../../../../../assets/icons/infoIconLittle.png";
import downloadIcon from "../../../../../assets/icons/downloadIcon.png";
import crypto1 from "../../../../../assets/icons/crypto1.png";
import crypto2 from "../../../../../assets/icons/crypto2.png";
import crypto3 from "../../../../../assets/icons/crypto3.png";
import crypto4 from "../../../../../assets/icons/crypto4.png";
import crypto5 from "../../../../../assets/icons/crypto5.png";
import crypto6 from "../../../../../assets/icons/crypto6.png";
import crypto7 from "../../../../../assets/icons/crypto7.png";
import crypto8 from "../../../../../assets/icons/crypto8.png";
import crypto9 from "../../../../../assets/icons/crypto9.png";
import exchangeIcon from "../../../../../assets/icons/exchangeIcon.png";
import fillterIcon from "../../../../../assets/icons/fillteringIcon.png";
import avatar1 from "../../../../../assets/icons/avatar1.png";
import avatar2 from "../../../../../assets/icons/avatar2.png";
import avatar3 from "../../../../../assets/icons/avatar3.png";
import avatar4 from "../../../../../assets/icons/avatar4.png";
import avatar5 from "../../../../../assets/icons/avatar5.png";

const LatestTransactions = () => {
  return (
    <div className="mt-[36px]">
      <h3 className="text-[16px] text-[#8A8A8A] font-[600] ">
        LATEST TRANSACTIONS
      </h3>
      <div className="mt-[11px] h-[270px] overflow-y-scroll overflow-x-scroll lg:overflow-auto table-scrollbar pr-[7px]">
        <table className="table-auto w-full topInfluencerTable whitespace-nowrap ">
          <thead>
            <tr className="bg-[#111212] text-[12px] font-[400] text-[#B1B1B1] ">
              <th className="py-[15px] px-[33px] text-start">
                <div className=" flex items-center gap-[8px]">
                  {" "}
                  Wallet and Persona <img src={fillterIcon} alt="" />
                </div>
              </th>
              <th className="px-[50px] xl:px-0 text-start ">
                <div className=" flex items-center gap-[8px]">
                  {" "}
                  Time <img src={fillterIcon} alt="" />
                </div>
              </th>
              <th className="px-[50px] xl:px-0 text-start ">
                <div className=" flex items-center gap-[8px]">
                  Sold <img src={fillterIcon} alt="" />
                </div>
              </th>
              <th className="px-[50px] xl:px-0 text-center ">
                <div className="flex items-center gap-[8px]">
                  Bought <img src={fillterIcon} alt="" />
                </div>
              </th>
              <th className="px-[50px] xl:px-0 text-start ">
                <div className="flex items-center gap-[8px]">
                  Value <img src={fillterIcon} alt="" />
                </div>
              </th>
              <th className="px-[50px] xl:px-0 text-start">Exchange</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#111212]">
              <td className="py-[11px] pl-[33px]">
                <div className="flex gap-[27px] items-center">
                  <img src={avatar1} alt="" />
                  <div>
                    <p className="text-[14px] font-[600] mb-[5px]">Whale</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      0xa8a7851ec015433345...
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                2 seconds ago
              </td>
              <td>
                <div className="flex items-center gap-[7px]">
                  <img src={crypto4} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">USDT</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      2,101,134
                    </p>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <div className="flex items-center gap-[7px]">
                  <img src={exchangeIcon} alt="" className="mr-[22px]" />
                  <img src={crypto5} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">BTC</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      1,156.67
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[400]">$31,023,421.42</td>
              <td className="py-[11px]">
                <img src={crypto1} alt="" className=" mx-auto" />
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[11px] pl-[33px]">
                <div className="flex gap-[27px] items-center">
                  <img src={avatar1} alt="" />
                  <div>
                    <p className="text-[14px] font-[600] mb-[5px]">Whale</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      0xa8a7851ec015433345...
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                3 minutes ago
              </td>
              <td>
                <div className="flex items-center gap-[7px]">
                  <img src={crypto5} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">BTC</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      1,201,134
                    </p>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <div className="flex items-center gap-[7px]">
                  <img src={exchangeIcon} alt="" className="mr-[22px]" />
                  <img src={crypto8} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">PAXG</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      39.89
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[400]">$15,642,772.17</td>
              <td className="py-[11px]">
                <img src={crypto2} alt="" className=" mx-auto" />
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[11px] pl-[33px]">
                <div className="flex gap-[27px] items-center">
                  <img src={avatar5} alt="" />
                  <div>
                    <p className="text-[14px] font-[600] mb-[5px]">Team</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      0xa8a7851ec015433345...
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                5 minutes ago
              </td>
              <td>
                <div className="flex items-center gap-[7px]">
                  <img src={crypto6} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">USDC</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      2,101,134
                    </p>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <div className="flex items-center gap-[7px]">
                  <img src={exchangeIcon} alt="" className="mr-[22px]" />
                  <img src={crypto9} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">Floki</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      1,156.67
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[400]">$31,023,421.42</td>
              <td className="py-[11px]">
                <img src={crypto3} alt="" className=" mx-auto" />
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[11px] pl-[33px]">
                <div className="flex gap-[27px] items-center">
                  <img src={avatar4} alt="" />
                  <div>
                    <p className="text-[14px] font-[600] mb-[5px]">Explorer</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      0xa8a7851ec015433345...
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                14 minutes ago
              </td>
              <td>
                <div className="flex items-center gap-[7px]">
                  <img src={crypto7} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">Ethereum</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      2,101,134
                    </p>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <div className="flex items-center gap-[7px]">
                  <img src={exchangeIcon} alt="" className="mr-[22px]" />
                  <img src={crypto4} alt="" />
                  <div>
                    <p className="text-[12px] font-[600]">USDT</p>
                    <p className="text-[12px] font-[400] text-[#B1B1B1]">
                      1,156.67
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-[12px] font-[400]">$31,023,421.42</td>
              <td className="py-[11px]">
                <img src={crypto2} alt="" className=" mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestTransactions;
