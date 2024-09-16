let informacion = fetch("https://fakestoreapi.com/products");
let contenedor = document.getElementById("contenedor");


fetch("https://fakestoreapi.com/products")
//convertir a json
.then(resp => resp.json())

//me muestre por consola
.then(data => {
    data.forEach(prod => {
        contenedor.innerHTML += 
        `<img class="img-prod" src="${prod.image}" alt="productos">
        <h2 class="titulo">${prod.title}</h2>
        <p class="descripcion">Descripcion: ${prod.description}</p>
        <h4 class="precio">Precio: ${prod.price}</h4>
        <p class="rating">${prod.rating.count} - ${prod.rating.rate}</p>`
    })
})

//category - description - id - image - price - rating.count.rate


//por si falla
.catch(err => console.log(err))