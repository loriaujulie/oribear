///////////////////// PAGE PRODUIT.HTML /////////////////////

//////définition de la constante permettant de récupérer l'url selon l'id//////
const queryString = window.location.search.replace("?","");
//////s'il n'y a pas d'id, renvoie vers la page d'accueil comprenant tous les ours//////
if(queryString == ""){
    window.location = "http://127.0.0.1:5500/frontend/index.html";
}
//////définition de la variable propre à chaque ours //////
url = url + queryString;

//////Requête vers l'url - fetch = fonction asynchrone //////
fetch(url)
    //////Quand la requête aboutit//////
    .then((response) => response.json())
    //////Alors il exécutera la fonction suivante //////
    .then((o) => { 
        ////// variable précisant le chemin de la div à récupérer//////
        bear = document.getElementById("bear").innerHTML;

        //////pour chaque emplacement du html, on remplace par les retours de requête //////
        bear = bear.replace("img.jpg", o.imageUrl);     
        bear = bear.replace("[title]", o.name);
        bear = bear.replace("[description]", o.description);
        bear = bear.replace("[price]", o.price /100 + " €");   

        //////à l'emplacement result, le bear ci-dessus sera intégré//////         
        document.getElementById("result").innerHTML = bear;

        ////// création de la variable relative à l'emplacement de colorselect //////
        select = document.getElementById("colorselect");

        ////// BOUCLE CREANT LES OPTIONS DE PERSONNALISATION DES COULEURS //////
        for (let i = 0; i <= o.colors.length; i++){
            //////anticipation du problème selon lequel il pourrait ne pas y avoir de couleur définie//////
            if(o.colors[i] != undefined) {
                ////// création des options selon le nombre de couleurs proposées par produit //////
                options = document.createElement("option");
                options.value = o.colors[i];
                options.innerHTML = o.colors[i];
                // intégration des options//////
                select.appendChild(options);
                colorSelect = select.options[select.selectedIndex].text;
            }               
        } 

        ////////////////////// AUGMENTER LA QUANTITE /////////////// 
        moinsOurs = document.getElementById("moins");
        moinsOurs.addEventListener("click", function () {            
            /////variable contenant la valeur de l'élément quantité/////
            quantite = document.getElementById("quantite").innerHTML;

            ///// condition selon laquelle la fonction ne s'applique que si la quantité est supérieure à 1/////
            if(parseInt(quantite) > 1) {
                document.getElementById("quantite").innerHTML = parseInt(quantite)-1;
            }
        });

        ////////////////////// DIMINUER LA QUANTITE /////////////// 
        plusOurs = document.getElementById("plus");
        plusOurs.addEventListener("click", function () {
            quantite = document.getElementById("quantite").innerHTML;
            document.getElementById("quantite").innerHTML = parseInt(quantite)+1;            
        }); 

        //////////////////////AJOUT D'UN PRODUIT AU LOCALSTORAGE///////////////
        document.getElementById("ajoutpanier").addEventListener("click", function() {            
            select = document.getElementById("colorselect");
            colorSelect = select.options[select.selectedIndex].text;            
            quantite = document.getElementById("quantite").innerHTML;
            produits = {
                imageUrl : o.imageUrl, 
                name : o.name, 
                price : o.price/100,
                color : colorSelect, 
                quantite : parseInt(quantite),
                id : o._id
            }
            if (produits !=  null && colorSelect != "Choisir la couleur") {
                if(produits.id + produits.color in localStorage){
                    produitLigne = JSON.stringify(produits);
                    localStorage.setItem(produits.id + produits.color, produitLigne);
                    alert("Cet ours est déjà dans le panier, sa quantité est actualisée");
                } else {
                    alert("Cet ours vient d'être ajouté au panier");
                    produitLigne = JSON.stringify(produits);
                    localStorage.setItem(produits.id + produits.color, produitLigne);
                }
            } else {
                alert("Veuillez préalablement choisir une couleur");         
            }});
        })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur))