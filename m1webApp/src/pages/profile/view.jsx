import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export default function ProfileView({user, favorites, loading, onDeleteAccount}) {
    const {t} = useTranslation();

    if (loading) return <p className="text-center mt-10">{t("loading")}</p>

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">{t('profile')}</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold ">{user.name}</h2>

            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{t("favorites")}</h2>
                {favorites.length ===0 ? (
                    <p>{t("no_favorites")}</p>
                    ):(
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {favorites.map((game) => (
                                <Link
                                key={game.id}
                                to={`/games/${game.id}`}
                                className="border p-2 rounded bg-white">
                                <h3 className="font-semibold text-center mb-2">{game.name}</h3>
                            {game.coverUrl ? (
                                <img src={game.coverUrl}
                                     alt={game.name}
                                     className="w-full rounded shadow"/>
                            ):(
                                <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                                    <span>{t("no_image")}</span>
                                </div>
                            )}
                            </Link>
                    ))}
            </div>
            )}
        </div>

        <div className="mt-8">
            <button
                onClick={onDeleteAccount}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                {t("delete_account")}
            </button>
        </div>
        </div>
    );
}