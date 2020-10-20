///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
// ///// Définition de la variable URL /////
let url = "http://localhost:3000/api/teddies/";
let ajoutPanier = document.getElementById("ajoutpanier");

class produit {
    constructor(imageUrl, name, price, colors, qtty) {
    this.imageUrl = imageUrl,
    this.name = name,
    this.price = price,
    this.colors = colors,
    this.qtty = qtty
    }
};

ajoutPanier.addEventListener("click", function() {
    // Récupère toutes les key
    for ( let i = 0 ; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let produit = new produit(imageUrl[i], name[i], price[i], colors[i], qtty[i]);
        // if (produit != null) {
            localStorage.getItem ();
        // }
        // else{
        //     localStorage.getItem ('ajout', keyvalue);
        // }
        
    } 
});

/////////////////////POUR L'ENVOI DU FORMULAIRE ////////////////////////

// Empêcher le form d'être soumis MDN - A garder
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector("#nom").value;
    let firstName = document.querySelector("#prenom").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let country = document.querySelector("#country").value;
        
  });

/* vérification données formulaires*/
let request = new XMLHttpRequest();
request.open("POST", url + "/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.parse(produit));

submit.addEventListener('click', function() {
    e.preventDefault();
    let form = e.target;
    fetch(form.action, { method: form.method, body: new FormData(form) })
    .then(response => response.json())
    .then(json => console.log(json))
    return false;
    })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
             