/*ACCUEIL*/
function RecupBisounours (){
    var url  = "http://localhost:3000/api/teddies";
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            /*console.log(reponse);*/
            for (var i = 0; i < reponse.length ; i ++){
                console.log(reponse[i]["imageUrl"])
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


/* requete de type GET


/*PRODUITS*/
function RecupBisounoursProduits (){
    var url  = "http://localhost:3000/api/teddies";
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            /*console.log(reponse);*/
            for (var i = 0; i < reponse.length ; i ++){
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
/*PANIER*/
function RecupBisounoursPanier (){
    var url  = "http://localhost:3000/api/teddies";
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            /*console.log(reponse);*/
            for (var i = 0; i < reponse.length ; i ++){
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