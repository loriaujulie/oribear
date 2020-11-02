///////////////////// PAGE PANIER.HTML /////////////////////

///////////////////////////RECUPERATION DES PRODUITS DANS LE LOCALSTORAGE //////////////////////////
tableau = document.getElementById('tableau'); 

for (let key in localStorage){
    produitLigne = localStorage.getItem(key);
    produits = JSON.parse(produitLigne);
    if(produits != null){
        console.log(produits);
        console.log(produits.imageUrl)
        console.log(produits.name)
        console.log(produits.price)
        console.log(produits.color)
        console.log(produits.id)
        recapTableau = document.getElementById("lignes").innerHTML;
        recapTableau=recapTableau.replace("img.jpg", produits.imageUrl);     
        recapTableau=recapTableau.replace("[title]",produits.name);               
        recapTableau=recapTableau.replace("[couleur]",produits.color); 
        recapTableau=recapTableau.replace("[price]",produits.price); 
        recapTableau=recapTableau.replace("[quantite]",produits.quantite);  
        
        ////////// Bouton vider le panier //////////
        document.getElementById("vider").addEventListener("click", function() {
            localStorage.clear();
            tableau.innerHTML -= recapTableau;             
            affichage = document.getElementById("tableau").innerHTML;
            affichage.innerHTML += "PANIER VIDE";

        });
        // ////////// Bouton supprimer article //////////        
        document.getElementById("supprimerarticle").addEventListener("click", function() {
            localStorage.removeItem("bearOurs_5be9c8541c9d440000665243Black");
            // tableau.innerHTML -= recapTableau; 
            // if (node.parentNode) {
            //     node.parentNode.removeChild(node);
            //   }
        })

        
        //////////// Calcul du prix total par article //////////
        totalPrice = document.getElementById("totalprice").innerHTML;
        totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
        recapTableau=recapTableau.replace("[prixtotal]",parseInt(totalPrice));    
        tableau.innerHTML += recapTableau;
        
       




        //     let prixFinal = 0;
        //     totalPrice = 0;
        // for(let i = 0 ; i < localStorage.length ; i ++){      
        //     prixFinal = document.getElementById("prixfinal").innerHTML;
        //     console.log(typeof(totalPrice))
        // }         
        // prixFinal = ((parseInt(produits.price) * parseInt(produits.quantite)));     
        // prixFinal = parseInt(prixFinal)
        // console.log(prixFinal)
        // console.log(typeof(prixFinal))
        // document.getElementById("prixfinal").innerHTML = prixFinal + "€";  
        // else if (produits = undefined) {
        //     recapTableau = document.getElementById("lignes").innerHTML;
        //     recapTableau=recapTableau.replace("img.jpg", "images/paniervide.jpg");       
        //     tableau.innerHTML += recapTableau;
        // }
        /////////////////////POUR L'ENVOI DU FORMULAIRE ////////////////////////

        // 01/11/2020
        //Requête JSON contenant un objet de contact et un tableau de produits
        // Réponse : retourne l'objet contact, le tableau produits et order_id ---> string

        let supprimer= document.getElementById("supprimerarticle");
            supprimer.addEventListener("click", function(){
            removeItem("bearOurs_" + produits.id + produits.color)
        })
     
     
          // // //////////// calcul du prix total dans le panier //////////

          prixFinal=document.getElementById("price").innerHTML;
          console.log(prixFinal.innerHTML);
  
  
        
                

        // submit.addEventListener('click', function() {
        //     e.preventDefault();
        //     let form = e.target;
        //     fetch(form.action, { method: form.method, body: new FormData(form) })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     return false;
        //     })
        //     .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));         
        
        // Empêcher le form d'être soumis - MDN - A garder
        document.querySelector("form").addEventListener('submit', function(e) {
            e.preventDefault();
            console.log(products)
                name = document.querySelector("#nom").value;
                firstName = document.querySelector("#prenom").value;
                email = document.querySelector("#email").value;
                address = document.querySelector("#address").value;
                country = document.querySelector("#country").value;
    
                contact = {prenom : firstName, nom : name, adresse : email, ville : address, adresseElectronique : country}
                console.log(contact)
            let informations = [products, contact];
            console.log(informations)
            // /* vérification données formulaires*/
            let request = new XMLHttpRequest();
            request.open("POST", url + "order");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(informations));
        
            });

   
    }

};
// //////////// Calcul du prix total par article //////////
// totalPrice = document.getElementById("totalprice").innerHTML;
// totalPrice = parseInt(produits.price) * parseInt(produits.quantite);
// recapTableau=recapTableau.replace("[prixtotal]",parseInt(totalPrice));    
// tableau.innerHTML += recapTableau;


//  // // //////////// calcul du prix total dans le panier //////////
//  let prixFinal = 0;
//  totalPrice = 0;
// for(let i = 0 ; i < localStorage.length ; i ++){      
//  prixFinal = document.getElementById("prixfinal").innerHTML;
//  console.log(typeof(totalPrice))
// }         
// prixFinal = ((parseInt(produits.price) * parseInt(produits.quantite)));     
// prixFinal = parseInt(prixFinal)
// console.log(prixFinal)
// console.log(typeof(prixFinal))
// document.getElementById("prixfinal").innerHTML = prixFinal + "€";  
// // else if (produits = undefined) {
// //     recapTableau = document.getElementById("lignes").innerHTML;
// //     recapTableau=recapTableau.replace("img.jpg", "images/paniervide.jpg");       
// //     tableau.innerHTML += recapTableau;
// // }



   
