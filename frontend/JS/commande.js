fetch(url + "order")
    .then((response) => response.json())
    .then((order) => {
        result = document.getElementsById("numerocommande");
        result.innerHTML = JSON.parse(order)
    })
    .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur)); 




    // fetch(form.action, { method: form.method, body: new FormData(form) })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // return false;
    // .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur)); 