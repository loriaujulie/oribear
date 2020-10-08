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
//initialisation de la variable let + création de la boucle
                for (let i = 0; i < reponse.length ; i ++){
                    //Si la requête nous retourne le nom
                    if (reponse[i]["name"]){
                        //création de la variable bear : récupère l'id "contenu" du document en vu de remplacer
                        let bear = document.getElementById("contenu").innerHTML;
                        //dans #contenu, la class URL sera remplacée par le retour de imageUrl depuis la requête à l'url définie
                        bear=bear.replace("[url]",reponse[i]["imageUrl"]);
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
//initialisation de la variable let + création de la boucle
                for (let i = 0; i < reponse.length ; i ++){
                    //Si la requête nous retourne le nom
                    if (reponse[i]["name"]){
                        //création de la variable bear : récupère l'id "contenu" du document en vu de remplacer
                        let bear = document.getElementById("contenu").innerHTML;
                        //dans #contenu, la class URL sera remplacée par le retour de imageUrl depuis la requête à l'url définie
                        bear=bear.replace("[url]",reponse[i]["imageUrl"]);
                        //dans #contenu, la class URL sera remplacée par le retour de name depuis la requête à l'url définie 
                        bear=bear.replace("[title]",reponse[i]["name"]);
                        //dans #contenu, la class URL sera remplacée par le retour de description depuis la requête à l'url définie
                        bear=bear.replace("[description]",reponse[i]["description"]);
                        bear=bear.replace("[lienProduit]", "produit.html" + "?" + reponse[i]["_id"]);
                        /*
                        document.querySelector("a").addEventListener("click", function (event) {
                            open("http://localhost:3000/api/teddies" + "/" + reponse[i]['_id']);
                        });      */                  
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

/*PRODUITS*/
function recupBisounoursProduits (){
    let url  = "http://localhost:3000/api/teddies";
    let request = new XMLHttpRequest()
    request.open('GET', url + "_id", true)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            $('#result').html('');
                console.log(reponse);
//initialisation de la variable let + création de la boucle
                for (let i = 0; i < reponse.length ; i ++){
                    //Si la requête nous retourne le nom
                    if (reponse[i]["name"]){
                        //création de la variable bear : récupère l'id "contenu" du document en vu de remplacer
                        let bear = document.getElementById("contenu").innerHTML;
                        //dans #contenu, la class URL sera remplacée par le retour de imageUrl depuis la requête à l'url définie
                        bear=bear.replace("[url]",reponse[i]["imageUrl"]);
                        //dans #contenu, la class URL sera remplacée par le retour de name depuis la requête à l'url définie 
                        bear=bear.replace("[title]",reponse[i]["name"]);
                        //dans #contenu, la class URL sera remplacée par le retour de description depuis la requête à l'url définie
                        bear=bear.replace("[description]",reponse[i]["description"]);
                        bear=bear.replace("[lienProduit]", "produit.html" + "?" + reponse[i]["_id"]);
                        /*
                        document.querySelector("a").addEventListener("click", function (event) {
                            open("http://localhost:3000/api/teddies" + "/" + reponse[i]['_id']);
                        });      */                  
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

