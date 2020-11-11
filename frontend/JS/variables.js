///////////////////// PAGE LISTANT LES VARIABLES /////////////////////

///// Initialisation de la variable url - variable visant à accéder à l'url - accueil.js et produit.js /////
let url = "http://localhost:3000/api/teddies/";
///// Initialisation de la variable result - variable concernant la div d'emplacement des données - accueil.js /////
let result = null;
///// Initialisation de la variable bear - variable permettant d'envisager le remplacement des données dans la page - accueil.js /////
let bear = null;
///// Initialisation de la variable listeProduit -  - produit.js /////
let listeProduit = null;
///// Initialisation de la variable listeProduit -  - produit.js /////
let produit = null;
///// Initialisation de la variable select - liste des options de personnalisation de couleur - produit.js /////
let select = null;
///// Initialisation de la variable options - variable créant la liste des options - produit.js /////
let options = null;
///// Initialisation de la variable moinsOurs - pour réduire la quantité - produit.js /////
let moinsOurs = null;
///// Initialisation de la variable plusOurs - pour augmenter la quantité - produit.js /////
let plusOurs = null;
///// Initialisation de la variable quantite - indique la quantité - produit.js /////
let quantite = null;
///// Initialisation de la variable colorSelect - couleur choisie par l'utilisateur - produit.js  /////
let colorSelect = null;
///// Initialisation de la variable produitLigne - ensemble des données prêtes à être envoyées au lcoalstorage - produit.js /////
let produitLigne = null;
///// Initialisation de la variable - variable permettant d'envisager le remplacement des données dans la page - panier.js  /////
let tableau = null;
///// Initialisation de la variable tableau - variable permettant d'envisager le remplacement des données dans la page - panier.js /////
let recapTableau = null;
///// Initialisation de la variable   /////
let totalPrice = null;
///// Initialisation de la variable   /////
let prixFinal = null;
///// Initialisation de la variable   /////
let name = null;
///// Initialisation de la variable   /////
let firstName = null;
///// Initialisation de la variable   /////
let email = null;
///// Initialisation de la variable   /////
let address = null;
///// Initialisation de la variable   /////
let country = null;
///// AFFICHAGE PANIER VIDE 1ère étape /////
let videOuNon = [];
///// Initialisation du tableau devant contenir le prix total des articles /////
let tab = [];
///// Initialisation du tableau devant contenir les clés des élements présents dans le localStorage /////
let id = [];
///// Initialisation du tableau devant contenir les produits à envoyer au localStorage /////
let products = [];