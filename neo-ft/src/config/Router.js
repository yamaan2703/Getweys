import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "../components/AppNavbar"
import Explore from "../pages/Explore";
import Status from "../pages/Status";
import Service from "../pages/Service";
import Launchpad from "../pages/Launchpad";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<Explore />}/>
            <Route path="/status" element={<Status />}/>
            <Route path="/service" element={<Service />}/>
            <Route path="/launchpad" element={<Launchpad />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}