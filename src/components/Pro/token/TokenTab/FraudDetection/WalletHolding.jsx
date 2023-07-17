import React from "react";
import informationIcon from "../../../../../assets/icons/miniInfo.png";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WalletHolding = () => {
  const data = [
    {
      name: "$0-1k",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "$1k-$100k",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "$100K-$1m",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "$1m-$10m",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "$10m+",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  const handleBarClick = (index) => {
    const updatedData = data.map((entry, i) => {
      if (i === index) {
        return { ...entry, color: "#ff7300" }; // Set a different color for the clicked bar
      } else {
        return entry;
      }
    });

    setData(updatedData);
  };

  return (
    <div>
      <h3 className="mt-[23px] mb-[12px] text-[16px] font-[600] text-[#8A8A8A] ">
        WALLET HOLDING
      </h3>

      {/* distribution amount barchart */}

      <div className="flex flex-col lg:flex-row gap-[26px]">
        <div className="p-[20px] bg-[#111212] rounded-[6px] h-[211px]">
          <p className="text-[14px] font-[600] mb-[17px]">
            Distribution of Amount Held
          </p>
          <div className="max-w-[400px] lg:w-[400px]">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Bar dataKey="uv" fill="#123e2c" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className=" bg-[#111212] rounded-[6px] p-[20px] w-full h-[211px]">
          <p className="text-[14px] font-[600] flex items-center gap-[10px] mb-[9px]">
            Top 5 Wallets{" "}
            <div className="tooltip cursor-pointer">
              <img src={informationIcon} alt="" className="object-contain" />
              <p className="tooltiptext rounded-[6px] border border-[#666] px-[10px] py-[8px] w-[216px] text-[12px] font-[400] top-0 left-4 bg-[#212123]">
                Anomaly is detected when there is a sudden spike in buy or sell
                action
              </p>
            </div>
          </p>
          <div className=" overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#212123] text-[12px] font-[400] text-[#B1B1B1] ">
                  <th className="text-start px-[60px] lg:px-0 pb-[9px]">
                    Wallet Address
                  </th>
                  <th className="px-[10px] text-end">Persona</th>
                  <th className="px-[10px] text-end">% Token Held</th>
                  <th className="px-[20px] text-end"># of Tokens</th>
                  <th className="px-[10px] text-end">Value USD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start text-[14px] font-[600] pt-[8px]">
                    0xa8a7851ec015433345...
                  </td>
                  <td className="text-end  text-[14px]">Team</td>
                  <td className="text-end  text-[14px]">4.24%</td>
                  <td className="text-end  text-[14px]">248,546.39</td>
                  <td className="text-end  text-[14px]">$7.86B</td>
                </tr>
                <tr>
                  <td className="text-start text-[14px] font-[600] ">
                    1ARu7KGeiNH7hagu2Mc...
                  </td>
                  <td className="text-end  text-[14px]">Whale</td>
                  <td className="text-end  text-[14px]">3.89%</td>
                  <td className="text-end  text-[14px]">242,136.32</td>
                  <td className="text-end  text-[14px]">$6.73B</td>
                </tr>
                <tr>
                  <td className="text-start text-[14px] font-[600] ">
                    02b80d27416abba6340...
                  </td>
                  <td className="text-end  text-[14px]">Whale</td>
                  <td className="text-end  text-[14px]">3.67%</td>
                  <td className="text-end  text-[14px]">168,386.12</td>
                  <td className="text-end  text-[14px]">$5.31B</td>
                </tr>
                <tr>
                  <td className="text-start text-[14px] font-[600] ">
                    0xa8a70d27416abba60...
                  </td>
                  <td className="text-end  text-[14px]">Day Trader</td>
                  <td className="text-end  text-[14px]">2.83%</td>
                  <td className="text-end  text-[14px]">148,279.90</td>
                  <td className="text-end  text-[14px]">$3.98B</td>
                </tr>
                <tr>
                  <td className="text-start text-[14px] font-[600] ">
                    0xa8a70d27416abba60...
                  </td>
                  <td className="text-end  text-[14px]">Corporation</td>
                  <td className="text-end  text-[14px]">2.83%</td>
                  <td className="text-end  text-[14px]">148,279.90</td>
                  <td className="text-end  text-[14px]">$3.98B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHolding;
