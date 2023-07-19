import React from "react";
import NewSideBar from "../components/NewPro/sidebar/NewSideBar";
import { Outlet } from "react-router-dom";

const NewProLayout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-[219px] h-screen border-r border-r-[#2B2C2F]">
        <NewSideBar />
      </div>
      <div className=" py-[24px] w-full h-screen overflow-y-auto no-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default NewProLayout;
