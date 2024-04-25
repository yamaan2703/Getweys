import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from '../components/AppNavbar'
import Home from "../pages/Home";
import AppFooter from "../components/AppFooter";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <AppNavbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <AppFooter />
        </BrowserRouter>
        </>
    )
}