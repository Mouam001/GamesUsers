import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/index.jsx";

export default function App(){
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}
