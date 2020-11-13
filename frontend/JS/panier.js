///////////////////// PAGE PANIER.HTML /////////////////////


//////////// Calcul du prix total 1ère étape //////////  
function addition(nombres) {
    let prixFinal = 0;
    for (let nombre in nombres) {
        prixFinal = prixFinal + nombres[nombre];
    }
    return prixFinal;
}

function suppArticle() {
    localStorage.removeItem();
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
            document.getElementById('alertpanier').innerText = "VOTRE PANIER EST VIDE"       
        });    

        //////////// Suppression d'un article //////////
        let suppButton = document.getElementById("supprimerarticle").key;
        document.getElementById("supprimerarticle").addEventListener("click", function(suppArticle) {
            suppArticle.splice(key)
            tableau.innerHTML -= recapTableau;
            //     id.splice(index,1);
        // id.forEach(suppr)     
        });


        
        //////////// Calcul du prix total par article //////////
        totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
        recapTableau=recapTableau.replace("[prixtotal]",parseFloat(totalPrice) + " €");    
        tableau.innerHTML += recapTableau; 
        
        //////////// Calcul du prix total 2ème étape //////////     
        tab.push(totalPrice)
        
        //////////// définition des produits utilisables dans l'envoi au serveur //////////     
        // products.push(produits, delete produits.color)
        products.push(produits.id)      
        
        //////// AFFICHAGE PANIER VIDE 2ème étape ///////
        videOuNon = localStorage.length;
    } 

};

//////// AFFICHAGE PANIER VIDE 3ème étape ///////
console.log(videOuNon);
if (videOuNon == 0){
    console.log("mon panier est vide")
    document.getElementById('alertpanier').innerText = "VOTRE PANIER EST VIDE"
}

//////////// Calcul du prix total 3ème étape //////////
document.getElementById("prixfinal").innerHTML = "Prix total de votre commande : " + addition(tab) + " €"; 


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
    
    // informations = [contact, products];

    console.log(contact, products)

    console.log(contact)

    // localStorage.setItem("numeroDeCommande", order_id);
    localStorage.setItem('prix', addition(tab));
    window.location = 'commande.html';


    /////////////////// REQUETE /////////////////// 
    fetch(url + "order")
    const options = {
        method : "POST",
        body : JSON.stringify(contact, products),
        headers : {
            "Content-Type" : "application/json"
        }
    }
    .then(response=> response.json())
    .then(envoi=> console.log(envoi))
    .catch(erreur => alert("Nous rencontrons une erreur :" + erreur))
});
