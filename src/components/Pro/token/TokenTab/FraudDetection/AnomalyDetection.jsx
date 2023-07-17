import React, { useState } from "react";
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
import "./AnomalyDetection.css";
// import jsPDF from "jspdf";
// import XLSX from 'xlsx';
// import { useExcelDownloder } from "react-xls";

const AnomalyDetection = () => {
  const [active, setAcitve] = useState("value");
  const [searchText, setSearchText] = useState("");

  const [searchData, setSearchData] = useState([
    { name: "mohiwallet" },
    { name: "cryptowallet" },
    { name: "bitwallet" },
  ]);

  const handleSearch = (data) => {
    if (searchText) {
      return data.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    } else {
      return true;
    }
  };

  const data_array = ["John", "Jane", "Michael", "Emily", "David", "Samantha"];

  const pdfDownloadHandler = () => {
    const doc = new jsPDF();
    doc.text(data_array.join("\n"), 10, 10); // Add the array data to the PDF

    // Save the PDF
    doc.save("data_array.pdf");
  };
  // const { ExcelDownloder, Type } = useExcelDownloder();

  const data = {
    // Worksheet named animals
    animals: [
      { name: "cat", category: "animal" },
      { name: "dog", category: "animal" },
      { name: "pig", category: "animal" },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: "pikachu", category: "pokemon" },
      { name: "Arbok", category: "pokemon" },
      { name: "Eevee", category: "pokemon" },
    ],
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-between items-center mt-[23px] mb-[12px]">
        <h3 className=" text-[16px] font-[600] text-[#8A8A8A] flex items-center gap-[10px] relative">
          ANOMALY DETECTION{" "}
          <div className="tooltip cursor-pointer">
            <img
              src={informationIcon}
              alt=""
              className="object-contain mb-[20px]"
            />
            <p className="tooltiptext rounded-[6px] border border-[#666] px-[10px] py-[8px] w-[216px] text-[12px] font-[400] top-0 left-4 bg-[#212123]">
              Anomaly is detected when there is a sudden spike in buy or sell
              action
            </p>
          </div>
        </h3>

        <div className="flex flex-wrap items-center gap-[16px]">
          <img src={downloadIcon} alt="" />
          <button
            onClick={() => setAcitve("value")}
            className={`${
              active === "value"
                ? "text-[12px] font-[600] bg-[#111212] border border-[#14F092] rounded-[4px] w-[130px] text-center py-[8px]"
                : "text-[12px] font-[600] bg-[#111212] border border-transparent rounded-[4px] w-[130px] text-center py-[10px]"
            }`}
          >
            By Value
          </button>
          <button
            onClick={() => setAcitve("recent")}
            className={`${
              active === "recent"
                ? "text-[12px] font-[600] bg-[#111212] border border-[#14F092] rounded-[4px] w-[130px] text-center py-[8px]"
                : "text-[12px] font-[600] bg-[#111212] border border-transparent rounded-[4px] w-[130px] text-center py-[10px]"
            }`}
          >
            Most Recent
          </button>
          <div className="relative">
            <input
              type="search"
              placeholder="Search by Wallet"
              className="w-full searchInput bg-[#111212] px-[20px] py-[12px] outline-none rounded-[6px] lg:w-[250px] h-[36px]"
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <div className="bg-[#111212] px-[16px] text-[12px] font-[400] text-[#CDCDCD] absolute w-full">
                {searchData.filter(handleSearch).map((i) => (
                  <p>{i.name}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[11px] h-[250px] overflow-y-scroll overflow-x-scroll lg:overflow-auto table-scrollbar pr-[7px]">
        <table className="table-auto w-full topInfluencerTable whitespace-nowrap ">
          <thead>
            <tr className="bg-[#111212] text-[12px] font-[400] text-[#B1B1B1] ">
              <th className="py-[15px] px-[23px] text-start">Exchange</th>
              <th className="px-[50px] xl:px-0 text-start">Date</th>
              <th className="px-[50px] xl:px-0 text-start">Sold</th>
              <th className="px-[50px] xl:px-0 text-center">Bought</th>
              <th className="px-[50px] xl:px-0 text-start">Value</th>
              <th className="px-[50px] xl:px-0 text-start">From</th>
              <th className="px-[50px] xl:px-0 text-start">To</th>
              <th className="px-[50px] xl:px-0 text-start">Persona</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#111212]">
              <td className="py-[11px]">
                <img src={crypto1} alt="" className=" mx-auto" />
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                13 May'23, 11:23 AM
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
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400] text-center lg:text-start">
                Team
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[11px]">
                <img src={crypto2} alt="" className=" mx-auto" />
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                7 May'23, 06:18 PM
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
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400] text-center lg:text-start">
                Whale
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[11px]">
                <img src={crypto3} alt="" className=" mx-auto" />
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                29 Apr'23, 12:23 AM
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
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400] text-center lg:text-start">
                Whale
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[11px]">
                <img src={crypto2} alt="" className=" mx-auto" />
              </td>
              <td className="text-[12px] font-[600] text-[#747474]">
                29 Mar'23, 11:23 AM
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
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400]">0x8b05...d7db</td>
              <td className="text-[12px] font-[400] text-center lg:text-start">
                Whale
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnomalyDetection;
