/*ACCUEIL*/
function recupBisounours (){
    var url  = "http://localhost:3000/api/teddies";
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function () {
        var reponse = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "200") {
            $('#result').html('');
            console.log(reponse);
            let bear=null;
            for (var i = 0; i < reponse.length ; i ++){
                if(reponse[i]["name"]){
                    bear = $('#contenu').parent().html();
                    console.log(bear); 
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
    request.send(null);
}

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
*/

/* Pour l'ajout dans le panier 
localStorage.setItem("", JSON.stringify(.....));
*/

/*PRODUITS*/
function recupBisounoursProduits (){
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
function recupBisounoursPanier (){
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

/* vérification données formulaires
var request = new XMLHttpRequest();
request.open("POST", "url à définir");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(jsonBody));
*/