fetch(url + "order")
    .then((response) => response.json())
    .then(() => {      
        if (localStorage.length > 0) {
            prixCommande = localStorage.getItem("prix");
            prixCommandeTotal = (JSON.parse(prixCommande) + " €")
            console.log(prixCommandeTotal)    
            document.getElementById("prixtotal").innerHTML += prixCommandeTotal; 

            numeroCommande = localStorage.getItem("numeroDeCommande"); 
            numeroDeLaCommande = (numeroCommande)
            console.log(numeroDeLaCommande);    
            document.getElementById("numerocommande").innerHTML += numeroDeLaCommande;

            /////// RETOUR A LA SELECTION APRES AVOIR PASSE LA COMMANDE ///////
            document.querySelector("a").addEventListener("click", function(){
                localStorage.clear();
                window.location.href = "index.html";
            })
            /////// LOCALSTORAGE VIDE A LA FERMETURE DE LA PAGE ///////
            window.onbeforeunload = function() { 
                localStorage.clear(); 
            } 
        //////// AFFICHAGE SI LE PANIER EST VIDE ///////
        } else if (localStorage.length == 0){
            console.log("mon panier est vide");
            document.getElementById("prixtotal").innerHTML += "0 €";  
            document.getElementById("numerocommande").innerHTML += "Aucun article dans le panier";           
        }
    })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur)); 



