

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
///// Définition de la variable URL /////
// let url = "http://localhost:3000/api/teddies/";

// class produit {
//     constructor(imageUrl, name, price, colors) {
//     this.imageUrl = imageUrl,
//     this.name = name,
//     this.price = price,
//     this.colors = colors}
// };
// fetch(url)
// //////Quand la requête aboutit//////
//     .then((response)=> response.json())
//     //////Alors il exécutera la fonction suivante //////
//     .then((o)=>{ 
    let tableau = document.getElementById('tableau');
    // Récupère toutes les key
    for ( let i = 0 ; i < localStorage.length; i++) {
        console.log(localStorage)
        let recapTableau = document.getElementById("lignes").innerHTML;
        listeProduit = [o.imageUrl,o.name,o.price/100];
        ////////////On convertit la chaîne de caractères en un objet //////////
        localStorage.getItem(JSON.parse(listeProduit, parseInt(quantite)));
        // let ligne = document.createElement('ligne');
        // ligne.value = listeProduit[i];
        // ligne.innerHTML = listeProduit[i];
        // select.appendChild(ligne);
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
        ////////// Calcul du prix total par article //////////
        let totalPrice = getElementById("totalPrice").innerHTML;
        totalPrice = price * quantite;
        ////////// calcul du prix total dans le panier //////////
        
        ////////// Bouton vider le panier //////////
        document.getElementById("supprimerarticle").addEventListener("click", function() {
            localStorage.removeItem();
            });

        ////////// Bouton vider le panier //////////
        document.getElementById("vider").addEventListener("click", function() {
            localStorage.clear();
            //// REFLECHIR AU RENVOI A LA PAGE D'ACCUEIL ////
            window.location = "http://127.0.0.1:5500/frontend/index.html";
            });
        document.getElementById("selection").addEventListener("click", function() {
        })};
    // }});


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
             