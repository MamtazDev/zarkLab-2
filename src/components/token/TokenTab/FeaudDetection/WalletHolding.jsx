import React from "react";
import informationIcon from "../../../../assets/icons/informationIconAsh.png";
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

  return (
    <div>
      {/* distribution amount barchart */}

      <div className="flex flex-col lg:flex-row gap-[26px]">
        <div>
          <h3 className="mt-[23px] mb-[22px] text-[16px] font-[600] text-[#8A8A8A] ">
            WALLET HOLDING
          </h3>
          <div className="p-[20px] bg-[#111212] rounded-[6px] h-[294px]">
            <p className="text-[14px] font-[600] mb-[17px]">
              Distribution of Amount Held
            </p>
            <div className="max-w-[400px] lg:w-[400px]">
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={data}>
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Bar dataKey="uv" fill="#123e2c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-[#161617] rounded-[2px] h-[49px] mb-[19px]"></div>

          <div className=" bg-[#111212] rounded-[6px] p-[20px] w-full h-[294px]">
            <p className="text-[14px] font-[600] flex items-center gap-[10px] m">
              Top 5 Wallets{" "}
              <div className="tooltip cursor-pointer">
                <img src={informationIcon} alt="" className="object-contain" />
                <p className="tooltiptext rounded-[6px] border border-[#666] px-[10px] py-[8px] w-[216px] text-[12px] font-[400] top-0 left-4 bg-[#212123]">
                  Anomaly is detected when there is a sudden spike in buy or
                  sell action
                </p>
              </div>
            </p>
            <div className=" overflow-x-scroll no-scrollbar">
              <table
                style={{ borderCollapse: "initial", borderSpacing: "14px" }}
                className=" w-full  whitespace-nowrap"
              >
                <thead>
                  <tr className="border-b border-[#212123] text-[12px] font-[400] text-[#B1B1B1] ">
                    <th className="text-start pb-[9px]">Wallet Address</th>
                    <th className="text-end  pb-[9px]">Persona</th>
                    <th className="text-end  pb-[9px]">% Token Held</th>
                    <th className="text-end  pb-[9px]"># of Tokens</th>
                    <th className="text-end  pb-[9px]">Value USD</th>
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
    </div>
  );
};

export default WalletHolding;
