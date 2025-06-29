import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'fr',
    fallbackLng: 'fr',
    debug: false,
    resources: {
        fr: {
            translation: {
                "change-language": "Changer de langue",
                "footer-title": "Pied de page",
                "logger": "Se connecter",
                "register": "S'enregistrer",
                "top_10_games": "Les 10 Meilleurs jeux",
                "no_account_yet": "Pas encore de compte",
                "pwd": "Mot de Passe",
                "pwd_confirmed": "Confirmation du mot de passe",
                "user": "Nom d'Utilisateur",
                "search_games": "Rechercher des jeux",
                "search_placeholder": "Entrez le nom du jeu",
                "search": "Rechercher",
                "loading": "Chargement...",
                "game_not_found": "Jeu non trouvé",
                "no_description": "Aucune description disponible.",
                "screenshots": "Captures d'écran",
                "no_mage": "pas d'image",
                "add_favorite": "Ajouter aux favoris",
                "remove_favorite": "Retirer des favoris",
                "profile": "Profile",
                "username": "Nom d'utilisateur",
                "favorites": "Favoris",
                "no_favorites": "Aucun jeu dans vos favoris",
                "delete_account": "Supprimer le compte",
                "no_image": "Pas d'image disponible",
                "menu": {
                    "login": "Connexion",
                    "home": "Accueil",
                    "contact": "Contact",
                    "logout": "Déconnexion"

                }
            }
        }
    }
});

export default i18n;
