/*NAVIGATION*/
$(document).ready(function(){
    $('.button').click(function(){
        $('.navbar').toggleClass('isOpen');
    });
}); 


/*ACCUEIL*/
function recupBisounours (){
    let url  = "http://localhost:3000/api/teddies";
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            $('#result').html('');
                console.log(reponse);
                for (let i = 0; i < reponse.length ; i ++){
                    if (reponse[i]["name"]){
                        console.log(reponse[i]["name"]);
                        let bear = document.getElementById("contenu").innerHTML;
                        console.log(bear); 
                        bear=bear.replace("[url]",reponse[i]["imageUrl"]);
                        let urlBase = url + reponse[i]["_id"]; 
                        bear=bear.replace("[id]",urlBase);
                        bear=bear.replace("[title]",reponse[i]["name"]);
                        console.log(reponse[i]["name"]);
                        bear=bear.replace("[description]",reponse[i]["description"]);
                        $('#result').append(bear);
                        console.log(bear);
                    }   
            }
        } else {
            console.error(reponse);
        }
    }
    request.send(null);
};

/*Clic sur le bouton du produit*/
let boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", function () {
    console.log("clic");
});

//essai pour remplacement url à insérer après ligne 15
///var urlbase = reponse[i]["imageUrl"];   

//conservation ligne 16 initiale 
///bear=bear.replace("[url]",reponse[i]["imageUrl"]);


/*autre formule à partir cours
function recupBisounours (){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);{
            if (request.readyState == 4 && request.status == "200") {
            $('#result').html('');
            console.log(reponse);
            for (var i = 0; i < reponse.length ; i ++){
                if(reponse[i]["name"]){
                    let bear = $('#contenu').parent().html(); 
                    bear=bear.replace("[url]",reponse[i]["imageUrl"]);
                    bear=bear.replace("[id]",reponse[i]["_id"]);
                    bear=bear.replace("[title]",reponse[i]["name"]);
                    console.log(reponse[i]["name"]);
                    bear=bear.replace("[description]",reponse[i]["description"]);
                    $('#result').append(bear);
                    console.log(bear);
                }   
            }  
            } else {
                console.error(reponse);
            }
    }    
};
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
}
*/
//affichage pour tout le tableau
let tab = ["Norbert", "Gustav", "Garfunkel", "Lenny and Carl", "Arnold"];
for (let i=0; i<tab.length;i+=1){
    console.log(tab[i]);
};

//Essayer de récuperer depuis le tableau pour affichage
for (let i=0; i<colors.length;i+=1){
    console.log(tab[i]);
};

// variable bouton augmenter quantité
for (let i = 0; i<99; i+=1);{

}

// variable bouton augmenter quantité
for (let i = 0; i>-1; i-=1);{

}

/* Pour l'ajout dans le panier 
localStorage.setItem("", JSON.stringify(.....));
*/
/* AJOUT D'UN PRODUIT AU PANIER
function ajout (){
    let productNumber = localStorage.getItems('ajout');
    if (productNumber) {
        localStorage.setItem ('ajout', value);
    }
    else{
        localStorage.setItem ('ajout', keyvalue);
    }
}*/

/*PRODUITS*/
//////affichage des cards /////
function recupBisounoursProduits (){
    let url  = "http://localhost:3000/api/teddies";
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        let reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            console.log(reponse);
            for (let i = 0; i < reponse.length ; i ++){
                console.log(reponse[i]["imageUrl"])
                console.log(reponse[i]["colors"])
                console.log(reponse[i]["description"])
                console.log(reponse[i]["id"])
                console.log(reponse[i]["name"])                
            }
        } else {
            console.error(reponse);
        }
    }
    request.send(null);
}
/*src https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3722361-utilisez-des-api-web*/
/*var image = document.getElementById("img");
ajaxGet("http://localhost:3000/api/teddies",
function (reponse) {
    var teddy = JSON.parse(reponse);
    var imageUrl.elt = document.createElement("img");
    imageUrl.src = image.imageUrl;
    image.appendChild(imageTeddy);
});
*/

/*PANIER*/
function recupBisounoursPanier (){
    let url  = "http://localhost:3000/api/teddies";
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        let reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            console.log(reponse);
            for (let i = 0; i < reponse.length ; i ++){
                console.log(reponse[i]["imageUrl"])
                console.log(reponse[i]["colors"])
                console.log(reponse[i]["name"])                
            }
        } else {
            console.error(reponse);
        }
    }
    request.send(null);
}

/* vérification données formulaires*/
let request = new XMLHttpRequest();
request.open("POST", url + "/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(jsonBody));
