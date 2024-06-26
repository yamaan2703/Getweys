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
      <div className="sidebar bg-[rgba(0,0,0,0.4)] h-screen w-[250px]">
        <div>
          <Navbar />
        </div>
        <div>
        <Search />
        </div>
        <div>
          <ChatList />
        </div>
      </div>
    </>
  );
}

export default Sidebar;


