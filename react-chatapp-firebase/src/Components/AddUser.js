import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import AppInp from "./AppInp";
import AppBtn from "./AppBtn";
import { app, auth } from "../Config/FirebaseConfig";
import {
  getDatabase,
  ref,
  set,
  push,
  query,
  orderByChild,
  equalTo,
  serverTimestamp,
  onValue,
  update,
} from "firebase/database";

function AddUser(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };

  const closeToggleInput = () => {
    setIsOpen(false);
  };

  const db = getDatabase(app); 

  const handleSearch = (e) => {
    e.preventDefault();
    const usersRef = ref(db, "users");
    const queryRef = query(usersRef, orderByChild("userName"), equalTo(searchValue));

    onValue(queryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userId = Object.keys(data)[0];
        setUser({ ...data[userId], id: userId });
        
      } else {
        setUser(null);
      }
    });
  };

  const handleAdd = async () => {
    const chatRef = ref(db, "chats");
    const newChatRef = push(chatRef);
    try {
      set(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await update(ref(db, `userchats/${user.id}`), {
        chats: {
          chatId: newChatRef.key,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        },
      });

      let currentUser = auth.currentUser;
      await update(ref(db, `userchats/${currentUser.uid}`), {
        chats: {
          chatId: newChatRef.key,
          lastMessage: "",
          receiverId: currentUser.uid,
          updatedAt: Date.now(),
        },
      }); 


      props.getdatafx(user)
      console.log(user);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="add_user" onClick={toggleInput}>
        <div className="bg-gray-800 rounded p-2 text-white text-center">
          <p>Add User</p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-70 backdrop-blur-sm"></div>
          <div className="bg-black w-[500px] rounded-lg p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-mono text-white font-semibold">Add User</h2>
              <button onClick={closeToggleInput}>
                <IoIosClose className="text-red-500 text-4xl" />
              </button>
            </div>
            <form
              className="flex justify-between items-center space-x-2"
              onSubmit={handleSearch}
            >
              <div className="my-2 w-[400px]">
                <AppInp
                  label="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div className="my-2">
                <AppBtn label="Search" />
              </div>
            </form>
            {user && (
              <div className="flex space-x-9 justify-between items-center my-1">
                <div className="flex justify-center items-center space-x-4">
                  <img
                    src={
                      user.avatar ||
                      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    className="w-[50px] h-[50px] rounded-full object-cover"
                    alt={user.userName}
                  />
                  <p className="font-mono text-lg text-white">{user.userName || "Empty"}</p>
                </div>
                <div>
                  <AppBtn label="Add User" onClick={handleAdd} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AddUser;