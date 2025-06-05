import {useEffect, useState} from 'react';
import View from "./view.jsx";
import {getTopGames, getGameCover} from "../../services/api";

export default function Home() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            const topGame = await getTopGames();

            const gameEnriched = await Promise.all(
                topGame.slice(0, 10).map(async (game) => {
                    if (game.id) {
                        const cover = await getGameCover(game.id)
                        if (cover && cover.url) {
                            return {
                                     ...game, coverUrl :cover.url,
                        };

                    }
                }
                return { ...game, coverUrl :null};
                })
            );
            setGames(gameEnriched)
            setLoading(false);
        }
        fetchData();
    }, []);

    return <View games={games} loading={loading}/>;

}