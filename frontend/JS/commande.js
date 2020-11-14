

fetch(url + "order")
    .then((response) => response.json())
    .then(() => {      
        prixCommande = localStorage.getItem("prix");
        prixCommandeTotal = (JSON.parse(prixCommande) + " €")
        console.log(prixCommandeTotal)    
        document.getElementById("prixtotal").innerHTML += prixCommandeTotal;      
        numeroCommande = (JSON.parse(order_id))
        console.log(numeroCommande);    
        document.getElementById("numerocommande").innerHTML += numeroCommande;
    })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur)); 



