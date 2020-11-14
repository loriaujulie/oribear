///////////////////// PAGE PANIER.HTML /////////////////////


//////////// Calcul du prix total 1ère étape //////////  
function addition(nombres) {
    let prixFinal = 0;
    for (let nombre in nombres) {
        prixFinal = prixFinal + nombres[nombre];
    }
    return prixFinal;
}

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
try{
    for (let key in localStorage){
        produitLigne = localStorage.getItem(key);
        produits = JSON.parse(produitLigne);
        if(produitLigne != null && key != "prix"){
            idBear = produits.id;
            colorBear = produits.color;
            recapTableau = document.getElementById("lignes").innerHTML;
            recapTableau=recapTableau.replace("img.jpg", produits.imageUrl);     
            recapTableau=recapTableau.replace("[title]",produits.name);               
            recapTableau=recapTableau.replace("[couleur]",produits.color); 
            recapTableau=recapTableau.replace("[price]",produits.price + " €"); 
            recapTableau=recapTableau.replace("[quantite]",produits.quantite);  
            recapTableau=recapTableau.replace("[idsuppr]", produits.id);  

            ////////// Bouton vider le panier //////////
            document.getElementById("vider").addEventListener("click", function() {
                localStorage.clear();     
                window.location=window.location;
                tableau.innerHTML -= recapTableau; 
                document.getElementById('alertpanier').innerText = "VOTRE PANIER EST VIDE";
            });    

            //////////// Calcul du prix total par article //////////
            totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
            recapTableau=recapTableau.replace("[prixtotal]",parseFloat(totalPrice) + " €");    
            tableau.innerHTML += recapTableau; 
                       
            //////////// Suppression d'un article 2ème étape //////////
            document.getElementById("supprimerarticle_"+idBear).addEventListener("click", function() {
                localStorage.removeItem(idBear+colorBear);
                window.location=window.location;
                
            });

            //////////// Calcul du prix total 2ème étape //////////     
            tab.push(totalPrice)
            
            //////////// définition des produits utilisables dans l'envoi au serveur //////////     
            products.push(produits.id)      
            
            //////// AFFICHAGE PANIER VIDE 2ème étape ///////
            videOuNon = localStorage.length;
        } 
    } 
} catch (error) {
    console.log("une erreur s'est produite" + error);
    window.location.href = "index.html";
}
//////// AFFICHAGE PANIER VIDE 3ème étape ///////
if (videOuNon == 0){
    console.log("mon panier est vide");
    document.getElementById('alertpanier').innerText = "VOTRE PANIER EST VIDE";    
    localStorage.clear();
}

//////////// Calcul du prix total 3ème étape //////////
document.getElementById("prixfinal").innerHTML = "Prix total de votre commande : " + addition(tab) + " €"; 


document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();

    ///// Définition de l'objet contact /////
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    email = document.getElementById("email").value;
    addresse = document.getElementById("address").value;
    ville = document.getElementById("country").value;

    contact = {firstName : prenom, lastName : nom, address : addresse, city : ville, email : email};
    
    informations = {
        contact:contact, 
        products:products};

    console.log(informations);

   const options = {
        method : "POST",
        body : JSON.stringify(informations),
        headers : {
            "Content-Type" : "application/json"
        }
    }
    /////////////////// REQUETE /////////////////// 
    fetch(url + "order", options)
    .then(response=> response.json())
    .then(envoi=> {
        orderId = envoi.orderId;
        localStorage.clear();
        localStorage.setItem('prix', addition(tab));
        localStorage.setItem("numeroDeCommande", orderId);
        window.location = 'commande.html';
    })
    .catch(erreur => alert("Nous rencontrons une erreur :" + erreur))
});