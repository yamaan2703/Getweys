import React from "react";
import Navbar from "./Navbar";
import AppInp from "./AppInp";
import { FaSearch } from "react-icons/fa";
import AddUser from "./AddUser";
import ChatList from "./ChatList";
import Search from "./Search";

function Sidebar() {
  return (
    // SideBar
    <>
      <div className="sidebar bg-[rgba(0,0,0,0.5)] h-screen w-[250px]">
        <div>
          <Navbar />
        </div>
        <div>
        <Search />
        {/* <AddUser /> */}
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
