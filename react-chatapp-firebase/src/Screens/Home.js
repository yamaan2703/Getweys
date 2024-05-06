import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { SlNote } from "react-icons/sl";
import AppInp from "../Components/AppInp";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import AppBtn from "../Components/AppBtn";

function Home() {
  return (
    <>
      {/* <div className="background_page h-screen">
        <div className="overlay h-screen bg-[rgba(0,0,0,0.8)]">
          <div className="container p-5">
            <div className="flex justify-between">
              <div className="h-full w-[300px] p-2 border-r">
                <div className="user_Info flex justify-between items-center">
                  <div className="user flex items-center space-x-2">
                    <div className="">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="name">
                      <h1 className="font-bold text-md font-mono text-white">
                        William Micheal
                      </h1>
                    </div>
                  </div>
                  <div className="icons flex justify-between items-center space-x-2">
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <BsThreeDots />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaVideo />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <SlNote />{" "}
                    </div>
                  </div>
                </div>

                <div className="chat_search mt-3">
                  <div className="bg-[rgba(0,0,0,0.6)]">
                    <AppInp label="Search" icon={FaSearch} />
                  </div>
                </div>

                <div
                  className="chat_list mt-2"
                  style={{ maxHeight: "430px", overflowY: "auto" }}
                >
                  <div className="flex flex-col-reverse">
                    <div className="flex items-center space-x-2 border-b-2 py-2">
                      <div className="user_img">
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                      </div>
                      <div className="user_text text-white">
                        <h1 className="font-bold text-lg">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-b-2 py-2">
                      <div className="user_img">
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                      </div>
                      <div className="user_text text-white">
                        <h1 className="font-bold text-lg">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-b-2 py-2">
                      <div className="user_img">
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                      </div>
                      <div className="user_text text-white">
                        <h1 className="font-bold text-lg">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-b-2 py-2">
                      <div className="user_img">
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                      </div>
                      <div className="user_text text-white">
                        <h1 className="font-bold text-lg">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-b-2 py-2">
                      <div className="user_img">
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                      </div>
                      <div className="user_text text-white">
                        <h1 className="font-bold text-lg">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-b-2 py-2">
                      <div className="user_img">
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                        />
                      </div>
                      <div className="user_text text-white">
                        <h1 className="font-bold text-lg">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chats_section p-2 border-r w-[500px] ">
                <div className="header flex justify-between items-center bg-sky-400">
                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">
                        Hello! I am using a Chatbox
                      </p>
                    </div>
                  </div>

                  <div className="icons flex justify-between items-center space-x-4">
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaPhoneAlt />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaVideo />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaInfoCircle />{" "}
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="details_section">Details</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="background_page h-screen">
        <div className="overlay h-screen bg-[rgba(0,0,0,0.8)]">
          <div className="container p-5">
            <div className="flex justify-between">
              <div className="h-full w-[350px] p-2 border-r">
                <div className="user_Info flex justify-between items-center">
                  <div className="user flex items-center space-x-2">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                        alt="User"
                      />
                    </div>
                    <div className="name">
                      <h1 className="font-bold text-md font-mono text-white">
                        William Micheal
                      </h1>
                    </div>
                  </div>
                  <div className="icons flex justify-between items-center space-x-2">
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <BsThreeDots />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaVideo />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <SlNote />{" "}
                    </div>
                  </div>
                </div>

                <div className="chat_search mt-3">
                  <div className="bg-[rgba(0,0,0,0.6)]">
                    <AppInp label="Search" icon={FaSearch} />
                  </div>
                </div>

                <div
                  className="chat_list mt-2"
                  style={{ maxHeight: "430px", overflowY: "auto" }}
                >
                  <div className="flex items-center space-x-2 border-b-2 py-2">
                    <div className="user_img">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="user_text text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 border-b-2 py-2">
                    <div className="user_img">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="user_text text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 border-b-2 py-2">
                    <div className="user_img">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="user_text text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 border-b-2 py-2">
                    <div className="user_img">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="user_text text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 border-b-2 py-2">
                    <div className="user_img">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="user_text text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 border-b-2 py-2">
                    <div className="user_img">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="user_text text-white">
                      <h1 className="font-bold text-lg">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="chats_section p-2 border-r relative"
                style={{
                  width: "calc(100% - 500px)",
                  maxHeight: "550px",
                  overflowY: "auto",
                }}
              >
                <div className="header flex justify-between items-center border-b p-1 pb-2 sticky top-0 z-10">
                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[50px] h-[50px] object-cover rounded-full"
                        alt="User"
                      />
                    </div>
                    <div className="text-white">
                      <h1 className="font-bold text-lg font-mono">
                        William Micheal
                      </h1>
                      <p className="text-gray-400 text-sm">
                        Hello! I am using a Chatbox
                      </p>
                    </div>
                  </div>
                  <div className="icons flex items-center space-x-4">
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaPhoneAlt />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaVideo />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaInfoCircle />{" "}
                    </div>
                  </div>
                </div>

                <div
                  className="message_body p-2 relative overflow-y-auto"
                  style={{ maxHeight: "400px" }}
                >
                  <div className="flex space-x-2 justify-start items-center text-white my-2">
                    <div className="">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover rounded-full w-[30px] h-[30px]"
                        alt="User"
                      />
                    </div>
                    <div className="p-2 bg-[rgba(0,0,0,0.6)] rounded">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                      <span className="text-gray-400 text-sm">1 min ago</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 justify-end items-center text-white my-2">
                    
                    <div className="p-2 bg-blue-900 rounded w-auto">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                  <span className="text-gray-400 text-sm">1 min ago</span>
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
                    <div className="p-2 bg-[rgba(0,0,0,0.6)] rounded">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                  <span className="text-gray-s400 text-sm">1 min ago</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 justify-end items-center text-white my-2">
                    <div className="p-2 bg-blue-900 rounded w-auto">
                      <p>
                        Lorem Ipsum is simply dummy text.
                      </p>
                  <span className="text-gray-400 text-sm">1 min ago</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 justify-end items-center text-white my-2">
                    
                    <div className="p-2 rounded w-[400px]">
                      <img src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  <span className="text-gray-400 text-sm">1 min ago</span>
                    </div>
                  </div>

                 

                </div>

                <div className="footer flex justify-center items-center absolute bottom-0 left-0 right-0 p-1 pt-2 space-x-4 border-t z-10">
                  <div className="icons flex justify-between items-center space-x-4">
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaPhoneAlt />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaVideo />{" "}
                    </div>
                    <div className="text-white font-bold text-xl">
                      {" "}
                      <FaInfoCircle />{" "}
                    </div>
                  </div>
                  <div className="w-full">
                    <AppInp label="Type a message ..." icon={FaLocationArrow} />
                  </div>
                </div>
              </div>

              <div className="details_section w-[300px]">
                <div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-[100px] h-[100px] object-cover rounded-full"
                      alt="User"
                    />
                  </div>
                  <div className="text-center text-white m-2 border-b">
                    <h1 className="font-bold text-xl font-mono">
                      William Micheal
                    </h1>
                    <p className="text-gray-400 text-sm">
                      Hello! I am using a Chatbox
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-white p-2">
                    <p>Chat Setting</p>
                    <div className="text-xl p-1 rounded-full bg-gray-500 opacity-60">
                      <IoIosArrowUp />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-white p-2">
                    <p>Notifcation Setting</p>
                    <div className="text-xl p-1 rounded-full bg-gray-500 opacity-60">
                      <IoIosArrowUp />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-white p-2">
                    <p>Privacy & Helps</p>
                    <div className="text-xl p-1 rounded-full bg-gray-500 opacity-60">
                      <IoIosArrowUp />
                    </div>
                  </div>
                </div>

                <div className="mt-28">
                  <div className="p-2">
                    <AppBtn label="Block User" />
                  </div>
                  <div className="p-2">
                    <AppBtn label="Logout" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
