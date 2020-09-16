import { norbert, arnold, lenny and carl, gustav, garfunkel}

$(document).ready(function(){
    $('.button').click(function(){
        $('.navigation').toggleClass('isOpen');
    });
}); 


//évènement clic bouton
//const elt = document.getElementsByTagName('button');    // On récupère l'élément sur lequel on veut détecter le clic
//elt.addEventListener('click', function() {          // On écoute l'événement click
//    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
//});

//lors clic sur le lien, envoyer vers la page en séléctionnant l'ours choisi
//const elt = document.getElementById('a');           // On récupère l'élément sur lequel on veut détecter le clic
//elt.addEventListener('click', function() {          // On écoute l'événement click
//});



//VARIABLES
/*const teddies[Norbert, Arnold, Lenny and Carl, Gustav, Garfunkel];*/

class Teddy{
    constructor (id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = image;
    }
}
let norbert = new Teddy(
    "5be9c8541c9d440000665243", "Norbert", 2900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_1.jpg",
    /*"colors":["Tan","Chocolate","Black","White"]"*/
); 
let arnold = new Teddy(
    "5beaa8bf1c9d440000a57d94", "Arnold", 3900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_2.jpg", 
    /*"colors":["Pale brown","Dark brown","White"],*/
); 
let lennyAndCarl = new Teddy(
    "5beaaa8f1c9d440000a57d95", "Lenny and Carl", 5900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_3.jpg",
    /*"colors":["Brown"],*/
);  
let gustav = new Teddy(
    "5beaabe91c9d440000a57d96", "Gustav", 4500, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_4.jpg",
    /*"colors":["Brown","Blue","Pink"], */
);  
let garfunkel = new Teddy(
    "5beaacd41c9d440000a57d97", "Garfunkel", 5500, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_5.jpg"
    /*"colors":["Beige","Tan","Chocolate"],*/
); 
console.log(norbert);
console.log(arnold);
console.log(lennyAndCarl);
console.log(gustav);
console.log(garfunkel);

const name = document.createElement ("div");
name.innerHTML = garfunkel.name + "€";

let elt = document.getElementById('gustav');
elt.innerHTML = "ryeryrtuytiyu";
/*
#norbert {
    console log(norbert)
};


const voir = document.getElementById('addNorbert');
voir.addEventListener('click', function() {
    voir.innerHTML = "C'est cliqué !";
});

/*pour accéder aux données (ex pour le name), ecrire let maroonName = maroon.name;

/*let prenom="albert", nom="einstein";
*let quantity =  ; 
*let totalNorbertPrice =  ; 
*let totalArnoldPrice =  ; 
*let totalLennyAndCarlPrice =  ; 
*let totalGustavPrice =  ; 
*let totalGarfunkelPrice =  ; 
*let value = "euros" ; 
*let finalNorbertPrice = totalNorbertPrice + value; 
*let finalArnoldPrice = totalArnoldPrice + value; 
*let finalLennyAndCarlPrice = totalLennyAndCarlPrice + value; 
*let finalGustavPrice = totalGustavPrice + value; 
*let finalGarfunkelPrice = totalGarfunkelPrice + value; 
*let   =  ; 
// let  =  ; */


//EVENTUELLES CONSTANTES//
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //


//FONCTIONS//
// function prixTotal (){    return nombre * prix;   } //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

//MAP DES EVENEMENTS : //
// Index : 
// au clic sur panier, envoie sur page panier   //
// au clic sur  //
// //
// //
// //
// //
// Produit : //
// lors choix de la couleur, affiche l'image correspondante //
// lors clic sur ajouter au panier, ajoute un ours au panier et reste sur la page //
// lors clic sur +, ajoute un ours au panier en restant sur la page //
// lors clic sur -, enlève un ours au panier en restant sur la page //
// //
// //
// //
// //
// //
// Panier : //
// //
// //
// //
// //
// //
// //
// Commande : //
// //
// //
// //


/*Point sur les addEventListener//
* écouter les évènements

/*Qu'est ce que les XHR */
