import {useEffect, useState} from "react";
import View from "./view.jsx";
import {getScreenshots, getGamesDetail, removeFavorite, addFavorite} from "../../services/api";
import {useParams} from "react-router";
import useToken from "../../hooks/useToken.js";

export default function GameDetail() {
    const {id} = useParams();
    const [game, setGame] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const token = useToken();

    useEffect(() => {
        async function fetchData() {
            try{
                const gameDetail = await getGamesDetail(id, token);
                const screenshots = await getScreenshots(id, token);
                setGame(gameDetail);
                setScreenshots(screenshots);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        if(token) {
            fetchData();
        }
    }, [id, token]);

    const handleToggleFavorite = async() => {
        try{
            if(isFavorite) {
                await removeFavorite(id, token);
                setIsFavorite(false);
            } else {
                await addFavorite(id, token);
                setIsFavorite(true);
            }
        }catch(error){
            alert(error.message);
        }
    };

    return( <View
        game={game}
        screenshots={screenshots}
        loading={loading}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
    />
    );
}