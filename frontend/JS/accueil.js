// // // /*ACCUEIL*/
//////////////// Requête visant à récupérer les données et les intégrer dans le DOM ////////////
// ///// Définition de la variable URL /////
let url = "http://localhost:3000/api/teddies/";
/////Requête à l'url /////
fetch(url)
/////Promesse qui se resoud si accès aux données /////
    .then((response) => response.json())
    ///// Autre promesse qui se resoud si accès aux données /////
    .then((o) => { 
        let result = document.getElementById('result');
        ////// la fonction s'éxecutera pour chaque donnée du tableau //////
        for (let i = 0; i < o.length; i++){       
            ////// Nécessaire de créer la variable ici pour qu'elle s'applique à chaque donnée du tableau //////     
            let bear = document.getElementById("contenu").innerHTML;
            ///// Chaque emplacement est remplacé par celui contenu dans l'API /////
            bear=bear.replace("img.jpg",o[i].imageUrl);     
            bear=bear.replace("[title]",o[i].name);
            bear=bear.replace("[description]",o[i].description); 
            bear=bear.replace("[lienProduit]", "produit.html" + "?" + o[i]["_id"]);   
            /////Remplace les données-type de result par les données récupérées, en intégrant cela dans la div contenu /////
            result.innerHTML += bear;                    
        } 
    }) 
    //////Gestion de l'erreur//////
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
             




