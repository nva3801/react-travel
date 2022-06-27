import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../Dashboard/DashboardHeader";
import Sidebar from "./Sidebar";
const DashboardLayout = ({ children }) => {
  return (
    <div className="mx-auto">
      <DashboardHeader></DashboardHeader>
      <div className="grid grid-cols-[300px_minmax(0,_1fr)] items-start ">
        <Sidebar></Sidebar>
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
