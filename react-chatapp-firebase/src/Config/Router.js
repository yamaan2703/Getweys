import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";

export default function AppRouter() {
    return (
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />}/>
         </Routes>
        </BrowserRouter>
        </>
    )
}