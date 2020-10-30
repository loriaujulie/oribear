//////définition de la constante permettant de récupérer l'url selon l'id//////
const queryString = window.location.search.replace("?","");
//////s'il n'y a pas d'id, renvoie vers la page d'accueil comprenant tous les ours//////
if(queryString == ""){
    window.location = "http://127.0.0.1:5500/frontend/index.html";
}
//////définition de la variable propre à chaque ours //////
////A MODIFIER UNE FOIS VARIABLE IMPORTEE////
let url = "http://localhost:3000/api/teddies/" + queryString;

//////Requête vers l'url - fetch = fonction asynchrone //////
////A MODIFIER UNE FOIS VARIABLE IMPORTEE////
fetch(url)
//////Quand la requête aboutit//////
    .then((response)=> response.json())
    //////Alors il exécutera la fonction suivante //////
    .then((o)=>{ 
        ////// variable précisant le chemin de la div à récupérer//////
        let bear = document.getElementById("bear").innerHTML;
        //////pour chaque emplacement du html, on remplace par les retours de requête //////
        bear=bear.replace("img.jpg",o.imageUrl);     
        bear=bear.replace("[title]",o.name);
        bear=bear.replace("[description]",o.description);
        bear=bear.replace("[price]",o.price /100 + " €");  
        //////à l'emplacement result, le bear ci-dessus sera intégré//////         
        document.getElementById('result').innerHTML = bear;
        //////création de la variable relative à l'emplacement de colorselect//////
        let select = document.getElementById('colorselect');

        ////// BOUCLE CREANT LES OPTIONS DE PERSONNALISATION DES COULEURS //////
        for (let i = 0; i<=o.colors.length; i++){
            //////anticipation du problème selon lequel il pourrait ne pas y avoir de couleur définie//////
            if(o.colors[i] != undefined){
                //////création des options selon le nombre de couleurs proposées par produit//////
                let options = document.createElement('option');
                options.value = o.colors[i];
                options.innerHTML = o.colors[i];
                //////intégration des options//////
                select.appendChild(options);
                let colorSelect = select.options[select.selectedIndex].text;
                // listeProduit = [o.imageUrl,o.name,o.price/100, colorSelect];
            }               
        } 

        ////////////////////// AUGMENTER LA QUANTITE /////////////// 
        let moinsOurs = document.getElementById("moins");
        moinsOurs.addEventListener("click", function (){            
            /////variable contenant la valeur de l'élément quantité/////
            let quantite = document.getElementById("quantite").innerHTML;
            ///// condition selon laquelle la fonction ne s'applique que si la quantité est supérieure à 1/////
            if(parseInt(quantite) > 1){
                /////  /////
                document.getElementById("quantite").innerHTML = parseInt(quantite)-1;
            }
        });

        ////////////////////// DIMINUER LA QUANTITE /////////////// 
        let plusOurs = document.getElementById("plus");
        plusOurs.addEventListener("click", function (){
            // valeur de l'élement //
            let quantite = document.getElementById("quantite").innerHTML;
            //l'élement lui-même dont on modifie la valeur //
            document.getElementById("quantite").innerHTML = parseInt(quantite)+1;            
        }); 

        //////////////////////AJOUT D'UN PRODUIT AU LOCALSTORAGE///////////////
        document.getElementById("ajoutpanier").addEventListener("click", function() {            
            let select = document.getElementById("colorselect");
            let colorSelect = select.options[select.selectedIndex].text;            
            quantite = document.getElementById("quantite").innerHTML;
                        // const listeProduit = new produit(o.imageUrl, o.name, o.price/100, colorSelect, parseInt(quantite));
                        // if (listeProduit !=  null && colorSelect != "Choisir la couleur") {
            let produits = {
                imageUrl: o.imageUrl, 
                name: o.name, 
                price : o.price/100,
                color : colorSelect, 
                quantite : parseInt(quantite)
            }
                        // if (listeProduit !=  null && colorSelect != "Choisir la couleur") {
            if (produits !=  null && colorSelect != "Choisir la couleur") {
            let produitLigne = JSON.stringify(produits);
            localStorage.setItem("bearOurs", produitLigne);
                        // listeProduit = [o.imageUrl,o.name,o.price/100, colorSelect, parseInt(quantite)];                
                        // localStorage.setItem("Ours"+o.name,JSON.stringify(listeProduit));
                alert("Le produit a été ajouté au panier");         
            } else {
                alert("Veuillez préalablement choisir une couleur");         
            }});
        })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur))