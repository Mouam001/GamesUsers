import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function useTokenSetter() {
    const {setToken} = useContext(AuthContext);
    return setToken;
}