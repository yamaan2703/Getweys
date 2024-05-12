import React, { useContext, useState } from "react";
import AppInp from "./AppInp";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";
import AppBtn from "./AppBtn";
import { AuthContext } from "../Config/AuthContext";

function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearchUser = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
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

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      
      if (!res.exists()) { 
        await setDoc(doc(db, "chats", combinedId), {messages: []});
        await updateDoc(doc(db, "usersChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp()  
        });
      
        await updateDoc(doc(db, "usersChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp()  
        });
      }
    } catch (error) {
     
      setUser(null)
      setUserName("")
    }
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
            <AppBtn label="Search" onClick={handleSearch} />
          </div>
          <div className="my-1">
            {err && <p>User Not Found</p>}
            {user && (
              <div
                className="flex space-x-3 hover:bg-[rgba(0,0,0,0.9)] p-2"
                onClick={handleSelect}
              >
                <div>
                  <img
                    src={user.photoURL}
                    className="w-[50px] h-[50px] object-cover rounded-full"
                    alt="User Avatar"
                  />
                </div>
                <div>
                  <p className="text-white text-lg font-mono">
                    {user.displayName}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;



