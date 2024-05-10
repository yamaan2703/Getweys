import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Routes>
             <Route path="/" element={<Login />}/>
             <Route path="/signup" element={<SignUp />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}