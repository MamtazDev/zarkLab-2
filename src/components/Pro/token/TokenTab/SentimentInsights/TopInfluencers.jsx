import React, { useState } from "react";
import contactIcon from "../../../../../assets/icons/contactIcon.png";
import likeIcon from "../../../../../assets/icons/LikeIcon.png";
import waveIcon from "../../../../../assets/icons/WaveIcon.png";
import facebookIcon from "../../../../../assets/icons/facebookIcon.png";
import discordIcon from "../../../../../assets/icons/discordIcon.png";
import twitterIcon from "../../../../../assets/icons/twitterIcon.png";
import instagramIcon from "../../../../../assets/icons/instagramIcon.png";
import informationIcon from "../../../../../assets/icons/informationIconAsh.png";
import "./TopInfluencers.css";

const TopInfluencers = () => {
  const [sorting, setSorting] = useState("followers");
  const [range1, setRange1] = useState(11);
  const [range2, setRange2] = useState(79);
  const [range3, setRange3] = useState(38);
  return (
    <div className="mt-[25px]">
      <div className="flex flex-wrap justify-between">
        <h3 className="text-[16px] font-[600] text-[#8A8A8A] mb-4">
          TOP INFLUENCERS
        </h3>
        <div className="flex flex-wrap gap-[16px]">
          <button
            onClick={() => setSorting("followers")}
            className={`${
              sorting === "followers"
                ? "text-white font-[600] border border-[#14F092]"
                : "text-[#B1B1B1] font-[400]"
            } w-[130px] bg-[#111212] rounded-[4px]  text-center py-[10px] text-[12px]  `}
          >
            By Followers
          </button>
          <button
            onClick={() => setSorting("likes")}
            className={`${
              sorting === "likes"
                ? "text-white font-[600] border border-[#14F092]"
                : "text-[#B1B1B1] font-[400]"
            } w-[130px] bg-[#111212] rounded-[4px]  text-center py-[10px] text-[12px]  `}
          >
            By Likes
          </button>
          <button
            onClick={() => setSorting("engagement")}
            className={`${
              sorting === "engagement"
                ? "text-white font-[600] border border-[#14F092]"
                : "text-[#B1B1B1] font-[400]"
            } w-[130px] bg-[#111212] rounded-[4px]  text-center py-[10px] text-[12px]  `}
          >
            By Engagement
          </button>
        </div>
      </div>

      <div className="mt-[11px]  table-scrollbar">
        <table className="table-auto w-full topInfluencerTable">
          <thead className="whitespace-nowrap">
            <tr className="bg-[#111212] text-[12px] font-[400] text-[#B1B1B1]">
              <th className="py-[15px] px-[23px] text-start">Influencer</th>
              <th>Social Media Presence</th>
              <th>Number of Followers</th>
              <th>Total Retweets</th>
              <th>Total Likes</th>
              <th>% Crypto Post</th>
              <th>
                <div className="flex justify-center items-center gap-[4px]">
                  {" "}
                  Engagement{" "}
                  <img
                    src={informationIcon}
                    alt=""
                    className="mb-[14px]"
                  />{" "}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={contactIcon} alt="" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Vitalik Buterin</p>
                    <p>@VitalikButerin</p>
                  </div>
                </div>
              </td>
              <td>
                <div class=" flex justify-center items-center">
                  <a href="https://www.facebook.com/" target="_blank">
                    <img
                      className="inline-block  p-[8px] rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={facebookIcon}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den"
                    target="_blank"
                  >
                    <img
                      className="inline-block  p-[8px]  rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={twitterIcon}
                      alt=""
                    />
                  </a>
                  <a href="https://discord.com/" target="_blank">
                    <img
                      className="inline-block p-[8px]  rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={discordIcon}
                      alt=""
                    />
                  </a>
                </div>
              </td>
              <td>
                <p className="text-[#14F092] text-[12px] font-[600] bg-[#212123] w-[80px] text-center mx-auto py-[6px] rounded-[20px]">
                  8,126,875
                </p>
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                25.6M
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                25.6M
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                53%
              </td>
              <td className="pr-[23px]">
                {/* <input
                  type="range"
                  value="50"
                  min="1"
                  max="100"
                  onChange={(e) => setRange1(e.target.value)}
                /> */}
                <div class="range">
                  <button
                    className="range_button"
                    style={{ left: "20%", backgroundColor: "rebeccapurple" }}
                  >
                    20%
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={likeIcon} alt="" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Roger Ver</p>
                    <p>@rogerkver</p>
                  </div>
                </div>
              </td>
              <td>
                <div class=" flex justify-center items-center">
                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den"
                    target="_blank"
                  >
                    <img
                      className="inline-block  p-[8px] rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={twitterIcon}
                      alt=""
                    />
                  </a>
                  <a href="https://discord.com/" target="_blank">
                    <img
                      className="inline-block p-[8px]  rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={discordIcon}
                      alt=""
                    />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img
                      className="inline-block p-[8px]  rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={instagramIcon}
                      alt=""
                    />
                  </a>
                </div>
              </td>
              <td>
                <p className="text-[#14F092] text-[12px] font-[600] bg-[#212123] w-[80px] text-center mx-auto py-[6px] rounded-[20px]">
                  4,126,845
                </p>
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                40.2M
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                40.2M
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                24%
              </td>
              <td className="pr-[23px]">
                {/* <input
                  type="range"
                  value={range2}
                  min="1"
                  max="100"
                  onChange={(e) => setRange2(e.target.value)}
                /> */}
                <div class="range">
                  <button
                    className="range_button"
                    style={{ left: "10%", backgroundColor: "#ED6344" }}
                  >
                    10%
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={waveIcon} alt="" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Andreas M. Antonopoulos</p>
                    <p>@aantop</p>
                  </div>
                </div>
              </td>
              <td>
                <div class=" flex justify-center items-center">
                  <a href="https://discord.com/" target="_blank">
                    <img
                      className="inline-block p-[8px]  rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={discordIcon}
                      alt=""
                    />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img
                      className="inline-block p-[8px]  rounded-full ring-2 ring-[#444] object-contain bg-[#070707]"
                      src={instagramIcon}
                      alt=""
                    />
                  </a>
                </div>
              </td>
              <td>
                <p className="text-[#14F092] text-[12px] font-[600] bg-[#212123] w-[80px] text-center mx-auto py-[6px] rounded-[20px]">
                  2,106,847
                </p>
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                10.8M
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                10.8M
              </td>
              <td className="text-[14px] font-[400] text-[#B1B1B1] text-center">
                74%
              </td>
              <td className="pr-[23px]">
                <div class="range">
                  <button
                    className="range_button"
                    style={{ left: "40%", backgroundColor: "#FFC459" }}
                  >
                    40%
                  </button>
                </div>
                {/* <input
                  type="range"
                  value={range3}
                  min="1"
                  max="100"
                  onChange={(e) => setRange3(e.target.value)}
                /> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopInfluencers;
