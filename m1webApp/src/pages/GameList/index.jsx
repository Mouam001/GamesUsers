import {useEffect, useState} from "react";
import View from "./view.jsx";
import {getGameCover, getTopGames} from "../../services/api.jsx";

export default function GameList() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 25;

    useEffect(() => {
        async function fetchGames() {
            setLoading(true);
            try {
                const topGames = await getTopGames(page, pageSize);
                const gamesWithCovers = await Promise.all(
                    topGames.map(async (game) =>{
                        const cover = await getGameCover(game.id);
                        return {
                            ...game,
                            coverUrl: cover ?.url || null,
                        };
                    })
                );
                setGames(gamesWithCovers);
            } catch (e) {
                console.error("Erreur lors du chargement des jeux", e);
            }
            setLoading(false);
        }
        fetchGames();
    }, [page]);

    const handleNext = () => setPage((prev) => prev + 1);
    const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));

    return (
        <View
            games={games}
            loading={loading}
            page={page}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
        />
    );
}
