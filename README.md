# 🎮 Game Users - Projet Front M1 2025

## 🚀 Description
Ce projet est une application web développée en **React + Vite** qui permet aux utilisateurs de :
- Consulter le top des jeux vidéo.
- Rechercher des jeux.
- Consulter les détails d’un jeu (description, screenshots, entreprises associées).
- Gérer leurs comptes (inscription, connexion, déconnexion, suppression).
- Gérer leurs favoris.
- Visualiser les entreprises liées aux jeux.
- Envoyer un message via une page de contact avec **EmailJS**.
- Navigation sécurisée avec gestion de token.

L’API utilisée est disponible ici : [API Game Users](https://m1.dysnomia.studio/swagger/index.html)

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Mouam001/GamesUsers.git
cd game-users
````

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet en développement

```bash
npm run dev
```
## 🔗 Fonctionnalités réalisées

### ✅ Général

* Initialisation avec **Vite + React + TailwindCSS**.
* Routing avec **react-router-dom**.
* Stockage du token et des données utilisateur dans le **Contexte React** + **localStorage**.
* Renouvellement automatique du token avec une expiration simulée.

### ✅ Authentification

* ✅ Inscription
* ✅ Connexion
* ✅ Déconnexion
* ✅ Suppression de compte

### ✅ Gestion des Jeux

* ✅ Page d’accueil : Top 10 jeux (nom + image cover).
* ✅ Page liste des jeux (top 25 avec pagination page suivante / précédente).
* ✅ Recherche de jeux avec pagination.
* ✅ Détails d’un jeu (summary, screenshots, favoris).
* ✅ Gestion des favoris (ajout/suppression).

### ✅ Gestion des Entreprises

* ✅ Depuis la page d’un jeu, affichage des entreprises associées avec :

    * Nom
    * Description
    * Date de création
* ✅ Affichage directement dans la page du jeu (pas besoin de navigation supplémentaire).

### ✅ Page de Contact (via EmailJS)

* Formulaire de contact avec :

    * Prénom
    * Nom
    * Email
    * Téléphone
    * Société
    * Message
* Envoi des mails avec **EmailJS** sans backend.

### ✅ Expérience Utilisateur

* ✅ Page 404 personnalisée si :

    * La route est inconnue
    * L’id d’un jeu ou d’une entreprise est invalide
* ✅ Application responsive (adaptée aux mobiles, tablettes, desktop).

---
## 📄 EmailJS - Configuration pour le Contact
### Installer la librairie EmailJS :

```bash
npm install @emailjs/browser
```
## 🔥 Spécifications fonctionnelles réalisées

| Spécification                               | Statut |
| ------------------------------------------- | ------ |
| Accueil avec Top 10 jeux                    | ✅      |
| Liste complète avec pagination              | ✅      |
| Recherche de jeux avec pagination           | ✅      |
| Détails d’un jeu (summary, screenshots)     | ✅      |
| Favoris (ajout/suppression)                 | ✅      |
| Gestion utilisateur (inscription, login...) | ✅      |
| Page profil (infos + favoris + suppression) | ✅      |
| Affichage des entreprises associées au jeu  | ✅      |
| Page Contact avec EmailJS                   | ✅      |
| Gestion erreurs (404, token expiré...)      | ✅      |
| Responsive (mobile, tablette, desktop)      | ✅      |


## 🧠 Pour aller plus loin (réalisé ✅ ou non ❌)

* ✅ Page 404 personnalisée
* ❌ Mise en cache avancée des images localement (possible à faire avec localStorage ou indexedDB)
* ✅ Linter avec peu ou pas de warnings

## 👤 Auteur
# Mouammar Soulé(Projet M1 Info 2025)

## 📜 Licence
Projet éducatif réalisé dans le cadre du Master 1 Informatique 2025. Non destiné à un usage commercial.
