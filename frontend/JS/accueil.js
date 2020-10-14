// // /*ACCUEIL*/
function recupBisounours (){
    let url  = "http://localhost:3000/api/teddies";
    // création de la requête ajax
    let request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            $('#result').html('');
//initialisation de la variable i + création de la boucle
                for (let i = 0; i < reponse.length ; i ++){
                    //Si la requête nous retourne le nom
                    if (reponse[i]["name"]){
                        //création de la variable bear : récupère l'id "contenu" du document en vu de remplacer
                        let bear = document.getElementById("contenu").innerHTML;
                        //dans #contenu, la class URL sera remplacée par le retour de imageUrl depuis la requête à l'url définie
                        bear=bear.replace("img.jpeg",reponse[i]["imageUrl"]);
                        //dans #contenu, la class URL sera remplacée par le retour de name depuis la requête à l'url définie 
                        bear=bear.replace("[title]",reponse[i]["name"]);
                        //dans #contenu, la class URL sera remplacée par le retour de description depuis la requête à l'url définie
                        bear=bear.replace("[description]",reponse[i]["description"]);
                        //Le lien sera celui de la page produit associée à l'id de l'ours
                        bear=bear.replace("[lienProduit]", "produit.html" + "?" + reponse[i]["_id"]);                                      
                        //le contenu de la variable bear se placera dans la div ayant l'id result
                        $('#result').append(bear);
                    }   
            }
        } else {
            console.error(reponse);
        }
    }
    request.send(null);
};


////////////// A CONTINUER POUR SUPPRIMER JQUERY ET ENVISAGER LA CREATION DE LA DIV AVEC JS//////////
// let url = "http://localhost:3000/api/teddies/";
// fetch(url).then((response)=> response.json().then((o)=>{ 
//         for (var i = 0; i<=o.length; i++){
//             for(nounours in o){
//                 const newEltDiv = document.createElement("div");
//                 const newDivCard = document.createElement("div");
//                 const newDivCardBody = document.createElement("div");

//                 let contenu = document.getElementById('contenu'); 
                
//                 let eltDiv = document.getElementById("result");
//                 eltDiv.appendChild(newEltDiv);   
//                 eltDiv.appendChild(contenu); 
// // //            //Ajoute une class CSS à un élément HTML 
// //             result.innerHTML = contenu;
//             let bear = document.getElementById("contenu").innerHTML;
//             bear=bear.replace("[src]",o.imageUrl);     
//             bear=bear.replace("[title]",o.name);
//             bear=bear.replace("[description]",o.description);         
//             document.getElementById('result').innerHTML = bear;      
//             } 
//         }
//     }
// ));


// /*PRODUITS*/
// const color = "colors";
// const tab = ["colors","_id","name","price","imageUrl","description"];




//Essayer de récuperer depuis le tableau pour affichage
// for (let i=0; i<colors.length;i+=1){
//     console.log(tab[i]);
// };

// // variable bouton augmenter quantité
// for (let i = 0; i<99; i+=1){

// };

// // variable bouton augmenter quantité
// for (let i = 0; i>-1; i-=1){

// };

// /* Pour l'ajout dans le panier 
// localStorage.setItem("", JSON.stringify(.....));
// */
// /* AJOUT D'UN PRODUIT AU PANIER
// function ajout (){
//     let productNumber = localStorage.getItems('ajout');
//     if (productNumber) {
//         localStorage.setItem ('ajout', value);
//     }
//     else{
//         localStorage.setItem ('ajout', keyvalue);
//     }
// }*/