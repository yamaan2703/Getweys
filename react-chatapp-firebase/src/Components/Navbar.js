import React, { useEffect, useState } from "react";
import AppBtn from "./AppBtn";
import { auth } from "../Config/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { AppGet } from "../Config/FirebaseMethods";

function Navbar() {
  const navigate = useNavigate();
  // let currentUser = JSON.parse(localStorage.getItem("LoginUser")) || auth.currentUser 
  // const [userInfo, setUserInfo] = useState([]);

  // const getUserInfo = (userId) => {
  //   AppGet("users", userId)
  //     .then((res) => {
  //       console.log(res , "res");
  //       setUserInfo([...res, userId]); 
        // console.log(userId, res);
      // })
      // .catch((err) => {
        // console.log(err);
        // setUserInfo(null);
      // });
  // };

  // useEffect(() => {
  //   if (currentUser) {
  //     getUserInfo(currentUser.uid); 
  //   } else {
  //   }
    // setUserInfo(null);
  // }, []); 
  // console.log(userInfo , "user info");
  // console.log(currentUser, "Currentuser info");

  const [userInfo, setUserInfo] = useState(null)
  let currentUser = auth.currentUser

  const getUserInfo = (userId) => {
    AppGet("users", userId).then((res) => {
      setUserInfo(res)
      console.log("res",res);
    }).catch((err) => {
      console.log("Error retrieving user info:", err);
    })
  }
  console.log("userInfo", userInfo);
  useEffect(() => {
    if(currentUser){
      getUserInfo(currentUser.uid)
    }else{
      setUserInfo(null)
    }
  }, [])








  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            {userInfo ? (
              <div className="flex items-center space-x-2">
                <img
                  src={
                    userInfo.avatar ||
                    "https://images.unsplash.com/photo-1623018035782-b269248df916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <p className="text-white text-lg font-mono">
                  {userInfo.userName || "Guest"}
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div>
            <AppBtn label="Logout" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



