import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/account", "Mon compte", "/pages/account.html"),
    new Route("/editPassword", "Changement du mot de passe", "/pages/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";