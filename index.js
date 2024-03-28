const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

/////////////////////////////////////////////////////////
//1er paso verificar que el evento al buscar arroje un resultado
//2do paso renderizar la card de la pizza
//Aplicar metodo find al buscador
//Guardar la info en el sessionstrage

///Llamados a realizar
const searchbox = document.getElementById ('pizzaboxsearch')
const renderpizza = document.querySelector ('.pizza-card')

//Funciones Auxiliares

//Caja de busqueda


const box_user_search = (e) => {
  e.preventdefault
  
  const numero_error = (1,2,3,4,5)

  if (numero_error > 5)
  {
    alert ('elegi un nro del 1 al 5')
  }
}

const inputuser = searchbox.addEventListener ('submit', box_user_search)




// //Renderizado de las cards
// const rendercard (pizza) = box_user_search.find {
//   const {id, nombre, precio, ingredientes, imagen}
//   return `<div class="pizza-card">
//   <img src="${pizza.imagen}" alt="">
//   <div class="pizza-info">
//       <h4>${pizza.nombre}</h4>
//       <span>${pizza.ingredientes}</span>
//       <span>Precio $${pizza.precio}</span>
//   </div>
// </div>`
// }