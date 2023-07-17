import React from "react";
import increaseGreenArrow from "../../../../assets/icons/increaseArrowGreen.png";
import decreaseGreenArrow from "../../../../assets/icons/decreaseArrowRed.png";
import user1 from "../../../../assets/images/user1.png";
import user2 from "../../../../assets/images/user2.png";
import user3 from "../../../../assets/images/user3.png";
import commentIcon from "../../../../assets/icons/commentIcon.png";
import heartIcon from "../../../../assets/icons/heartIcon.png";
import shareIcon from "../../../../assets/icons/shareIcon.png";
import smilyIcon from "../../../../assets/icons/smilyIcon.png";

const MediaActivitices = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        <div className="bg-[#111212] rounded-[6px] p-[20px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">
            Number of Searches
          </p>
          <div className="flex gap-[27px] items-center">
            <p className="text-[26px] font-[600]">13,405</p>
            <div className="flex gap-[10px]">
              <p className="text-[12px] font-[400] text-[#14F092] bg-[#212123] rounded-[20px] px-[10px] py-[3px] flex gap-[4px]">
                7.7%
              </p>
              <p className="text-[12px] font-[400] text-[#14F092]  flex gap-[4px]">
                + 4,245
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#111212] rounded-[6px] p-[20px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">
            Social Media Followers
          </p>
          <div className="flex gap-[27px] items-center">
            <p className="text-[26px] font-[600]">9.2m</p>
            <div className="flex gap-[13px]">
              <p className="text-[12px] font-[400] text-[#14F092] bg-[#212123] rounded-[20px] px-[10px] py-[3px] flex gap-[4px]">
                1.6%
              </p>
              <p className="text-[12px] font-[400] text-[#14F092]  flex gap-[4px]">
                + 42,245
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#111212] rounded-[6px] p-[20px]">
          <p className="text-[14px] font-[600] text-[#B1B1B1]">
            General Sentiment
          </p>
          <div className="flex gap-[27px] items-center">
            <p className="text-[26px] font-[600] flex gap-[6px] items-center">
              <img
                className="h-[25px] w-[25px] object-contain"
                src={smilyIcon}
                alt=""
              />{" "}
              Positive
            </p>
            <p className="text-[12px] font-[400] text-[#14F092] bg-[#212123] rounded-[20px] px-[10px] py-[3px] flex gap-[4px]">
              82%
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#111212] rounded-[6px] px-[20px] pt-[20px] pb-1 mt-[13px]">
        <h6 className="text-[14px] font-[600] text-[#B1B1B1] mb-5">
          Top 3 Tweets of the Day
        </h6>

        <div>
          <div className="flex  items-center w-full gap-[12px] mb-[29px]">
            <div className="w-[40px] h-[40px] rounded-full">
              <img
                src={user1}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-wrap gap-1 justify-between">
                <div className="flex  items-center mb-[10px]">
                  <p className="text-[14px] font-[600] ">Nikolarn</p>
                  <div className="ml-[7px] text-[10px] font-[600] text-[#8A8A8A] flex">
                    <p>@TheRealNikolarn</p>
                    <p className="mx-[5px]">.</p>
                    <p>3h</p>
                  </div>
                </div>

                <div className="flex gap-[40px] items-center">
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={heartIcon} alt="" className="object-contain" /> 21
                  </p>
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={shareIcon} alt="" className="object-contain" />{" "}
                    5,410
                  </p>
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={heartIcon} alt="" className="object-contain" />{" "}
                    6,020
                  </p>
                </div>
              </div>

              <p className="pt-2 lg:pt-0  text-[13px] font-[600] text-[#8A8A8A]">
                A boy asked his bitcoin-investing dad for 1 bitcoin for his
                birthday.
              </p>
              <p className="text-[13px] font-[600] text-[#8A8A8A]">
                Dad:What?$15,554??$14,354 is a lot of money! What do you need
                $16,782 for anyway?
              </p>
            </div>
          </div>

          <div className="flex w-full gap-[12px] mb-[29px]">
            <div className="w-[40px] h-[40px] rounded-full">
              <img
                src={user2}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-wrap gap-1 justify-between">
                <div className="flex items-center mb-[10px]">
                  <p className="text-[14px] font-[600] ">Greg Schoen</p>
                  <div className="ml-[7px] text-[10px] font-[600] text-[#8A8A8A] flex">
                    <p>@GregSchoen</p>
                    <p className="mx-[5px]">.</p>
                    <p>5h</p>
                  </div>
                </div>

                <div className="flex gap-[40px] items-center">
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={heartIcon} alt="" className="object-contain" />{" "}
                    325
                  </p>
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={shareIcon} alt="" className="object-contain" />{" "}
                    3,233
                  </p>
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={heartIcon} alt="" className="object-contain" />{" "}
                    4,827
                  </p>
                </div>
              </div>

              <p className="pt-2 lg:pt-0  text-[13px] font-[600] text-[#8A8A8A]">
                I wish I had kept my 1,700 BTC@$0.06 instead of selling them at
                $0.30, now that they're $8.00 #bitcoin
              </p>
            </div>
          </div>

          <div className="flex w-full gap-[12px] mb-[22px]">
            <div className="w-[40px] h-[40px] rounded-full">
              <img
                src={user3}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-wrap gap-1 justify-between">
                <div className="flex items-center mb-[10px]">
                  <p className="text-[14px] font-[600] ">Donald J. Trump</p>
                  <div className="ml-[7px] text-[10px] font-[600] text-[#8A8A8A] flex">
                    <p>@realDonaldTrump</p>
                    <p className="mx-[5px]">.</p>
                    <p>Now</p>
                  </div>
                </div>

                <div className="flex gap-[40px] items-center">
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={heartIcon} alt="" className="object-contain" />{" "}
                    2341
                  </p>
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={shareIcon} alt="" className="object-contain" />{" "}
                    261
                  </p>
                  <p className="flex gap-[4px] text-[8px] font-[400] text-[#747474]">
                    <img src={heartIcon} alt="" className="object-contain" />{" "}
                    4801
                  </p>
                </div>
              </div>

              <p className="pt-2 lg:pt-0 text-[13px] font-[600] text-[#8A8A8A]">
                #Bitcoin is fantastic, not even CHINA can manipulate it.
              </p>
              <p className="text-[13px] font-[600] text-[#8A8A8A]">
                After I #AuditTheFED I think I'll give bitcoin a chance and make
                it great again
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaActivitices;
