// // // /*ACCUEIL*/
// function recupBisounours (){
//     let url  = "http://localhost:3000/api/teddies";
//     // création de la requête ajax
//     let request = new XMLHttpRequest()
//     request.open('GET', url)
//     request.onload = function () {
//         var reponse = JSON.parse(request.responseText);
//         if (request.readyState == 4 && request.status == "200") {
//             $('#result').html('');
// //initialisation de la variable i + création de la boucle
//                 for (let i = 0; i < reponse.length ; i ++){
//                     //Si la requête nous retourne le nom
//                     if (reponse[i]["name"]){
//                         //création de la variable bear : récupère l'id "contenu" du document en vu de remplacer
//                         let bear = document.getElementById("contenu").innerHTML;
//                         //dans #contenu, la class URL sera remplacée par le retour de imageUrl depuis la requête à l'url définie
//                         bear=bear.replace("img.jpeg",reponse[i]["imageUrl"]);
//                         //dans #contenu, la class URL sera remplacée par le retour de name depuis la requête à l'url définie 
//                         bear=bear.replace("[title]",reponse[i]["name"]);
//                         //dans #contenu, la class URL sera remplacée par le retour de description depuis la requête à l'url définie
//                         bear=bear.replace("[description]",reponse[i]["description"]);
//                         //Le lien sera celui de la page produit associée à l'id de l'ours
//                         bear=bear.replace("[lienProduit]", "produit.html" + "?" + reponse[i]["_id"]);                                      
//                         //le contenu de la variable bear se placera dans la div ayant l'id result
//                         $('#result').append(bear);
//                     }   
//             }
//         } else {
//             console.error(reponse);
//         }
//     }
//     request.send(null);
// };


//////////// A CONTINUER POUR SUPPRIMER JQUERY ET ENVISAGER LA CREATION DE LA DIV AVEC JS//////////
// //// Définition de la variable URL ////
let url = "http://localhost:3000/api/teddies/";
////Requête à l'url ////
fetch(url)
////Promesse qui se resoud si accès aux données ////
    .then((response) => response.json())
    //// Autre promesse qui se resoud si accès aux données ////
    .then((o) => { 
        let result = document.getElementById('result');
        let bear = document.getElementById("contenu").innerHTML;
        const newElt = document.createElement("div");
            for (let i = 0; i < o.length; i++){
                console.log(o);
                // if (o[i]["name"]){
                // for(nounours in o){ 
                    result.append(newElt);
                    result.innerHTML = bear;
                    bear=bear.replace("img.jpeg",o[i].imageUrl);     
                    bear=bear.replace("[title]",o[i].name);
                    /////dans #contenu, la class URL sera remplacée par le retour de description depuis la requête à l'url définie
                    bear=bear.replace("[description]",o[i].description); 
                    //Le lien sera celui de la page produit associée à l'id de l'ours
                    bear=bear.replace("[lienProduit]", "produit.html" + "?" + o[i]["_id"]);                                              
                    // result.appendChild.createElement(bear);  
                // } 
                // else {
                //     console.error("erreur");
                // } 
        }})  
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
             




