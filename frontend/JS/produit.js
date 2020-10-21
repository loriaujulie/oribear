//////définition de la constante permettant de récupérer l'url selon l'id//////
const queryString = window.location.search.replace("?","");
//////s'il n'y a pas d'id, renvoie vers la page d'accueil comprenant tous les ours//////
if(queryString == ""){
    window.location = "http://127.0.0.1:5500/frontend/index.html";
}
//////définition de la variable propre à chaque ours //////
let url = "http://localhost:3000/api/teddies/" + queryString;

/////Création d'un constructor réutilisable contenant les informations à afficher et conserver/////
class produit {
    constructor(imageUrl, name, price, colors, _id) {
    this.imageUrl = imageUrl,
    this.name = name,
    this.price = price,
    this.colors = colors,
    this.id = _id
    }
};
/////initialisation de la variable listeProduits
let listeProduit = null;

//////Requête vers l'url - fetxh = fonction asynchrone //////
fetch(url)
//////Quand la requête aboutit//////
    .then((response)=> response.json())
    //////Alors il exécutera la fonction suivante //////
    .then((o)=>{ 
        listeProduit = new produit;
        ////// variable précisant le chemin de la div à récupérer//////
        let bear = document.getElementById("contenu").innerHTML;
        //////pour chaque emplacement du html, on remplace par les retours de requête //////
        bear=bear.replace("img.jpg",o.imageUrl);     
        bear=bear.replace("[title]",o.name);
        bear=bear.replace("[description]",o.description);
        bear=bear.replace("[price]",o.price /100 + " €");  
        //////à l'emplacement result, le contenu ci-dessus sera intégré//////         
        document.getElementById('result').innerHTML = bear;
        //////création de la variable relative à l'emplacement de colorselect//////
        let select = document.getElementById('colorselect');
        //////création de la boucle s'appliquant sur toute la longueur du tableau d'option de couleurs//////
        for (let i = 0; i<=o.colors.length; i++){
            //////anticipation du problème selon lequel il pourrait ne pas y avoir de couleur définie//////
            if(o.colors[i] != undefined){
                //////création des options selon le nombre de couleurs proposées par produit//////
                let options = document.createElement('option');
                options.value = o.colors[i];
                options.innerHTML = o.colors[i];
                //////intégration des options//////
                select.appendChild(options);
            }
        } 
        /////
        let moinsOurs = document.getElementById("moins");
        /////
        moinsOurs.addEventListener("click", function (){            
            /////variable contenant la valeur de l'élément quantité/////
            let quantite = document.getElementById("quantite").innerHTML;
            ///// condition selon laquelle la fonction ne s'applique que si la quantité est supérieure à 1/////
            if(parseInt(quantite) > 1){
                ///// /////
                document.getElementById("quantite").innerHTML = parseInt(quantite)-1;
            }
        });
        let plusOurs = document.getElementById("plus");
        plusOurs.addEventListener("click", function (){
            //valeur de l'élement
            let quantite = document.getElementById("quantite").innerHTML;
            //l'élement lui-même dont on modifie la valeur
            document.getElementById("quantite").innerHTML = parseInt(quantite)+1;            
        }); 
        //////////////////////AJOUT D'UN PRODUIT AU LOCALSTORAGE///////////////
        document.getElementById("ajoutpanier").addEventListener("click", function() {
        console.log(produit);
            if (produit != null) {    
                localStorage.setItem(JSON.stringify(o.name), parseInt(quantite));
                // alert("Le produit a été ajouté au panier");
            }
            else{
                localStorage.setItem ("erreur");
            }});
        })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur))

// document.getElementById("ajoutpanier").addEventListener("click", function(e) {
//     e.preventDefault();
//     liste = new produit;
//     let ajoutLocalStorage = produit.value;
//         // if (produit != null) {    
//         localStorage.setItem ("produit", JSON.stringify(produit));       
//             // console.log(produit);
//         // }
//         // else{
//         //     localStorage.setItem ("erreur");
//         // }
// });



// Méthode de stockage document.getElementById('stockage').onclick = function() { 
//     if(typeof localStorage!='undefined' && JSON) {
// //     let coordonnees = { nom:document.getElementById('nom').value, prenom:document.getElementById('prenom').value, ville:document.getElementById('ville').value, }; 
// localStorage.setItem('coord',JSON.stringify(coordonnees)); alert("Mémorisation effectuée"); }
// // else alert("localStorage n'est pas supporté");};

// // // Méthode de lecture
// // document.getElementById('lecture').onclick = function() { 
//     if(typeof localStorage!='undefined' && JSON) {
// // let coordonnees = JSON.parse(localStorage.getItem('coord')); document.getElementById('nom').value = coordonnees.nom; document.getElementById('prenom').value = coordonnees.prenom; document.getElementById('ville').value = coordonnees.ville;
// // alert("Lecture effectuée");
// // } else {
//     alert("localStorage n'est pas supporté");
// };


// function ajout (){
//     let productNumber = localStorage.getItems('ajout');
//     if (productNumber) {
//         localStorage.setItem ('ajout', value);
//     }
//     else{
//         localStorage.setItem ('ajout', keyvalue);
//     }
// };