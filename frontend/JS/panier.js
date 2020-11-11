///////////////////// PAGE PANIER.HTML /////////////////////

tableau = document.getElementById('tableau'); 

//////////// Calcul du prix total 1ère étape //////////  
function addition(nombres) {
    let prixFinal = 0;
    for (let nombre in nombres) {
        prixFinal = prixFinal + nombres[nombre];
    }
    return prixFinal;
}

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
for (let key in localStorage){
    produitLigne = localStorage.getItem(key);
    produits = JSON.parse(produitLigne);
    if(produitLigne != null){
        recapTableau = document.getElementById("lignes").innerHTML;
        recapTableau=recapTableau.replace("img.jpg", produits.imageUrl);     
        recapTableau=recapTableau.replace("[title]",produits.name);               
        recapTableau=recapTableau.replace("[couleur]",produits.color); 
        recapTableau=recapTableau.replace("[price]",produits.price + " €"); 
        recapTableau=recapTableau.replace("[quantite]",produits.quantite);  
        
        //////////// Ajoute tous les ID dans un tableau intitulé id - utile pour supprimer un article //////////     
        id.push(produits.id+produits.color);         
        
        ////////// Bouton vider le panier //////////
        document.getElementById("vider").addEventListener("click", function() {
            localStorage.clear();
            tableau.innerHTML -= recapTableau;             
            affichage = document.getElementById("tableau").innerHTML;
            affichage.innerHTML += "PANIER VIDE";
            // if (produitLigne != id.includes(produits.id)){
               
            // // ( confirm("Le panier est vide, voulez-vous retourner à l'accueil ?" ) ) {
            // //         open("http://127.0.0.1:5500/frontend/index.html")
            // } 
            // else {
            //     window.location.href="panier.html"
            // }
        });    
        
        //////////// Calcul du prix total par article //////////
        totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
        recapTableau=recapTableau.replace("[prixtotal]",parseFloat(totalPrice) + " €");    
        tableau.innerHTML += recapTableau; 
        
        //////////// Calcul du prix total 2ème étape //////////     
        tab.push(totalPrice)
        
        //////////// définition des produits utilisables dans l'envoi au serveur //////////     
        products.push(produits, delete produits.color)
        // products.push(produits.id)

        /////////////////////POUR L'ENVOI DU FORMULAIRE ////////////////////////
        
        
        //////// AFFICHAGE PANIER VIDE 2ème étape ///////
        videOuNon = localStorage.length;
    } 

};
if(id.includes("5be9c8541c9d440000665243Tan")){console.log("Je suis là")}
if(id.includes()){console.log("Absent")}

//////// AFFICHAGE PANIER VIDE 3ème étape ///////
console.log(videOuNon);
if (videOuNon == 0){
    console.log("mon panier est vide")
    document.getElementById('alertpanier').innerText = "VOTRE PANIER EST VIDE"
}

//////////// Calcul du prix total 3ème étape //////////
document.getElementById("prixfinal").innerHTML = "Prix total de votre commande : " + addition(tab) + " €"; 


//////////// Suppression d'un article //////////
document.getElementById("supprimerarticle").addEventListener("click", function() {
    // if(id.includes("5be9c8541c9d440000665243Tan")){console.log("Je suis là")}
    Storage.removeItem("5be9c8541c9d440000665243Tan");
       id.splice(index,1);
   id.forEach(suppr)     
});


 // 01/11/2020
        //Requête JSON contenant un objet de contact et un tableau de produits
        // Réponse : retourne l'objet contact, le tableau produits et order_id ---> string

document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();

    ///// Définition de l'objet contact /////
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    email = document.getElementById("email").value;
    addresse = document.getElementById("address").value;
    ville = document.getElementById("country").value;

    contact = {firstName : prenom, lastName : nom, address : addresse, city : ville, email : email};
    console.log(contact)


//////////////// REGEX //////////////// 
/// email ///    ^ [A-Za-z0-9] (([_ \. \ -]? [A-zA-Z0-9] +) *) @ ([A-Za-z0-9] +) (([\ . \ -]? [a-zA-Z0-9] +) *) \. ([A-Za-z] {2,}) $

/// Nom prénom ville /// [A-Z][a-z]+[- ]



    informations = [contact, products];
    console.log(informations)

    //* Création de la requête *//
    const options= {
        method : "POST",
        body : JSON.stringify(informations),
        headers : {
            "Content-Type" : "application/json"
        }
    }

    fetch(url + "order", options)
    .then(response=> response.json())
    .then(envoi=> console.log(envoi))
    .catch(erreur => alert("Nous rencontrons une erreur :" + erreur))
});
