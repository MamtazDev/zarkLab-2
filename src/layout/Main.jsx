import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex ">
      <div className="hidden lg:block w-[366px] h-screen">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
