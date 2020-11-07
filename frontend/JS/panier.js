///////////////////// PAGE PANIER.HTML /////////////////////

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
tableau = document.getElementById('tableau'); 

for (let key in localStorage){
    produitLigne = localStorage.getItem(key);
    produits = JSON.parse(produitLigne);
    if(produitLigne != null){
        recapTableau = document.getElementById("lignes").innerHTML;
        recapTableau=recapTableau.replace("img.jpg", produits.imageUrl);     
        recapTableau=recapTableau.replace("[title]",produits.name);               
        // recapTableau=recapTableau.replace("[couleur]",produits.color); 
        recapTableau=recapTableau.replace("[price]",produits.price); 
        recapTableau=recapTableau.replace("[quantite]",produits.quantite);  
        
        ////////// Bouton vider le panier //////////
        document.getElementById("vider").addEventListener("click", function() {
            localStorage.clear();
            tableau.innerHTML -= recapTableau;             
            affichage = document.getElementById("tableau").innerHTML;
            affichage.innerHTML += "PANIER VIDE";
            if ( confirm("Le panier est vide, voulez-vous retourner à l'accueil ?" ) ) {
                    open("http://127.0.0.1:5500/frontend/index.html")
            } 
        });      
  
        //////////// Calcul du prix total par article //////////
        totalPrice = document.getElementById("totalprice").innerHTML;
        totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
        recapTableau=recapTableau.replace("[prixtotal]",parseInt(totalPrice));    
        tableau.innerHTML += recapTableau;
        
        //////////// Calcul du prix total par article //////////
        let prixFinal = document.getElementById("prixfinal").innerHTML;
        function addition(nombres) {
            prixFinal = 0;
            for (let nombre in nombres) {
                prixFinal = prixFinal + nombres[nombre];
            }
            return prixFinal;
            
        }
        console.log(prixFinal)
        document.getElementById("prixfinal").innerHTML = prixFinal + "€"; 
        

        
        /////////////////////POUR L'ENVOI DU FORMULAIRE ////////////////////////

        // 01/11/2020
        //Requête JSON contenant un objet de contact et un tableau de produits
        // Réponse : retourne l'objet contact, le tableau produits et order_id ---> string

        nom = document.getElementById("nom").value;
        prenom = document.getElementById("prenom").value;
        email = document.getElementById("email").value;
        addresse = document.getElementById("address").value;
        ville = document.getElementById("country").value;

        contact = {lastName : nom, firstName : prenom, address : addresse, city : ville, email : email}
        console.log(contact)

        let products = [produits.id]
        
        let informations = [products, contact];
        console.log(informations)

        document.getElementById("submit").addEventListener('submit', function(e) {
            e.preventDefault();
            console.log(products)
            ///---> si problème, peut-être lié au fait que les objets sont placés dans un array ////

            //* Création de la requête *//
            const options= {
                method : "POST",
                Body : JSON.stringify(informations),
                headers : {
                    "Content-Type" : "application/json"
                }
            }

            fetch(url + "order", options)
            .then(response=> response.json())
            .then(envoi=> console.log(envoi))
            .catch(erreur => alert("Nous rencontrons une erreur :" + erreur))
        });

    }

};


