import React, { useContext, useEffect, useState } from "react";
import AppBtn from "./AppBtn";
import { signOut } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";
import { AuthContext } from "../Config/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const {currentUser} = useContext(AuthContext)  
  const navigate = useNavigate()

  return (
    <div className="navbar p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            
              <div className="flex items-center space-x-2">
                <img
                  src={currentUser.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <p className="text-white text-lg font-mono">
                {currentUser.displayName}
                </p>
              </div>
            
          </div>
          <div>
            <AppBtn 
            label="Logout" 
            onClick={() => signOut(auth)}
            />
          </div>
        </div>
        <div className="mt-1">
          <AppBtn 
          label="Update Profile"
          onClick={() => navigate("/updateprofile")}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;



