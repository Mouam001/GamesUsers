import {useEffect, useState} from "react";
import {getUserProfile, deleteAccount, getGameCover} from "../../services/api.jsx";
import {useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken.js";
import View from "./view.jsx";

export default function Profile() {
    const token = useToken();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try{
                const userData = await getUserProfile(token);
                setUser(userData);

                const _favorites = await Promise.all(
                    userData.favorites.map(async (game) =>{
                        const cover = await getGameCover(game.id);
                        return {
                            ...game,
                            coverUrl: cover.url || null
                        };
                    })
                );
                setFavorites(_favorites);
            }catch(err){
                console.error(err);
            }
            setLoading(false);
        }
        if(token){
            fetchData();
        }
    }, [token]);

    const handleDeleteAccount = async () => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer votre compte ?");
        if(!confirm) return;

        try{
            await deleteAccount(token);
            localStorage.removeItem("token");
            navigate("/login");
            alert("Compte supprimer avec succès");
        }catch(err){
            alert("Erreur lors de la supression : " + err.message);
        }
    };

    return (
        <View
            user={user}
            favorites={favorites}
            loading={loading}
            onDeleteAccount={handleDeleteAccount}
            />
    );
}