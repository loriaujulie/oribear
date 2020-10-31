///////////////////// PAGE PANIER.HTML /////////////////////

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
///// Définition de la variable URL /////
// let url = "http://localhost:3000/api/teddies/";


//////////// Essai avec affichage qui fonctionne ////////////
// localStorage.getItem("nounours");
// let recapTableau = document.getElementById("name").innerHTML;
// document.getElementById("name").innerHTML = localStorage.getItem("nounours")
// alert(localStorage.getItem("nounours"))


// for (i = 0; i < localStorage.length; i++) {
//     x = localStorage.key(i);
//     document.getElementById("name").innerHTML += x;
//   }

 tableau = document.getElementById('tableau');    
// const liste = new produit();
//  contenu = localStorage.getItem("ours");


//  );
    // Récupère toutes les key
// for ( let i = 0 ; i < localStorage.length; i++) {
for (let key in localStorage){
    // console.log(key)
    produitLigne = localStorage.getItem(key);
    produits = JSON.parse(produitLigne);
    if(produits != null){
        console.log(produits);
        console.log(produits.imageUrl)
        console.log(produits.name)
        console.log(produits.price)
        console.log(produits.color)
        recapTableau = document.getElementById("lignes").innerHTML;
        // document.getElementById("lignes").innerHTML = localStorage.getItem("bearOurs");
        // console.log(localStorage)  
        recapTableau=recapTableau.replace("img.jpg", produits.imageUrl);     
        recapTableau=recapTableau.replace("[title]",produits.name);               
        recapTableau=recapTableau.replace("[couleur]",produits.color); 
        recapTableau=recapTableau.replace("[price]",produits.price); 
        recapTableau=recapTableau.replace("[quantite]",produits.quantite);  
        //     ////////// Calcul du prix total par article //////////
        let totalPrice = document.getElementById("totalprice").innerHTML;
        totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
        recapTableau=recapTableau.replace("[prixtotal]",parseInt(totalPrice));  
        //     ////////// calcul du prix total dans le panier //////////
        
// recapTableau=recapTableau.replace("[lienProduit]", "produit.html" + "?" + [i]["_id"]); 

        /////Remplace les données-type de result par les données récupérées, en intégrant cela dans la div contenu /////
        tableau.innerHTML += recapTableau;    
    }
    // }
    //     
    // }

};


////////// Bouton vider le panier //////////
document.getElementById("vider").addEventListener("click", function() {
    localStorage.clear();
});


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

// /* vérification données formulaires*/
// // let request = new XMLHttpRequest();
// // request.open("POST", url + "/order");
// // request.setRequestHeader("Content-Type", "application/json");
// // request.send(JSON.parse(produit));

// // submit.addEventListener('click', function() {
// //     e.preventDefault();
// //     let form = e.target;
// //     fetch(form.action, { method: form.method, body: new FormData(form) })
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     return false;
// //     })
// //     .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
             