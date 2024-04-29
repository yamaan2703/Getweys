import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "../components/AppNavbar"
import Explore from "../pages/Explore";
import Status from "../pages/Status";
// import Service from "../pages/Service";
import Launchpad from "../pages/Launchpad";
import AppFooter from "../components/AppFooter";
import Service1 from "../pages/Service1";
import Service2 from "../pages/Service2";
import Service3 from "../pages/Service3";
import Service4 from "../pages/Service4";
import Service5 from "../pages/Service5";
import Service6 from "../pages/Service6";
import Service7 from "../pages/Service7";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<Explore />}/>
            <Route path="/status" element={<Status />}/>
            <Route path="/service1" element={<Service1 />}/>
            <Route path="/service2" element={<Service2 />}/>
            <Route path="/service3" element={<Service3 />}/>
            <Route path="/service4" element={<Service4 />}/>
            <Route path="/service5" element={<Service5 />}/>
            <Route path="/service6" element={<Service6 />}/>
            <Route path="/service7" element={<Service7 />}/>
            <Route path="/launchpad" element={<Launchpad />}/>
        </Routes>
        {/* <AppFooter /> */}
        </BrowserRouter>
        </>
    )
}