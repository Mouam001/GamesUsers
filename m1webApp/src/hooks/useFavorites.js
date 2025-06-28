import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";
import {addFavorite, removeFavorite} from "../services/api.jsx";

export default function useFavorites() {
    const {token} = useContext(AuthContext);

    const add = async (gameId) => {
        if(!token)  throw new Error(" Pas de token");
        return await addFavorite(gameId, token);
    };

    const remove = async (gameId) => {
        if(!token)  throw new Error(" Pas de token");
        return await removeFavorite(gameId, token);
    };

    return {add, remove};
}