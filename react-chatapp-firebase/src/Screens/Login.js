import React, { useState } from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { Link, json, useNavigate } from "react-router-dom";
import { AppLogin } from "../Config/FirebaseMethods";

function Login() {
  const [model, setModel] = useState({})

  const fillModel = (key, val) => {
    model[key] = val
    setModel({...model})
 }

  const navigate = useNavigate();

  let LoginUSer = () => {
    AppLogin(model)
      .then((res) => {
        console.log(res)
        let userData  = {...res};
        delete userData.password
        localStorage.setItem("LoginUser" , JSON.stringify({...userData}))
        navigate("/home"); //home kaha ha
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="background_page h-screen ">
        <div className="overlay h-screen flex justify-center items-center">
          <div className="w-[500px] bg-[rgba(0,0,0,0.5)] p-10 rounded-lg">
            <div>
              <h1 className="text-center text-white text-4xl font-extrabold font-mono p-3 shadow-lg shadow-blue-500 my-5">
                Login
              </h1>
            </div>
            <div className="my-3 mt-10">
              <AppInp 
              label="Enter Your Email" 
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              />
            </div>
            <div className="my-3">
              <AppInp 
              label="Enter Password" 
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              type="password"
              />
            </div>
            <div className="my-3">
              <AppBtn label="Login" onClick={LoginUSer}/>
            </div>
            <div className="py-5 flex text-white">
            <p className="text-gray-300 text-lg">Create Your Account.</p>
            <Link to="/signUp" className="font-bold px-2 text-lg text-white hover:text-blue-500">SignUp</Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;