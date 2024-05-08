import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import AppInp from "../Components/AppInp";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import AppBtn from "../Components/AppBtn";
import AppUser from "../Components/AppUser";
import { useUserStore } from "../Config/UserStore";
import { useNavigate } from "react-router-dom";
import { AppAuth } from "../Config/FirebaseMethods";
import { app, auth } from "../Config/FirebaseConfig";
import { doc, onSnapshot, collection, query, orderBy, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

function Home() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const navigate = useNavigate();
  const defaultAvatar = "https://yt3.googleusercontent.com/ytc/AIdro_nbuqFu8kmSKHLQIeGidbz41oJ4DOP5_SlgThmBfej3SlE=s900-c-k-c0x00ffffff-no-rj";
  const defaultUserName = "Guest";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const uid = await AppAuth();
        if (uid) {
          await fetchUserInfo(uid);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate, fetchUserInfo]);

  // useEffect(() => {
  //   const q = query(collection(db, "chats"), orderBy("timestamp"));
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const updatedMessages = [];
  //     snapshot.forEach((doc) => {
  //       updatedMessages.push(doc.data());
  //     });
  //     setMessages(updatedMessages);
  //   });

  //   return () => {
  //     // Unsubscribe when component unmounts
  //     unsubscribe();
  //   };
  // }, []);

  const db = getDatabase(app);

  const handleSendMessage = async () => {
    try {
      // Add new message to Firestore
      await addDoc(collection(db, "chats"), {
        message: newMessage,
        senderId: currentUser.id,
        timestamp: new Date(),
      });
      setNewMessage(""); 
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (isLoading) return <div className="font-mono text-3xl font-bold p-2 shadow-lg shadow-black">Waiting.....</div>;

  return (
    <>
      {currentUser ? (
        <div className="background_page h-screen">
          <div className="overlay h-screen bg-[rgba(0,0,0,0.8)]">
            <div className="container p-5">
              <div className="flex justify-between">
                {/* Left sidebar */}
                <div className="h-full w-[350px] p-2 border-r">
                  {/* User Info */}
                  <div className="user_Info flex justify-between items-center">
                    <div className="user flex items-center space-x-2">
                      <div>
                        <img
                          src={currentUser.avatar || defaultAvatar}
                          className="w-[50px] h-[50px] object-cover rounded-full"
                          alt="User"
                        />
                      </div>
                      <div className="name">
                        <h1 className="font-bold text-md font-mono text-white">
                          {currentUser.userName || defaultUserName}
                        </h1>
                      </div>
                    </div>
                    {/* Icons */}
                    <div className="icons flex justify-between items-center space-x-2">
                      <div className="text-white font-bold text-xl">
                        <BsThreeDots />
                      </div>
                      <div className="text-white font-bold text-xl">
                        <FaVideo />
                      </div>
                      <div className="text-white font-bold text-xl">
                        <SlNote />
                      </div>
                    </div>
                  </div>

                  {/* Chat Search */}
                  <div className="chat_search mt-3 flex items-center space-x-2">
                    <div className="bg-[rgba(0,0,0,0.6)] w-[250px]">
                      <AppInp label="Search" icon={FaSearch} />
                    </div>

                    <div><AppUser /></div>
                  </div>

                  {/* Chat List */}
                  <div className="chat_list mt-2" style={{ maxHeight: "430px", overflowY: "auto" }}>
                    {/* Chat list items */}
                  </div>
                </div>

                {/* Chat Section */}
                <div className="chats_section p-2 border-r relative" style={{ width: "calc(100% - 500px)", maxHeight: "550px", overflowY: "auto" }}>
                  {/* Chat Header */}
                  <div className="header flex justify-between items-center border-b p-1 pb-2 sticky top-0 z-10">
                    {/* User Info */}
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="w-[50px] h-[50px] object-cover rounded-full"
                          alt="User"
                        />
                      </div>
                      <div className="text-white">
                        <h1 className="font-bold text-lg font-mono">William Micheal</h1>
                        <p className="text-gray-400 text-sm">Hello! I am using a Chatbox</p>
                      </div>
                    </div>
                    {/* Action Icons */}
                    <div className="icons flex items-center space-x-4">
                      <div className="text-white font-bold text-xl">
                        <FaPhoneAlt />
                      </div>
                      <div className="text-white font-bold text-xl">
                        <FaVideo />
                      </div>
                      <div className="text-white font-bold text-xl">
                        <FaInfoCircle />
                      </div>
                    </div>
                  </div>

                  {/* Message Body */}
                  <div className="message_body p-2 relative overflow-y-auto" style={{ maxHeight: "400px" }}>
                    {/* Display chat messages */}
                    {messages.map((message, index) => (
                      <div key={index} className="flex space-x-2 justify-start items-center text-white my-2">
                        <div className="">
                          <img
                            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover rounded-full w-[30px] h-[30px]"
                            alt="User"
                          />
                        </div>
                        <div className="p-2 bg-[rgba(0,0,0,0.6)] rounded">
                          <p>{message}</p>
                          <span className="text-gray-400 text-sm">1 min ago</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="footer flex justify-center items-center absolute bottom-0 left-0 right-0 p-1 pt-2 space-x-4 border-t z-10">
                    <div className="icons flex justify-between items-center space-x-4">
                      <div className="text-white font-bold text-xl">
                        <FaPhoneAlt />
                      </div>
                      <div className="text-white font-bold text-xl">
                        <FaVideo />
                      </div>
                      <div className="text-white font-bold text-xl">
                        <FaInfoCircle />
                      </div>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message ..."
                        className="w-full bg-transparent border-none focus:ring-0 focus:border-transparent text-white"
                      />
                    </div>
                    <button onClick={handleSendMessage} className="text-white">Send</button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="details_section w-[300px]">
                  {/* User Info */}
                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[100px] h-[100px] object-cover rounded-full"
                        alt="User"
                      />
                    </div>
                    <div className="text-center text-white m-2 border-b">
                      <h1 className="font-bold text-xl font-mono">William Micheal</h1>
                      <p className="text-gray-400 text-sm">Hello! I am using a Chatbox</p>
                    </div>
                  </div>

                  {/* Settings */}
                  <div>
                    <div className="flex justify-between items-center text-white p-2">
                      <p>Chat Setting</p>
                      <div className="text-xl p-1 rounded-full bg-gray-500 opacity-60">
                        <IoIosArrowUp />
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-white p-2">
                      <p>Notification Setting</p>
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

                  {/* Logout Button */}
                  <div className="mt-28">
                    <div className="p-2">
                      <AppBtn label="Block User" />
                    </div>
                    <div className="p-2">
                      <AppBtn label="Logout" onClick={handleLogout} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (<h1 className="text-center text-5xl font-mono p-3 shadow-lg shadow-black">Loading ....</h1>)}
    </>
  );
}

export default Home;
