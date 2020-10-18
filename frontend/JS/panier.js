///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
let ajoutPanier = document.getElementById("ajoutpanier");
class produit {
    constructor(imageUrl, name, price, colors, qtty) {
    this.imageUrl = imageUrl,
    this.name = name,
    this.price = price,
    this.colors = colors,
    this.stty = qtty
    }
};
ajoutPanier.addEventListener("click", function() {
    let produit = new produit(imageUrl[i], name[i], price[i], colors[i], qtty[i]);
        // if (produit != null) {
            localStorage.getItem ();
        // }
        // else{
        //     localStorage.getItem ('ajout', keyvalue);
        // }
});

/////////////////////POUR L'ENVOI DU FORMULAIRE ////////////////////////


/* vérification données formulaires*/
let request = new XMLHttpRequest();
request.open("POST", url + "/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(jsonBody));

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
      e.preventDefault();

      let form = e.target;

      fetch(form.action, { method: form.method, body: new FormData(form) })
        .then(response => response.json())
        .then(json => console.log(json));

      return false;
    });
  });
             