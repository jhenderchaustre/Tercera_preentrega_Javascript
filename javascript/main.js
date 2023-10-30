const articulosStore = document.getElementById("articulos");

const productos = [
    {
        id: 1,
        nombre: "Remeras",
        precio: "5000",
        img: "https://wildroadweb.com/wp-content/uploads/2020/11/DSCN1361-scaled.jpg"
    },
    {
        id: 2,
        nombre: "Anteojos",
        precio: 3500,
        img: "https://cdn.pixabay.com/photo/2017/08/06/19/33/eyewear-2595549_1280.jpg"
    },
    {
        id: 3,
        nombre: "Gorras",
        precio: 4000,
        img: "https://i.pinimg.com/564x/c2/0d/9c/c20d9c603681f6384a3e4711db79d14c.jpg"
    },
    {
        id: 4,
        nombre: "Zapatillas",
        precio: 15000,
        img: "https://i.pinimg.com/564x/e7/4a/70/e74a704bdca1ff65c00bb732cd330619.jpg"
    }
];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h2>${product.nombre}</h2>
    <p class="price">${product.precio} $</p>
    `;

    articulosStore.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        });
        console.log(carrito);
    });
});
