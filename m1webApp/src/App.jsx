import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/index.jsx";
import Layout from "./Layout.jsx";
import Login from "./pages/Login/index.jsx";
import GameDetail from "./pages/GameDetail/index.jsx";
import Search from "./pages/Search/index.jsx";
import Profile from "./pages/profile/index.jsx";
import PrivateRoute from "./components/Auth/PrivateRoute.jsx";
import GameList from "./pages/GameList/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

export default function App(){
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="/games/:id" element={
                    <PrivateRoute>
                        <GameDetail/>
                    </PrivateRoute>
                }/>

                <Route path="/search" element={
                    <PrivateRoute>
                        <Search/>
                    </PrivateRoute>
                }/>

                <Route path="/profile" element={
                    <PrivateRoute>
                        <Profile/>
                    </PrivateRoute>}/>

                <Route path="/games" element={
                    <PrivateRoute>
                        <GameList/>
                    </PrivateRoute>
                }/>

                {/* Gestion coté client 404*/}
                <Route path="*" element={<NotFound/>}/>

            </Route>
        </Routes>
    );
}