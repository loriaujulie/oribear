
///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
// ///// Définition de la variable URL /////
let url = "http://localhost:3000/api/teddies/";

class produit {
    constructor(imageUrl, name, price, colors) {
    this.imageUrl = imageUrl,
    this.name = name,
    this.price = price,
    this.colors = colors}
};

document.getElementById("ajoutpanier").addEventListener("click", function() {
    let tableau = document.getElementById('tableau');
    // Récupère toutes les key
    for ( let i = 0 ; i < localStorage.length; i++) {
        let recapTableau = document.getElementById("lignes").innerHTML;
        ////////////On convertit la chaîne de caractères en un objet //////////
        let infoProduit = JSON.parse(localStorage.getItem((listeProduit), quantite));
        let ligne = document.createElement('ligne');
        ligne.value = listeProduit[i];
        ligne.innerHTML = listeProduit[i];
        select.appendChild(ligne);
        // let produit = new produit(imageUrl[i], name[i], price[i], colors[i], qtty[i]);
        recapTableau=recapTableau.replace("img.jpg", imageUrl);     
        recapTableau=recapTableau.replace("title",name);
        recapTableau=recapTableau.replace("price",price/100); 
        recapTableau=recapTableau.replace("[lienProduit]", "produit.html" + "?" + [i]["_id"]);   
        
            /////Remplace les données-type de result par les données récupérées, en intégrant cela dans la div contenu /////
            tableau.innerHTML += recapTableau;    
        // }
        //     
        // }
        
    } 
});

let totalPrice = getElementById("totalPrice").innerHTML;
totalPrice = price * quantite;

//creation du bouton pour effacer la ligne du panier
let viderLePanier = document.getElementsByClassName('viderpanier');
for (let i = 0; i < viderLePanier.length; i++) {
    let button = viderLePanier[i]
    button.addEventListener('click', function(event){
    ////// Mise en place d'une confirmation avant l'exécution de la demande //////
    let fermeture = prompt("Etes-vous sûr de vouloir annuler la commande ?");
    if (fermeture == "oui") {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
    } else if(fermeture == "non") {
        alert("Nous sommes soulagés");
    }})};
/* <td><button class="btn btn-danger" type="button">Effacer</button></td> */



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
             