import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Screen/Login";
import SignUp from "../Screen/SignUp";
import Home from "../Screen/Home";

export default function AppRouter () {
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