let informacion = fetch("https://fakestoreapi.com/products");
let contenedor = document.getElementById("contenedor");


fetch("https://fakestoreapi.com/products")
//convertir a json
.then(resp => resp.json())

//me muestre los productos n index
.then(data => {
    data.forEach(prod => {
        contenedor.innerHTML += 
        `<div class="productos">
            <div class="img-container">
                <img class="img-prod" src="${prod.image}" alt="productos">
            </div>

            <div class="titulo-container">
                <h2 class="titulo">${prod.title}</h2>
            </div>

            <div class="descripcion-container">
                <p class="descripcion">Descripcion: ${prod.description}</p>
            </div>
            
            <div class="precio-container">
                <h4 class="precio">Precio: ${prod.price}</h4>
                <p class="rating">${prod.rating.count} - ${prod.rating.rate}</p>
            </div>
        </div>
`
    })
})

//category - description - id - image - price - rating.count.rate


//por si falla
.catch(err => console.log(err))