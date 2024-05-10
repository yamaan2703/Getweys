import React from "react";
import AppBtn from "./AppBtn";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import AppInp from "./AppInp";

function Chat() {
  return (
    // ChatBox
    <div className="chat_box p-5 w-full relative">
      {/* User Info */}
      <div className="flex justify-between items-center">
        <div className="chat_info flex space-x-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[50px] h-[50px] object-cover rounded-full"
              alt="User"
            />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg font-mono">William Micheal</h1>
            <p className="text-gray-500 text-sm">Hello! I am using a Chatbox</p>
          </div>
        </div>

        <div>
          <AppBtn label="Block User" />
        </div>
      </div>
      <hr className="my-3" />

      {/* User Chats */}
      <div className="message_body p-2 overflow-y-auto h-[420px] relative">
        <div className="flex space-x-2 justify-start items-center text-white my-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-full w-[30px] h-[30px]"
              alt="User"
            />
          </div>
          <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
        </div>

        <div className="flex space-x-2 justify-end items-center text-white my-2">
          <div className="p-1 bg-gray-700 rounded">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
        </div>

        <div className="flex space-x-2 justify-start items-center text-white my-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-full w-[30px] h-[30px]"
              alt="User"
            />
          </div>
          <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
        </div>

        <div className="flex space-x-2 justify-start items-center text-white my-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-full w-[30px] h-[30px]"
              alt="User"
            />
          </div>
          <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded">
          <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover w-[200px] h-[200px]"
              alt="User"
            />
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
        </div>

        <div className="flex space-x-2 justify-start items-center text-white my-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-full w-[30px] h-[30px]"
              alt="User"
            />
          </div>
          <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded">
            <p>Lorem Ipsum </p>
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
        </div>

        <div className="flex space-x-2 justify-start items-center text-white my-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-full w-[30px] h-[30px]"
              alt="User"
            />
          </div>
          <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded">
            <p>Lorem </p>
            <span className="text-gray-400 text-xs">1 min ago</span>
          </div>
        </div>
      </div>

      {/* Message Box */}
      <div className="user_chats absolute bottom-1 w-[900px]">
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
            <AppInp label="Type a message..." />
          </div>
          <div>
            <AppBtn label="Send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
