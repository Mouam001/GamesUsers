import {Link} from "react-router-dom";

export default function LoginView({form, onChange, onSubmit, message}){
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded bg-white shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>

            {message && <div className="mb-4 text-sm text-center text-red-600">{message}</div>}

            <form onSubmit={onSubmit} className="space-y-4">
                <input
                    className="w-full p-2 border rounded"
                    type="text"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    value={form.username}
                    onChange={onChange}
                    required
                />
                <input
                    className="w-full p-2 border rounded"
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Se connecter
                </button>
            </form>
        <div className="mt-4 text-center">
             <p className="rext-sm text-gray-700">
                 Pas encore de compte ? {" "}
                 <Link
                     to="/register"
                         className="text-blue-600 hover:underline font-semibold"
                 >
                     S'enregistrer
                 </Link>
             </p>
         </div>

        </div>
    );
}