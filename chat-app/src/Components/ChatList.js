import React, { useState } from "react";
import AddUser from "./AddUser";
import { FaSearch } from "react-icons/fa";
import AppInp from "./AppInp";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";
import AppBtn from "./AppBtn";

function ChatList() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearchUser = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log("data ===", doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleSearch = () => {
    handleSearchUser();
  };

  return (
    <>
      <div className="chatlist">
        <div className="container">
          <div className="px-2 flex space-x-1">
            <AppInp
              label="Search"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <AppBtn 
              label="Search"
              onClick={handleSearch}
            />
          </div>
          <div className="my-1">
            {err && <p>User Not Found</p>}
            {user && (
              <div className="flex space-x-3 hover:bg-[rgba(0,0,0,0.9)] p-2">
                <div>
                  <img
                    src={user.photoURL}
                    className="w-[50px] h-[50px] object-cover rounded-full"
                    alt="User Avatar"
                  />
                </div>
                <div>
                  <p className="text-white text-lg font-mono">{user.displayName}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatList;
