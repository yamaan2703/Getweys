import React, { useContext, useEffect, useState } from "react";
import AppBtn from "./AppBtn";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import AppInp from "./AppInp";
import { ChatContext } from "../Config/ChatContext";

function Chat() {
   const { data } = useContext(ChatContext) 

 
  return (
    // ChatBox
    <div className="chat_box p-5 relative w-[900px]">
      {/* User Info */}
      <div className="flex justify-between ">
        <div className="chat_info flex justify-between items-center space-x-4">
          <div>
            <img
              src={data.user?.photoURL || null}
              className="w-[50px] h-[50px] object-cover rounded-full"
              alt="User"
            />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg font-mono">{data.user?.displayName || null}</h1>
          </div>
        </div>

        {/* <div>
          <AppBtn label="Block User" />
        </div> */}
      </div>
      <hr className="my-2" />

      {/* User Chats */}
      <div className="message_body p-2 overflow-y-auto h-[420px] relative">

        <div className="flex space-x-2 justify-end items-center text-white my-2">
          <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded">
            <p>Lorem Ipsum is simply dummy text</p>
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
          <div className="">
          <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-full w-[30px] h-[30px]"
              alt="User"
            />
          </div>
        </div>

      </div>

      {/* Message Box */}
      <div className="user_chats absolute bottom-1 w-[850px]">
        <div className="flex justify-center items-center p-1 pt-2 space-x-4 border-t">
          <div className="icons flex justify-between items-center space-x-4">
            <div className="text-white font-bold text-xl">
              <IoIosCall />
            </div>
            <div className="text-white font-bold text-xl">
              <FaVideo />
            </div>
            <div className="text-white font-bold text-xl">
              <MdOutlineInsertPhoto />
            </div>
          </div>
          <div className="w-full">
            <AppInp 
            label="Type a message..." 
            // value={model.messages}
            //     onChange={(e) => fillModel("messages", e.target.value)}
            />
          </div>
          <div>
            <AppBtn label="Send" 
            // onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;





