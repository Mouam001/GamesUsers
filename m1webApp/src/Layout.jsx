import {Outlet} from "react-router-dom";
import Navbar from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

export default function Layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <main className="flex-1 p-4 bg-gray-100">
                    <Outlet/>
                </main>
                { <Footer /> }
            </div>

        </>
    );
}