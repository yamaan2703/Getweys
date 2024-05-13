import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import UpdateProfile from "../Screens/UpdateProfile";
import SetProfile from "../Screens/UpdateProfile";

export default function AppRouter() {
    const { currentUser } = useContext(AuthContext);

    const Protected = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/" />;
        }
        return children;
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/updateprofile" element={<SetProfile />} />
                    <Route
                        path="/home"
                        element={
                            <Protected>
                                <Home />
                            </Protected>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
