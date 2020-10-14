//
const queryString = window.location.search.replace("?","");
//clic sur produits - si vide renvoie vers la page d'accueil comprenant tous les nounours
if(queryString == ""){
    window.location = "http://127.0.0.1:5500/frontend/index.html";
}
let url = "http://localhost:3000/api/teddies/" + queryString;

fetch(url).then((response)=> response.json().then((o)=>{ 
        let bear = document.getElementById("contenu").innerHTML;
        bear=bear.replace("img.jpeg",o.imageUrl);     
        bear=bear.replace("[title]",o.name);
        bear=bear.replace("[description]",o.description);
        bear=bear.replace("[price]",o.price /100 + " €");           
        document.getElementById('result').innerHTML = bear;
        let select = document.getElementById('colorselect');
        for (let i = 0; i<=o.colors.length; i++){
            if(o.colors[i] != undefined){
            let opt = document.createElement('option');
            opt.value = o.colors[i];
            opt.innerHTML = o.colors[i];
            select.appendChild(opt);
            }
        }
}
));

/*Clic sur le bouton du produit*/
//addEventListener a plusieurs paramètres car c'est une méthode
//premier paramètre = type d'écouteur d'évènement - ici au clic de la souris
// deuxième paramètre = fonction de callback - ne s'appliquera qu'une fois le clic fait - pas besoin de lui donner de nom car ne sera pas réappelée


/*PROBLEME - PROPOSE DES VALEURS NEGATIVES*/
// let nombreBear = 0;
// let quantite = document.getElementById("quantite");

// function onClickMoins(){
//     nombreBear -= 1;
//     quantite.innerHTML = nombreBear;
// };


// à mettre dans bouton plus html : onClick="onClickPlus()"  
//     function onClickPlus(){
//         nombreBear += 1;
//         quantite.innerHTML = nombreBear;
// };

let nombreBear = 0;   
let quantite = document.getElementById("quantite").innerHTML;
const plus = document.getElementById("plus");
for (let j=0; j<1; j++){
    plus.addEventListener("click", function () {
        nombreBear++;
        console.log(nombreBear);
        quantite.innerHTML = nombreBear;
})};

// for (let j=0; j<1; j--){
//     addEventListener("click", function () {
//         nombreBear--;
//         console.log(nombreBear);
//         quantite.innerHTML;
// })};
    


/////////////récupération tableau contenant les infos à mettre dans localstorage//////
// let panier = [imageUrl, name, price, colors];


///////////////////////////777 /* AJOUT D'UN PRODUIT AU PANIER
// /* Pour l'ajout dans le panier 
// localStorage.setItem("", JSON.stringify(.....));
// */


function ajout (){
    let productNumber = localStorage.getItems('ajout');
    if (productNumber) {
        localStorage.setItem ('ajout', value);
    }
    else{
        localStorage.setItem ('ajout', keyvalue);
    }
};


// //Création de la promesse
// const promiseGetBears = new Promise(function(resolve, reject){
//     if(name !== 'undefined'){
//         resolve(tab[1]);
//     } else {
//         reject('accès aux ours impossible');
//     }
// });
