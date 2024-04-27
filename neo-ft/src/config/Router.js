import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "../components/AppNavbar"
import Explore from "../pages/Explore";
import Status from "../pages/Status";
import Service from "../pages/Service";
import Launchpad from "../pages/Launchpad";
import AppFooter from "../components/AppFooter";
import Service1 from "../pages/Service1";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<Explore />}/>
            <Route path="/status" element={<Status />}/>
            <Route path="/service1" element={<Service1 />}/>
            <Route path="/launchpad" element={<Launchpad />}/>
        </Routes>
        {/* <AppFooter /> */}
        </BrowserRouter>
        </>
    )
}