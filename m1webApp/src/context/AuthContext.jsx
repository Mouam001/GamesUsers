import {createContext, useEffect, useState} from "react";
import {renewToken} from "../services/api.jsx";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem("token"));

    //Persistance dans localstorage
    useEffect(() => {
        if(token){
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    //Renouvellement authomatique après 1h

    useEffect(() => {
        if(!token) return;

        const timeout = setTimeout(async() => {
            const newToken = await renewToken();
            if(newToken){
                setToken(newToken);
            } else {
                setToken(null);
            }
        }, 60 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
            </AuthContext.Provider>
    );
}
