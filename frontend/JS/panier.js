

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
///// Définition de la variable URL /////
// let url = "http://localhost:3000/api/teddies/";

class produit {
    constructor(imageUrl, name, price, colors, quantite) {
    this._imageUrl = imageUrl,
    this._name = name,
    this._price = price,
    this._colors = colors,
    this._quantite = quantite}
};

////////// Bouton vider le panier //////////
document.getElementById("vider").addEventListener("click", function() {
    localStorage.clear();
});


//////////// Essai avec affichage qui fonctionne ////////////
// localStorage.getItem("nounours");
// let recapTableau = document.getElementById("name").innerHTML;
// document.getElementById("name").innerHTML = localStorage.getItem("nounours")
// alert(localStorage.getItem("nounours"))


// for (i = 0; i < localStorage.length; i++) {
//     x = localStorage.key(i);
//     document.getElementById("name").innerHTML += x;
//   }

let tableau = document.getElementById('tableau');    
const liste = new produit();
let contenu = localStorage.getItem("ours");


let produitLigne = localStorage.getItem("bearOurs");
    // Récupère toutes les key
for ( let i = 0 ; i < localStorage.length; i++) {
    let produits = JSON.parse(produitLigne);
    console.log(produits.imageUrl)
    console.log(produits.name)
    console.log(produits.price)
    console.log(produits.color)
    let recapTableau = document.getElementById("lignes").innerHTML;
    document.getElementById("lignes").innerHTML = localStorage.getItem("bearOurs")
    console.log(localStorage)  
    
    recapTableau=recapTableau.replace("img.jpg", produits.imageUrl);     
    recapTableau=recapTableau.replace("title",produits.name);
    recapTableau=recapTableau.replace("price",produits.price/100); 
    recapTableau=recapTableau.replace("[lienProduit]", "produit.html" + "?" + [i]["_id"]);   
    
        /////Remplace les données-type de result par les données récupérées, en intégrant cela dans la div contenu /////
        // tableau.innerHTML += recapTableau;    
    // }
    //     
    // }
    ////////// Calcul du prix total par article //////////
    let totalPrice = getElementById("totalPrice").innerHTML;
    totalPrice = price * quantite;
    ////////// calcul du prix total dans le panier //////////
};


/* <td><button class="btn btn-danger" type="button">Effacer</button></td> */



/////////////////////POUR L'ENVOI DU FORMULAIRE ////////////////////////

// Empêcher le form d'être soumis - MDN - A garder
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector("#nom").value;
    let firstName = document.querySelector("#prenom").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let country = document.querySelector("#country").value;
        
  });

/* vérification données formulaires*/
// let request = new XMLHttpRequest();
// request.open("POST", url + "/order");
// request.setRequestHeader("Content-Type", "application/json");
// request.send(JSON.parse(produit));

// submit.addEventListener('click', function() {
//     e.preventDefault();
//     let form = e.target;
//     fetch(form.action, { method: form.method, body: new FormData(form) })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     return false;
//     })
//     .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
             