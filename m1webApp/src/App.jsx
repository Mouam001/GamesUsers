import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/index.jsx";
import Layout from "./Layout.jsx";
import Login from "./pages/Login/index.jsx";
import GameDetail from "./pages/GameDetail/index.jsx";
import Search from "./pages/Search/index.jsx";
import Profile from "./pages/profile/index.jsx";

export default function App(){
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/games/:id" element={<GameDetail/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Route>
        </Routes>
    );
}