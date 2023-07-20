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
  return (
    <div className="mt-[25px]">
      <h3 className="text-[16px] font-[600] text-[#8A8A8A] mb-4">
        TOP INFLUENCERS
      </h3>

      <div className="mt-[11px] overflow-x-auto  table-scrollbar">
        <table className="table-auto w-full topInfluencerTable">
          <thead className="whitespace-nowrap">
            <tr className="bg-[#111212] text-[12px] font-[400] text-[#B1B1B1]">
              <th className="py-[15px] px-[100px] xl:px-[23px] text-start">
                Influencer
              </th>
              <th className="px-[23px]">Social Media Presence</th>
              <th className="px-[23px]">Number of Followers</th>
              <th className="px-[23px]">Total Retweets</th>
              <th className="px-[23px]">Total Likes</th>
              <th className="px-[23px]">% Crypto Post</th>
              <th className="px-[23px]">
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
                <div className=" flex justify-center items-center">
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
                <div className="range">
                  <button
                    className="range_button"
                    style={{ left: "5%", backgroundColor: "#ED6344" }}
                  >
                    11%
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={likeIcon} alt="" className="object-contain" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Roger Ver</p>
                    <p>@rogerkver</p>
                  </div>
                </div>
              </td>
              <td>
                <div className=" flex justify-center items-center">
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
                <div className="range">
                  <button
                    className="range_button"
                    style={{ left: "59%", backgroundColor: "#14F092" }}
                  >
                    79%
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={waveIcon} alt="" className="object-contain" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Andreas M. Antonopoulos</p>
                    <p>@aantop</p>
                  </div>
                </div>
              </td>
              <td>
                <div className=" flex justify-center items-center">
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
                <div className="range">
                  <button
                    className="range_button"
                    style={{ left: "25%", backgroundColor: "#FFC459" }}
                  >
                    38%
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={likeIcon} alt="" className="object-contain" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Roger Ver</p>
                    <p>@rogerkver</p>
                  </div>
                </div>
              </td>
              <td>
                <div className=" flex justify-center items-center">
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
                <div className="range">
                  <button
                    className="range_button"
                    style={{ left: "59%", backgroundColor: "#14F092" }}
                  >
                    79%
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#111212]">
              <td className="py-[8px] pl-[23px]">
                <div className="flex items-center gap-[22px]">
                  <div>
                    <img src={waveIcon} alt="" className="object-contain" />
                  </div>
                  <div className="text-[14px] font-[400]">
                    <p>Andreas M. Antonopoulos</p>
                    <p>@aantop</p>
                  </div>
                </div>
              </td>
              <td>
                <div className=" flex justify-center items-center">
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
                <div className="range">
                  <button
                    className="range_button"
                    style={{ left: "25%", backgroundColor: "#FFC459" }}
                  >
                    38%
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopInfluencers;