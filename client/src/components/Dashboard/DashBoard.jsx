import React from "react";
import "./DashBoard.css";
import { FaDesktop } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const DashBoard = () => {
  return (
    <div className="dashboardContainer">
      <div className="dashboardHeader">
        <img src="./craftmyplate_logo.png" alt="logo" />
        <span>Task Managment System</span>
      </div>
      <div className="dashboardItems">
        <FaDesktop />
        <span>Dashboard</span>
      </div>
      <div className="dashboardItems">
        <IoMdLogOut />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default DashBoard;
