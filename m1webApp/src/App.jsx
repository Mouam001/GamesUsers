import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/index.jsx";
import Layout from "./Layout.jsx";

export default function App(){
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
            </Route>
        </Routes>
    );
}
