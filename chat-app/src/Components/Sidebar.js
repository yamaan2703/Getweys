import React from "react";
import Navbar from "./Navbar";
import AppInp from "./AppInp";
import { FaSearch } from "react-icons/fa";
import AddUser from "./AddUser";
import ChatList from "./ChatList";

function Sidebar() {
  return (
    // SideBar
    <>
      <div className="sidebar bg-[rgba(0,0,0,0.5)] h-screen w-[300px]">
        <div>
          <Navbar />
        </div>
        <div>
          <ChatList />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

// ye choro yaha bs component show kraa hai mene bs or kuch nh
