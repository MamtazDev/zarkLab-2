import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/companyLogo.png";
import home from "../../../assets/icons/home.png";
import homeActive from "../../../assets/icons/homeActive.png";
import market from "../../../assets/icons/market.png";
import marketActive from "../../../assets/icons/marketActive.png";
import token from "../../../assets/icons/token.png";
import tokenActive from "../../../assets/icons/tokenActive.png";
import chat from "../../../assets/icons/chat.png";
import chatActive from "../../../assets/icons/chatActive.png";
import portfolio from "../../../assets/icons/portfolio.png";
import portfolioActive from "../../../assets/icons/portfolioActive.png";
import lock from "../../../assets/icons/lock.png";
import userIcon from "../../../assets/icons/userIcon.png";
import userProfilPic from "../../../assets/images/userProfilePic.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const NewSideBar = () => {
  const { subscription, setSubscription } = useContext(AuthContext);
  const activeClassName = "active";
  const location = useLocation();
  return (
    <div className="bg-[#0d0d0d] w-full h-screen text-[#8A8A8A] px-[20px] pt-[32px] pb-[62px] flex flex-col justify-between">
      <div className="flex flex-col gap-[32px]">
        <div className="mb-[25px]">
          <NavLink className="" to="/">
            <div className="flex  gap-[14px] items-center">
              <img src={logo} alt="" className="object-contain" />
            </div>
          </NavLink>
          <div className="text-center relative mt-[18px] w-[83px]">
            <p className="pro_logo text-[12px] font-[600] px-[13px] mb-[3px] text-white">
              PREMIUM
            </p>
            <p className="text-[#FFC459] text-[7px] font-[400] absolute top-[25px] right-[28px]">
              Days Left: <span>14</span>
            </p>
          </div>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-[12px] text-[14px] `
              : "flex items-center gap-[12px] text-[14px] text-[8A8A8A] font-[400]"
          }
        >
          {location.pathname === "/" ? (
            <img src={homeActive} alt="" className="object-contain" />
          ) : (
            <img src={home} alt="" className="object-contain" />
          )}
          Home
        </NavLink>
        <NavLink
          to="/market"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-[12px] text-[14px]`
              : "flex items-center gap-[12px] text-[14px] text-[8A8A8A] font-[400]"
          }
        >
          {location.pathname === "/market" ? (
            <img src={marketActive} alt="" className="object-contain" />
          ) : (
            <img src={market} alt="" className="object-contain" />
          )}
          Market
        </NavLink>
        <NavLink
          to="/token"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-[12px] text-[14px]`
              : "flex items-center  gap-[12px] text-[14px] text-[8A8A8A] font-[400]"
          }
        >
          {location.pathname === "/token" ? (
            <img src={tokenActive} alt="" className="object-contain" />
          ) : (
            <img src={token} alt="" className="object-contain" />
          )}
          Token
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-[12px] text-[14px]`
              : "flex items-center gap-[12px] text-[14px] text-[8A8A8A] font-[400]"
          }
        >
          {location.pathname === "/portfolio" ? (
            <img src={portfolioActive} alt="" className="object-contain" />
          ) : (
            <img src={portfolio} alt="" className="object-contain" />
          )}{" "}
          Portfolio
        </NavLink>

        <NavLink
          to="/cryptoAiChat"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-[12px] text-[14px]`
              : "flex items-center gap-[12px] text-[14px] text-[8A8A8A] font-[400]"
          }
        >
          {location.pathname === "/cryptoAiChat" ? (
            <img src={chatActive} alt="" className="object-contain" />
          ) : (
            <img src={chat} alt="" className="object-contain" />
          )}
          Crypto AIChat
        </NavLink>
      </div>

      <div className="flex flex-col gap-[20px] pt-[64px] border-t border-[#212123]">
        <div className="flex gap-[10px]">
          <div className="rounded-full w-[18px] h-[18px]">
            <img
              src={userProfilPic}
              alt=""
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <p className="text-[14px] font-[400]">Spiro</p>
        </div>
      </div>
    </div>
  );
};

export default NewSideBar;
