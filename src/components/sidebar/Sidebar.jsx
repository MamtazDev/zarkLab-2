import React, { useContext } from "react";
import "./Sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { RiProfileLine } from "react-icons/ri";
import { BsChatSquare, BsQuestionCircle } from "react-icons/bs";
import { FiUser, FiSettings } from "react-icons/fi";
import logo from "../../assets/images/companyLogo.png";
import { AuthContext } from "../../contexts/AuthProvider";
import home from "../../assets/icons/home.png";
import homeActive from "../../assets/icons/homeActive.png";
import market from "../../assets/icons/market.png";
import marketActive from "../../assets/icons/marketActive.png";
import token from "../../assets/icons/token.png";
import tokenActive from "../../assets/icons/tokenActive.png";
import chat from "../../assets/icons/chat.png";
import chatActive from "../../assets/icons/chatActive.png";
import portfolio from "../../assets/icons/portfolio.png";
import portfolioActive from "../../assets/icons/portfolioActive.png";
import lock from "../../assets/icons/lock.png";
import userIcon from "../../assets/icons/userIcon.png";
import userProfilPic from "../../assets/images/userProfilePic.png";

const Sidebar = () => {
  const { subscription, setSubscription } = useContext(AuthContext);
  const activeClassName = "active";

  const location = useLocation();

  return (
    <div className="bg-[#000000] h-screen text-[#8A8A8A] px-[20px] py-[50px] flex flex-col justify-between">
      <div className="flex flex-col gap-[20px]">
        <NavLink className="mb-[25px]" to="/">
          <div className="flex  gap-[14px] items-center">
            <img src={logo} alt="" className="object-contain" />
            {subscription === "pro" && (
              <div className="text-center relative">
                <p className="pro_logo text-[12px] font-[600] px-[13px] mb-[3px] text-white">
                  PREMIUM
                </p>
                <p className="text-[#FFC459] text-[7px] font-[400] absolute top-[25px] right-[28px]">
                  Days Left: <span>14</span>
                </p>
              </div>
            )}
          </div>
        </NavLink>
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

        {subscription === "pro" ? (
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
        ) : (
          <div className="flex items-center gap-[29px]">
            <p className="flex items-center gap-[12px] text-[14px] text-[8A8A8A] font-[400]">
              <img src={chat} alt="" className="object-contain" />
              Crypto AIChat
            </p>{" "}
            <p className="bg-[#252525] text-[10px] font-[400] text-[#8A8A8A] flex items-center gap-[4px] px-[9px] py-[4px] border border-[#8A8A8A] rounded-[30px]">
              <img src={lock} alt="" className="object-contain" />
              PRO
            </p>
          </div>
        )}
        {/* <NavLink
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
        </NavLink> */}
      </div>

      <div className="flex flex-col gap-[20px] pt-[64px] border-t border-[#212123]">
        {/* <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-2`
              : "flex items-center gap-2"
          }
        >
          <FiUser /> Account
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-2`
              : "flex items-center gap-2"
          }
        >
          <FiSettings /> Settings
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center gap-2`
              : "flex items-center gap-2"
          }
        >
          <BsQuestionCircle /> Help
        </NavLink> */}

        {subscription === "free" && (
          <div
            className="flex gap-[10px] items-center cursor-pointer"
            onClick={() => setSubscription("pro")}
          >
            <img src={userIcon} alt="" />{" "}
            <p className="text-[12px] font-[400]">
              {" "}
              Upgrade to{" "}
              <span className="text-[15px] font-[800] text-[#B4579A]">
                PREMIUM
              </span>
            </p>
          </div>
        )}
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

export default Sidebar;
