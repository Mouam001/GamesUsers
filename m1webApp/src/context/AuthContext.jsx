import {createContext, useEffect, useState} from "react";
import {fetchMe, renewToken} from "../services/api.jsx";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    //Persistance dans localstorage
    useEffect(() => {
        if(token){
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    // Charger le user à partir du token
    useEffect(() => {
        const loadUser = async () => {
            if(!token){
                setUser(null);
                return;
            }

            const userData = await fetchMe(token);
            if(userData){
                setUser(userData);
            } else {
                setToken(null);
                setUser(null);
            }
        };
        loadUser();
    }, [token]);

    //Renouvellement authomatique toutes les 1h
    useEffect(() => {
        if(!token) return;

        const timeout = setTimeout(async() => {
            const newToken = await renewToken();
            if(newToken){
                setToken(newToken);
            } else {
                setToken(null);
                setUser(null);
            }
        }, 60 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
            </AuthContext.Provider>
    );
}
