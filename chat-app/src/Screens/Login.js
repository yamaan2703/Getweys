import React, { useState } from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";


function Login() {
  const [err, setErr] =  useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e)  => {
    e.preventDefault()
    const email = e.target[0].value
      const password = e.target[1].value

      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/home")
        
      } catch (error) {
        setErr(err)
      }
  }
  
  return (
    <>
      <div className="background_page h-screen ">
        <div className="overlay h-screen flex justify-center items-center">
          <div className="w-[500px] bg-[rgba(0,0,0,0.9)] p-10 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="text-center text-white text-4xl font-extrabold font-mono p-3 shadow-lg shadow-gray-500 my-5">
                Login
              </h1>
            </div>
            <div className="my-3 mt-10">
              <AppInp 
              label="Enter Your Email" 
              />
            </div>
            <div className="my-3">
              <AppInp 
              label="Enter Password" 
              type="password"
              />
            </div>
            <div className="my-3">
              <AppBtn label="Login" 
              />
            </div>
            <div className="py-5 flex text-white">
            <p className="text-gray-300 text-lg">Create Your Account.</p>
            <Link to="/signUp" className="font-bold px-2 text-lg text-white hover:text-blue-500">SignUp</Link>
          </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;