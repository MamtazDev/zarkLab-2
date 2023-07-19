import React from "react";
import "./PopularWords.css";

const PopularWords = () => {
  return (
    <div className="bg-[#111212] rounded-[6px] p-[20px] ">
      <p className="text-[14px] text-[#B1B1B1] font-[600] mb-[13px]">
        Most popular words
      </p>
      <div className="h-[230px] overflow-y-scroll no-scrollbar">
        <table class="w-full">
          <thead>
            <tr className="border-b border-[#212123] text-[12px] font-[400] text-[#B1B1B1] ">
              <th className="text-start pb-[9px]">Word</th>
              <th className="text-end">Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-start text-[14px] font-[600] py-[10px]">
                <span className="font-[400] text-[#B1B1B1]">1.</span>{" "}
                "Cryptocurrency"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">8283</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600]">
                <span className="font-[400] text-[#B1B1B1] ">2.</span> "Bitcoin"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">3321</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600] py-[10px]">
                <span className="font-[400] text-[#B1B1B1]">3.</span> "Money"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">2761</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600] ">
                <span className="font-[400] text-[#B1B1B1]">4.</span> "Apple"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">1382</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600] py-[10px]">
                <span className="font-[400] text-[#B1B1B1]">5.</span> "Message"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">1192</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600] ">
                <span className="font-[400] text-[#B1B1B1]">6.</span> "Phone"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">993</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600]  py-[10px]">
                <span className="font-[400] text-[#B1B1B1]">6.</span> "Phone"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">993</td>
            </tr>
            <tr>
              <td className="text-start text-[14px] font-[600] ">
                <span className="font-[400] text-[#B1B1B1]">6.</span> "Phone"
              </td>
              <td className="text-end text-[#B1B1B1] text-[12px]">993</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularWords;
