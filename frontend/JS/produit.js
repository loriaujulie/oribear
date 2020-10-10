//
const queryString = window.location.search.replace("?","");
console.log(queryString);
//clic sur produits - si vide renvoie tous les nounours
if(queryString == ""){
    window.location = "http://127.0.0.1:5500/frontend/index.html";
}
let url = "http://localhost:3000/api/teddies/" + queryString;
fetch(url).then((response)=> response.json().then((o)=>{ 
        let bear = document.getElementById("contenu").innerHTML;
        bear=bear.replace("[url]",o.imageUrl);     
        bear=bear.replace("[title]",o.name);
        bear=bear.replace("[description]",o.description);
        bear=bear.replace("[price]",o.price /100 + " €");           
        document.getElementById('result').innerHTML = bear;
        var select = document.getElementById('colorselect');
        for (var i = 0; i<=o.colors.length; i++){
            if(o.colors[i] != undefined){
            var opt = document.createElement('option');
            opt.value = o.colors[i];
            opt.innerHTML = o.colors[i];
            select.appendChild(opt);
            }
        }
}
));

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


// //Création de la promesse
// const promiseGetBears = new Promise(function(resolve, reject){
//     if(name !== 'undefined'){
//         resolve(tab[1]);
//     } else {
//         reject('accès aux ours impossible');
//     }
// });

//requête au serveur
// fetch("http://localhost:3000/api/teddies/:_id")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(err => console.log("Erreur : " + err));