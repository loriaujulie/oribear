fetch(url + "order")
    .then((response) => response.json())
    .then((order) => {
        // result = document.getElementsById("numerocommande");
        localStorage.getItem("prix");
        prix = document.getElementsById("prixtotal").innerHTML;
        prix.innerHTML=order.prix;
        result.innerHTML = JSON.parse(order)
    })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur)); 



