import React, { useState } from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { Link, useNavigate } from "react-router-dom";
import { AppSignUp } from "../Config/FirebaseMethods";

export default function SignUp() {
  const [model, setModel] = useState({});
  const [image, setImage] = useState(null); // State to store image file

  const fillModel = (key, val) => {
    setModel((prevModel) => ({
      ...prevModel,
      [key]: val,
    }));
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      const imageFile = e.target.files[0];
      setImage(imageFile);
    }
  };

  const navigate = useNavigate();

  let SignUpUser = () => {
    AppSignUp(model, image)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="background_page h-screen">
        <div className="overlay h-screen flex justify-center items-center">
          <div className="w-[500px] bg-[rgba(0,0,0,0.5)] py-5 px-12 rounded-lg">
            <div>
              <h1 className="text-center text-white text-4xl font-extrabold font-mono p-3 shadow-lg shadow-blue-500 my-5">
                SignUp
              </h1>
            </div>
            <div className="my-3 flex justify-center items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
                id="uploadImage"
              />
              <label htmlFor="uploadImage" className="cursor-pointer">
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="w-[100px] h-[100px] object-cover rounded-full"
                  alt="User"
                />
              </label>
            </div>
            <div className="text-center text-white">
              <p>Upload Image</p>
            </div>
            <div className="my-3">
              <AppInp
                value={model.userName}
                onChange={(e) => fillModel("userName", e.target.value)}
                label="Enter Your Name"
              />
            </div>
            <div className="my-3">
              <AppInp
                value={model.email}
                onChange={(e) => fillModel("email", e.target.value)}
                label="Enter Your Email"
              />
            </div>
            <div className="my-3">
              <AppInp
                value={model.password}
                onChange={(e) => fillModel("password", e.target.value)}
                label="Enter Your Password"
                type="password"
              />
            </div>
            <div className="my-3">
              <AppBtn label="SignUp" onClick={SignUpUser} />
            </div>
            <div className="py-5 flex text-white">
              <p className="text-gray-300 text-lg">
                I have Already an Account.
              </p>
              <Link
                to="/"
                className="font-bold px-2 text-lg text-white hover:text-blue-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
