
export default function HomeView({games, loading}){
    if(loading) return <p> Chargements des jeux ...</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Top 10 jeux</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {games.map((game)=>(
                    <div key={game.id} className="border p-2 rounded bg-white text-black">
                        <h2 className="font-semibold text-center mb-2">{game.name}</h2>
                        {game.coverUrl && (
                            <img src={game.coverUrl} alt={game.name} className="w-full rounded shadow"
                            />
                            )}
                    </div>
                ))}

            </div>
        </div>
    );
}