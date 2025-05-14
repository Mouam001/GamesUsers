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
   }catch (err){
       console.warn(err);
       return null;
   }
}