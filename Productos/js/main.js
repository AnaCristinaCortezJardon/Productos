function getData() {
    let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json()
            .then((data) => {
                createCards(data);
            })
            .catch(
                (error) => {
                    console.error("Problema en el json", error)
                }
            );
    })
        .catch((error) => {
            console.error(error, "Ocurrió un error en la solicitud");
        });
}//GetData

getData();
/*function createCards(data){
    data.forEach(producto => {
        console.log(producto.id, producto.title);
    });
}*///create cards


let mainProds = document.getElementById("mainProds");
function createCards(prods) {
    prods.forEach((prod) => {
        mainProds.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
                <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
                <div class="card-body">
                    <h5 class="card-title">${prod.title}</h5>
                    <p class="card-text"> <strong>${prod.description}</strong></p>
                    <p class="card-price">${prod.price}</p>
                    <button class="btn btn-primary btn-ver-mas" data-title="${prod.title}" data-description="${prod.description}" data-price="${prod.price}">Ver más</button>
                </div>
            </div>`
        );
    });
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-ver-mas")) {
        const title = event.target.dataset.title;
        const description = event.target.dataset.description;
        const price = event.target.dataset.price;
        alert(`Product: ${title}\nDescription: ${description}\nPrice: $ ${price}`);
    }
});

