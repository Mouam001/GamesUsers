import {Navigate} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {useEffect} from "react";

export default function PrivateRoute({ children }) {
    const token = useToken();

    useEffect(() => {
        if(!token){
            alert("Session expirée, veuillez vous reconnecter")
        }
    }, [token]);

    if(!token){

        return <Navigate to="/login" replace />;
    }


    return children;
}