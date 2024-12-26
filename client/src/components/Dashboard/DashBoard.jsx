import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import { FaDesktop } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const DashBoard = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dashboardContainer">
      <div className="dashboardHeader">
        <img src="./craftmyplate_logo.png" alt="logo" />
        <span className="primaryText">Task Management System</span>

        {isMobile && (
          <div onClick={() => setMenuOpened(!menuOpened)} className="menu-icon">
            {menuOpened ? (
              <MdCancel size={30} color="#ead999" />
            ) : (
              <GiHamburgerMenu size={30} color="#ead999" />
            )}
          </div>
        )}
      </div>

      {(menuOpened || !isMobile) && (
        <div className="dashboardMenu">
          <div className="dashboardItems">
            <FaDesktop />
            <span className="secondaryText">Dashboard</span>
          </div>
          <div className="dashboardItems">
            <IoMdLogOut />
            <span className="secondaryText">Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
