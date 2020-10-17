//////définition de la constante permettant de récupérer l'url selon l'id//////
const queryString = window.location.search.replace("?","");
//////s'il n'y a pas d'id, renvoie vers la page d'accueil comprenant tous les ours//////
if(queryString == ""){
    window.location = "http://127.0.0.1:5500/frontend/index.html";
}
//////définition de la variable propre à chaque ours //////
let url = "http://localhost:3000/api/teddies/" + queryString;

//////Requête vers l'url//////
fetch(url)
//////Quand la requête aboutit//////
    .then((response)=> response.json())
    //////Alors il exécutera la fonction suivante //////
    .then((o)=>{ 
        ////// variable précisant le chemin de la div à récupérer//////
        let bear = document.getElementById("contenu").innerHTML;
        //////pour chaque emplacement du html, on remplace par les retours de requête //////
        bear=bear.replace("img.jpeg",o.imageUrl);     
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
    })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));


//////////////////// TENTATIVE - ET + pour le panier /////////////////////
// let nombreBear = 0;   
// let quantite = document.getElementById("quantite").innerHTML;
// let plusOurs = document.getElementById("plus");
// for (let j=0; j<1; j++){
//     addEventListener("click", function () {
//         nombreBear++;
//         console.log(nombreBear);
//         quantite.innerHTML = parseInt(nombreBear);
// })};

// for (let j=0; j<1; j--){
//     addEventListener("click", function () {
//         nombreBear--;
//         console.log(nombreBear);
//         quantite.innerHTML;
// })};

////////////////////////CHOIX DE LA QUANTITE ///////////////
//////Création de liste déroulante relative à la quantité d'ours//////
let choice = document.getElementById('quantity');
    for (let i = 1; i<11; i++){
        let qtty = document.createElement('option');
        qtty.value = i;
        qtty.innerHTML = i;
        choice.appendChild(qtty);
    }

/*Clic sur le bouton du produit*/
//addEventListener a plusieurs paramètres car c'est une méthode
//premier paramètre = type d'écouteur d'évènement - ici au clic de la souris
// deuxième paramètre = fonction de callback - ne s'appliquera qu'une fois le clic fait - pas besoin de lui donner de nom car ne sera pas réappelée



/////////////récupération tableau contenant les infos à mettre dans localstorage//////
// let panier = [imageUrl, name, price, colors];

///////////////////////////AJOUT D'UN PRODUIT AU PANIER //////////////////////////
let ajoutPanier = document.getElementById("ajoutpanier");
class produit {
    constructor(imageUrl, name, price, colors, qtty) {
    this.imageUrl = imageUrl,
    this.name = name,
    this.price = price,
    this.colors = colors,
    this.stty = qtty
    }
};
ajoutPanier.addEventListener("click", function() {
    let produit = new produit(imageUrl[i], name[i], price[i], colors[i], qtty[i]);
        // if (produit != null) {
            localStorage.setItem (produit, JSON.stringify(""));
        // }
        // else{
        //     localStorage.setItem ('ajout', keyvalue);
        // }
});




// /*PRODUITS*/
// const color = "colors";
// const tab = ["colors","_id","name","price","imageUrl","description"];


// function ajout (){
//     let productNumber = localStorage.getItems('ajout');
//     if (productNumber) {
//         localStorage.setItem ('ajout', value);
//     }
//     else{
//         localStorage.setItem ('ajout', keyvalue);
//     }
// };