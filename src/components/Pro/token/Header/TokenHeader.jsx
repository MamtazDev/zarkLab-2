import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import user from "../../../../assets/images/User.png";
import "./TokenHeader.css";

const TokenHeader = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex gap-4 items-center ">
      <div className="w-5/6">
        <input
          type="search"
          className="w-full h-[45px] rounded bg-[#161616] px-[20px] placeholder:text-[#8A8A8A] inputField"
          placeholder="Search Token"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 w-1/6 justify-end">
        <img
          className="inline-block h-[45px] w-[45px] rounded-full "
          src={user}
          alt=""
        />
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default TokenHeader;
