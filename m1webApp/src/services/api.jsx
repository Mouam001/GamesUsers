// SPEC 1
export async function getTopGames() {
    const res = await fetch("https://m1.dysnomia.studio/api/Games/top");
    return await res.json();
}


export async function getGameCover(id) {
    try {
        const res = await fetch(`https://m1.dysnomia.studio/api/Games/covers/${id}`);
        if (!res.ok) {
            console.warn('Cover introuvable avec l\'id : ' + id)
            return null;
        }

        const text = await res.text();
        if (!text) {
            console.warn('Reponse vide');
            return null;
        }

        const data = JSON.parse(text);
        if (!Array.isArray(data) || data.length === 0) {
            console.warn('cover vide pour id : ${id}');
            return null;
        }
        return data[0];
    } catch (err) {
        console.warn(err);
        return null;
    }
}

// SPEC 2
    export async function registerUser(form) {
        const res = await fetch("https://m1.dysnomia.studio/api/Users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        return res;
    }

    export async function loginUser(form){
        const res = await fetch("https://m1.dysnomia.studio/api/Users/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        return res;
    }

    export async function renewToken(token){
        try{
           const res = await fetch("https://m1.dysnomia.studio/api/Users/renewToken", {
               method: "POST",
               headers: {
                   Authorization: `Bearer ${token}`,
               },
           });

           if(!res.ok) return null;
           const newToken = await res.text();
           return newToken;
         } catch (err) {
            console.error("Erreur lors du renouvellement du token : ", err);
            return null;
        }
    }

    export async function fetchMe(token) {
        try{
            const res = await fetch("https://m1.dysnomia.studio/api/Users/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(!res.ok) return null;
            return await res.json();
        } catch (err) {
            console.error("Echec du chargement utilisateur ", err);
            return null;
        }
    }

    // SPEC 3
export async function searchGames(query, token) {
    const res = await fetch(`https://m1.dysnomia.studio/api/Games/search?term=${query}&pageSize=10&page=1`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
        if(!res.ok) throw new Error(" Erreur lors de la recherche");
        return await res.json();
}

export async function getGamesDetail(id, token) {
    const res = await fetch(`https://m1.dysnomia.studio/api/Games/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(!res.ok) throw new Error(" Jeu non trouvé");
    return await res.json();
}


export async function getScreenshots(id, token) {
    const res = await fetch(`https://m1.dysnomia.studio/api/Games/screenshots/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
}