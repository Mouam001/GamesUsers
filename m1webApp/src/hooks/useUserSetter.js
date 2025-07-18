import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function useUserSetter() {
    const {setUser} = useContext(AuthContext);
    return setUser;
}

