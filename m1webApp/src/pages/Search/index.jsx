import {useState} from "react";
import View from "./view.jsx";
import {searchGames} from "../../services/api";
import useToken from "../../hooks/useToken.js";

export default function Search( ){
    const [query, setQuery] = useState("");
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = useToken();

    const handleSearch = async (e) =>{
        e.preventDefault();
        if(!token){
            alert("Veuillez vous connecter!");
            return;
        }
        setLoading(true);
        try{
            const result = await searchGames(query, token);
            setGames(result);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    };

    return (
        <View
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        games={games}
        loading={loading}
        />
    );

}