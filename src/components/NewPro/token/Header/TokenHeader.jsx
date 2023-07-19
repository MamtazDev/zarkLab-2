import React, { useContext, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import user from "../../../../assets/images/User.png";
import "./TokenHeader.css";
// import { AuthContext } from "../../../contexts/AuthProvider";
import bitcoin from "../../../../assets/icons/BItCoinIconSmall.png";
import bitshare from "../../../../assets/icons/BitShareIcon.png";
import bittorrent from "../../../../assets/icons/BitTorrentIcon.png";
import searchIcon from "../../../../assets/icons/Icons.png";
import crossIcon from "../../../../assets/icons/crossIconBig.png";

const TokenHeader = () => {
  const searchData = [
    {
      image: bitcoin,
      name: "[BTC] Bitcoin",
    },
    {
      image: bittorrent,
      name: "[BTC] BitTorrent",
    },
    {
      image: bitshare,
      name: "[BTC] BitShares",
    },
  ];

  // const { subscription, setSubscription } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (data) => {
    if (searchText) {
      return data.name.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return true;
    }
  };

  const handleSearchIconClick = () => {
    inputRef.current.click();
  };
  // nipaaaa
  return (
    <div className="flex gap-4 justify-between items-center mb-[14px]">
      <div className="w-3/4 lg:5/6 relative">
        <div className="flex">
          <input
            type="text"
            className="w-[80%] lg:w-[95%] h-[45px] rounded-l-[6px] bg-[#161616] px-[20px] placeholder:text-[#8A8A8A] inputField"
            placeholder="Search Token"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            ref={inputRef}
          />
          <div
            className="w-[20%] lg:w-[6%] bg-[#161616] flex items-center justify-center rounded-r-[6px]"
            onClick={handleSearchIconClick}
          >
            {searchText ? (
              <img
                src={crossIcon}
                alt=""
                className="cursor-pointer"
                onClick={() => setSearchText("")}
              />
            ) : (
              <img src={searchIcon} alt="" />
            )}
          </div>
        </div>
        {searchText && (
          <div className="bg-[#161616] px-[20px] py-[12px] text-[11px] font-[400] text-[#8A8A8A] flex flex-col gap-[9px] absolute w-full">
            {searchData.filter(handleSearch).map((data, i) => (
              <p className="flex gap-[5px] items-center">
                <img src={data.image} alt="" /> {data.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="lg:w-1/6 relative">
        <div
          className="flex items-center gap-3  justify-end cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <img
            className="inline-block h-[45px] w-[45px] rounded-full "
            src={user}
            alt=""
          />
          <p className="hidden lg:block text-[12px] font-[400] text-[#B1B1B1]">
            Hello Spiro
          </p>
          <IoIosArrowDown />
        </div>

        {/* {show && (
          <div className="bg-[#161616] text-center absolute px-[10px] py-[10px] rounded-[4px] right-0 top-14">
            <ul className="w-full">
              <li
                className={
                  subscription === "free"
                    ? "text-[13px] mb-[8px] font-[600] border border-[#14f092] px-[10px]  rounded-full"
                    : "mb-[8px] text-[13px] font-[400] text-[#B1B1B1] px-[10px] py-[3px] rounded-[6px] cursor-pointer"
                }
                onClick={() => setSubscription("free")}
              >
                Free
              </li>
              <li
                className={
                  subscription === "pro"
                    ? "text-[13px] font-[600] border border-[#14f092] px-[10px]  rounded-full"
                    : "mb-[8px] text-[13px] font-[400] text-[#B1B1B1] px-[10px]  py-[3px] rounded-[6px] cursor-pointer"
                }
                onClick={() => setSubscription("pro")}
              >
                <span className="">PREMIUM</span>
              </li>
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TokenHeader;
