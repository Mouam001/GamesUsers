import {Outlet} from "react-router-dom";
import Navbar from "./components/Header/index.jsx";
//import Footer from "./components/Footer";
//import Header from "./components/Header";

export default function Layout() {
    return (
        <>
            <Navbar/>
            <main className="p-4 min-h-screen bg-gray-100">
                <Outlet/>
                {/* <Footer /> */}
            </main>
        </>
    );
}